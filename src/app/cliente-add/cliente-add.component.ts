import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ClienteService } from "../cliente.service";

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit{
  
  angForm!: FormGroup;
  constructor(private fb: FormBuilder, private cs: ClienteService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      cliente_nome: ['', Validators.required],
      cliente_cpf: ['', Validators.required],      
    });
  }

  addCliente(cliente_nome: String, cliente_cpf: String) {
    this.cs.addCliente(cliente_nome, cliente_cpf);
  }

  ngOnInit() {

  }
}
