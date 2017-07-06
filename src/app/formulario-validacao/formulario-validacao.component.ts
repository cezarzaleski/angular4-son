import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-validacao',
  templateUrl: './formulario-validacao.component.html',
  styleUrls: ['./formulario-validacao.component.css']
})
export class FormularioValidacaoComponent implements OnInit {

  nome = '';
  emailModel = '';
  constructor() { }

  ngOnInit() {
  }

}
