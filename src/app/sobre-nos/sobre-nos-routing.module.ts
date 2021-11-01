import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosComponent } from './sobre-nos.component';

const routes: Routes = [
  {
    path: '',
    component: SobreNosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreNosRoutingModule {}
