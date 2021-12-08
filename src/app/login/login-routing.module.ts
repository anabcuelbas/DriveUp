import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaContaComponent } from '../nova-conta/nova-conta.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent,
	},
	{
		path: 'create-account',
		component: NovaContaComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LoginRoutingModule {}
