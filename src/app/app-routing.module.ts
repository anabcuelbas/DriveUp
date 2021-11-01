import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'lavagem',
    loadChildren: () =>
      import('./lavagem/lavagem.module').then((m) => m.LavagemPageModule),
  },
  {
    path: 'agendamento',
    loadChildren: () =>
      import('./agendamento/agendamento.module').then(
        (m) => m.AgendamentoPageModule
      ),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./sobre-nos/sobre-nos.module').then((m) => m.SobreNosModule),
  },
  {
    path: 'funcionamento',
    loadChildren: () =>
      import('./funcionamento/funcionamento.module').then(
        (m) => m.FuncionamentoModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
