import { Component, OnInit } from '@angular/core';
import Cliente from '../Cliente'
import { ClienteService } from '../cliente.service'

@Component({
  selector: 'app-cliente-get',
  templateUrl: './cliente-get.component.html',
  styleUrls: ['./cliente-get.component.css']
})

export class ClienteGetComponent implements OnInit {
  
  clientes!: Cliente[];

  constructor(private cs: ClienteService) {}

  ngOnInit() {
    this.cs
      .getClientes()
      .subscribe((data: Cliente[]) => {
        this.clientes = data;
      });
  }

  deleteCliente(id: String) {
    this.cs.deleteCliente(id).subscribe(res => {
      console.log("Cliente Excluido");
    })
  }

}
