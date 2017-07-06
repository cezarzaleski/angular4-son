import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Cep} from "./Cep";

@Injectable()
export class CepService {

  constructor(private http: Http) { }

  buscar(cep:string) {
    return this.http.get(`http://viacep.com.br/ws/${cep}/json/`)
        .toPromise()
        .then(response=> this.converterRespostaParaCep(response.json()));
  }

  private converterRespostaParaCep(cepNaResposta):Cep {
    console.log(cepNaResposta);
    let cep = new Cep();
    cep.cep = cepNaResposta.cep;
    cep.logradouro = cepNaResposta.logradouro;
    cep.complemento = cepNaResposta.complemento;
    cep.bairro = cepNaResposta.bairro;
    cep.cidade = cepNaResposta.localidade;
    cep.estado = cepNaResposta.uf;
    return cep;
  }
}
