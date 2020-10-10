import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cidade } from '../cidade/cidade';

@Component({
  selector: 'app-cidade-detalhe',
  templateUrl: './cidade-detalhe.component.html',
  styleUrls: ['./cidade-detalhe.component.css']
})
export class CidadeDetalheComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CidadeDetalheComponent>,
    @Inject(MAT_DIALOG_DATA) public cidade: Cidade
  ) { }

  ngOnInit(): void {
  }

  fechar(): void {
    this.dialogRef.close();
  }

}
