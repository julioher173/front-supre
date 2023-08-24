import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { UsuariosDesactivosComponent } from './modules/usuarios-desactivos/usuarios-desactivos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
    // children: [
    //   { path: 'user', loadChildren: () => 
    //   import('./modules/usuarios-desactivos/usuarios-desactivos.component').then(m => m.UsuariosDesactivosComponent) },
     
    // ]
  
  },{
    path: 'user',
    component: UsuariosDesactivosComponent,
    
  }
  // { path: '**', redirectTo: 'home/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
