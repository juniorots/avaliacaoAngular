import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  uri = 'http://localhost:8081/api';
  constructor(private http: HttpClient) { }

  addCliente(cliente_nome: String, cliente_cpf: String) {
    const obj = {
      cliente_nome: cliente_nome,
      cliente_cpf: cliente_cpf
    };
    this.http.post(`${this.uri}/clientes`, obj)
      .subscribe(res => console.log("Solicitacao Enviada"))
  }

}
