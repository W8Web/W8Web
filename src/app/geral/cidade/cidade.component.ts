import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CidadeService } from '../services/cidade.service';
import { CidadeDetalheComponent } from '../cidade-detalhe/cidade-detalhe.component';
import { Cidade } from './cidade';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  formCidade: FormGroup;
  cidades: Cidade[] = [];
  colunasTab = ['imagem', 'id', 'nome', 'uf', 'regiao', 'codigoIbge'];

  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(

    private service: CidadeService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {

    this.montarFormulario();

    this.listarCidades( this.pagina, this.tamanho );

  }

  montarFormulario(): void {
    this.formCidade = this.fb.group({
      formCidade_nome:    [ '' , [Validators.required, Validators.maxLength(50)] ],
      formCidade_codIbge: [ '' , [Validators.required, Validators.maxLength(5)] ],
      formCidade_regiao:  [ '' , [Validators.required, Validators.maxLength(20)] ],
      formCidade_uf:      [ '' , [Validators.required, Validators.maxLength(2), Validators.minLength(2)] ]
    });
  }


  listarCidades( pagina = 0, tamanho = 10 ): void {
    this.service.listar( pagina, tamanho ).subscribe( resposta => {

      this.cidades = resposta.content;
      this.totalElementos = resposta.totalElements;
      this.pagina = resposta.number;

    });
  }

  aplicaFiltro(event: Event): void {

    const filterValue = (event.target as HTMLInputElement).value;

  }

  submit(): void {

    const c: Cidade  = new Cidade();
    c.codigoIbge = this.formCidade.value.formCidade_codIbge;
    c.nome = this.formCidade.value.formCidade_nome;
    c.regiao = this.formCidade.value.formCidade_regiao;
    c.uf = this.formCidade.value.formCidade_uf;

    c.operadori = 0;
    c.operadora = 0;

    this.service.salvar( c )
      .subscribe( resposta => {
        this.listarCidades( this.pagina, this.tamanho );
        this.snackBar.open( 'A Cidade foi incluida !', 'Sucesso!', {
          duration: 2000
        });
        this.formCidade.reset();
      });

  }

  uploadFoto( event , cidade ): void {
    const files = event.target.files;
    if (files){
      const foto = files[0];
      const formData: FormData = new FormData();
      formData.append( 'foto' , foto );
      this.service
            .upload( cidade , formData )
            .subscribe( resposta => this.listarCidades());
    }
  }

  verDetalhes(cidade: Cidade): void {
    this.dialog.open( CidadeDetalheComponent , {
      width: '450px',
      height: '500px',
      data: cidade
    });
  }

  paginar( event: PageEvent): void {
    this.pagina = event.pageIndex;
    this.tamanho = event.pageSize;
    this.listarCidades( this.pagina, this.tamanho );

  }

}
