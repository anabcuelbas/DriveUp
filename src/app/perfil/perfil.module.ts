import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';

@NgModule({
	declarations: [PerfilComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, PerfilRoutingModule, HeaderModule],
})
export class PerfilModule {}
