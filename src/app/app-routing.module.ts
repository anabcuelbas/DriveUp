import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
	},
	{
		path: 'lavagem',
		loadChildren: () => import('./lavagem/lavagem.module').then((m) => m.LavagemPageModule),
	},
	{
		path: 'agendamento',
		loadChildren: () => import('./agendamento/agendamento.module').then((m) => m.AgendamentoPageModule),
	},
	{
		path: 'sobre',
		loadChildren: () => import('./sobre-nos/sobre-nos.module').then((m) => m.SobreNosModule),
	},
	{
		path: 'perfil',
		loadChildren: () => import('./perfil/perfil.module').then((m) => m.PerfilModule),
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
