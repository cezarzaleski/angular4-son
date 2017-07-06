import { Component, OnInit } from '@angular/core';
import {CepService} from "../cep.service";
import {Cep} from "../Cep";

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {

  cep = new Cep();
  isLoading = false;
  constructor(private cepService: CepService) {

  }

  buscar() {
    this.isLoading = true;
    this.cepService.buscar(this.cep.cep)
        .then((cep:Cep) => {
          this.cep = cep;
          this.isLoading = false;
        })
        .catch(() => {
          let cep = this.cep.cep;
          this.cep = new Cep();
          this.cep.cep = cep;
          this.isLoading = false;
          alert('não foi possível localizar o cep;')
        })
  }

  ngOnInit() {
  }

}
