import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteGetComponent } from './cliente-get/cliente-get.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClienteAddComponent,
    ClienteGetComponent,
    ClienteEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
