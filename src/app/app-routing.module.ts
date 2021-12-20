import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'login',
		loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
	},
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
		canActivate: [AuthGuardService],
	},
	{
		path: 'lavagem',
		loadChildren: () => import('./lavagem/lavagem.module').then((m) => m.LavagemPageModule),
		canActivate: [AuthGuardService],
	},
	{
		path: 'agendamento',
		loadChildren: () => import('./agendamento/agendamento.module').then((m) => m.AgendamentoPageModule),
		canActivate: [AuthGuardService],
	},
	{
		path: 'sobre',
		loadChildren: () => import('./sobre-nos/sobre-nos.module').then((m) => m.SobreNosModule),
		canActivate: [AuthGuardService],
	},
	{
		path: 'perfil',
		loadChildren: () => import('./perfil/perfil.module').then((m) => m.PerfilModule),
		canActivate: [AuthGuardService],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
