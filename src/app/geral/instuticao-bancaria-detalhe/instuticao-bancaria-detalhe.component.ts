import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstituicaoBancaria } from '../instituicao-bancaria/instituicao-bancaria';

@Component({
  selector: 'app-instuticao-bancaria-detalhe',
  templateUrl: './instuticao-bancaria-detalhe.component.html',
  styleUrls: ['./instuticao-bancaria-detalhe.component.css']
})
export class InstuticaoBancariaDetalheComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InstuticaoBancariaDetalheComponent>,
    @Inject(MAT_DIALOG_DATA) public instituicaoBancaria: InstituicaoBancaria
  ) { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

}

