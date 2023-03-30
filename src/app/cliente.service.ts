import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Cliente from './Cliente';

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

  getClientes() {
    return this
            .http
            .get<Cliente[]>(`${this.uri}/clientes`);
  }

  editCliente(id: String) {
    return this
            .http
            .get(`${this.uri}/clientes/${id}`);
  }

  updateCliente(id: String, cliente_nome: String, cliente_cpf: String) {
    const obj = {
      cliente_nome: cliente_nome,
      cliente_cpf: cliente_cpf
    };
    return this
            .http
            .post(`${this.uri}/clientes/${id}`, obj)
            .subscribe((res => console.log("Cliente Atualizado")));
  }

  deleteCliente(id: String) {
    return this
            .http
            .delete(`${this.uri}/clientes/${id}`);
  }

}
