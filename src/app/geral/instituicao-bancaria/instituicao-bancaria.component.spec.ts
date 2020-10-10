import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoBancariaComponent } from './instituicao-bancaria.component';

describe('InstituicaoBancariaComponent', () => {
  let component: InstituicaoBancariaComponent;
  let fixture: ComponentFixture<InstituicaoBancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituicaoBancariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
