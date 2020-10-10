import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstuticaoBancariaDetalheComponent } from './instuticao-bancaria-detalhe.component';

describe('instuticaoBancariaDetalheComponent', () => {
  let component: InstuticaoBancariaDetalheComponent;
  let fixture: ComponentFixture<InstuticaoBancariaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstuticaoBancariaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstuticaoBancariaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
