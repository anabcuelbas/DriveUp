import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NovaContaRoutingModule } from './nova-conta-routing.module';
import { NovaContaComponent } from './nova-conta.component';

@NgModule({
	declarations: [NovaContaComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, NovaContaRoutingModule],
})
export class NovaContaModule {}
