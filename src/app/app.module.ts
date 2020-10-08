import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { traduzPaginator } from "./ferramentas/utilitarios/funcoesPadroes";

import { CidadeComponent } from './ferramentas/cidade/cidade.component';
import { CidadeService } from './ferramentas/cidade.service';
import { CidadeDetalheComponent } from './ferramentas/cidade-detalhe/cidade-detalhe.component'

@NgModule({
  declarations: [
    AppComponent,
    CidadeComponent,
    CidadeDetalheComponent
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
