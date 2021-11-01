import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionamentoComponent } from './funcionamento.component';

const routes: Routes = [
  {
    path: '',
    component: FuncionamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionamentoRoutingModule {}
