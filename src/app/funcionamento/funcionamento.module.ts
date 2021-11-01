import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { FuncionamentoRoutingModule } from './funcionamento-routing.module';
import { FuncionamentoComponent } from './funcionamento.component';

@NgModule({
  declarations: [FuncionamentoComponent],
  imports: [FuncionamentoRoutingModule, HeaderModule, IonicModule],
  exports: [FuncionamentoComponent],
})
export class FuncionamentoModule {}
