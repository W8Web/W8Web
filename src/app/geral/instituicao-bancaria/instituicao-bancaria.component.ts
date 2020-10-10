import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

import { InstituicaoBancariaService } from '../services/instituicao-bancaria.service';
import { InstuticaoBancariaDetalheComponent } from '../instuticao-bancaria-detalhe/instuticao-bancaria-detalhe.component';
import { InstituicaoBancaria } from './instituicao-bancaria';

@Component({
  selector: 'app-instituicao-bancaria',
  templateUrl: './instituicao-bancaria.component.html',
  styleUrls: ['./instituicao-bancaria.component.css']
})
export class InstituicaoBancariaComponent implements OnInit {

  formInstituicaoBancaria: FormGroup;
  instituicoesBancarias: InstituicaoBancaria[] = [];
  colunasTab = ['numero', 'nome', 'nomeReduzido', 'observacao'];

  totalElementos = 0;
  pagina = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(

    private service: InstituicaoBancariaService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {

    this.montarFormulario();

    this.listarInstituicoesBancarias( this.pagina, this.tamanho );

  }

  montarFormulario(): void {
    this.formInstituicaoBancaria = this.fb.group({
      formInstituicaoBancaria_numero:       [ '' , [Validators.required, Validators.maxLength(4)] ],
      formInstituicaoBancaria_nome:         [ '' , [Validators.required, Validators.maxLength(50)] ],
      formInstituicaoBancaria_nomeReduzido: [ '' , [Validators.required, Validators.maxLength(30)] ],
      formInstituicaoBancaria_observacao:   [ '' , [Validators.required] ]
    });
  }


  listarInstituicoesBancarias( pagina = 0, tamanho = 10 ): void {
    this.service.listar( pagina, tamanho ).subscribe( resposta => {

      this.instituicoesBancarias = resposta.content;
      this.totalElementos = resposta.totalElements;
      this.pagina = resposta.number;

    });
  }

  aplicaFiltro(event: Event): void {

    const filterValue = (event.target as HTMLInputElement).value;

  }

  submit(): void {

    const i: InstituicaoBancaria  = new InstituicaoBancaria();
    i.numero = this.formInstituicaoBancaria.value.formInstituicaoBancaria_numero;
    i.nome = this.formInstituicaoBancaria.value.formInstituicaoBancaria_nome;
    i.nomeReduzido = this.formInstituicaoBancaria.value.formInstituicaoBancaria_nomeReduzido;
    i.observacao = this.formInstituicaoBancaria.value.formInstituicaoBancaria_observacao;

    i.operadori = 0;
    i.operadora = 0;

    this.service.salvar( i )
      .subscribe( resposta => {
        this.listarInstituicoesBancarias( this.pagina, this.tamanho );
        this.snackBar.open( 'O Banco foi incluido !', 'Sucesso!', {
          duration: 2000
        });
        this.formInstituicaoBancaria.reset();
      });

  }

  verDetalhes(instituicaoBancaria: InstituicaoBancaria): void {
    this.dialog.open( InstuticaoBancariaDetalheComponent , {
      width: '400px',
      height: '270px',
      data: instituicaoBancaria
    });
  }

  paginar( event: PageEvent): void {
    this.pagina = event.pageIndex;
    this.tamanho = event.pageSize;
    this.listarInstituicoesBancarias( this.pagina, this.tamanho );

  }

}
