import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  
  clientes: any = {};

  angForm!: FormGroup;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private cs: ClienteService,
    private fb: FormBuilder) {
      this.createForm();      
  }

  createForm() {
    this.angForm = this.fb.group({
      cliente_nome:['', Validators.required],
      cliente_cpf:['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cs
        .editCliente(params['id'])
        .subscribe(res => {
          this.clientes = res;
        })
    })
  }

  updateCliente(cliente_nome: String, cliente_cpf: String) {
    this.route.params.subscribe(params => {
      this.cs.updateCliente(cliente_nome, cliente_cpf, params['id']);
      this.router.navigate(['clientes']);
    })
  }

}
