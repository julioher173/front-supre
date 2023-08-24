import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/user/user.component').then(
  //       (m) => m.UserComponent
  //     ),
  // },
  {
    path: '',
    loadChildren: () => import('./home.component').then(
        (m) => m.HomeComponent
      ),
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
