import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { LavagemCardModule } from '../components/lavagem-card/lavagem-card.module';
import { AgendamentoPageRoutingModule } from './agendamento-routing.module';
import { AgendamentoPage } from './agendamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgendamentoPageRoutingModule,
    LavagemCardModule,
    HeaderModule,
  ],
  declarations: [AgendamentoPage],
})
export class AgendamentoPageModule {}
