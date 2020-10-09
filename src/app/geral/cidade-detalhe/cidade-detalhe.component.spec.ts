import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeDetalheComponent } from './cidade-detalhe.component';

describe('CidadeDetalheComponent', () => {
  let component: CidadeDetalheComponent;
  let fixture: ComponentFixture<CidadeDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadeDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
