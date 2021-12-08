import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NovaContaModule } from '../nova-conta/nova-conta.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, LoginRoutingModule, NovaContaModule],
})
export class LoginModule {}
