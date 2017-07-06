import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioValidacaoComponent } from './formulario-validacao.component';

describe('FormularioValidacaoComponent', () => {
  let component: FormularioValidacaoComponent;
  let fixture: ComponentFixture<FormularioValidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioValidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
