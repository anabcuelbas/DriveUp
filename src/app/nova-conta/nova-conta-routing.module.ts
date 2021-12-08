import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaContaComponent } from '../nova-conta/nova-conta.component';

const routes: Routes = [
	{
		path: '',
		component: NovaContaComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NovaContaRoutingModule {}
