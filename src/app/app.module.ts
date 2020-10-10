import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { traduzPaginator } from './utilitarios/funcoesPadroes';

import { CidadeComponent } from './geral/cidade/cidade.component';
import { CidadeService } from './geral/services/cidade.service';
import { CidadeDetalheComponent } from './geral/cidade-detalhe/cidade-detalhe.component';
import { AtividadeComponent } from './profissionais/atividade/atividade.component';
import { ProfissionalComponent } from './profissionais/profissional/profissional.component';
import { EmpresaComponent } from './geral/empresa/empresa.component';
import { InstituicaoBancariaComponent } from './geral/instituicao-bancaria/instituicao-bancaria.component';
import { InstuticaoBancariaDetalheComponent } from './geral/instuticao-bancaria-detalhe/instuticao-bancaria-detalhe.component';
import { MenuComponent } from './geral/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CidadeComponent,
    CidadeDetalheComponent,
    AtividadeComponent,
    ProfissionalComponent,
    EmpresaComponent,
    InstituicaoBancariaComponent,
    InstuticaoBancariaDetalheComponent,
    MenuComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    CidadeService,
    { provide: MatPaginatorIntl, useValue: traduzPaginator() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
