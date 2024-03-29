import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  { path : 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)},
  { path : 'location', loadChildren: () => import('./location/location.module').then(m => m.LocationModule)},
  { path : 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  { path : 'supply', loadChildren: () => import('./supply/supply.module').then(m => m.SupplyModule)},
  { path : 'signup', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)},
  { path : 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  { path : '', redirectTo: "about/maincontent", pathMatch: 'full'},
  { path : '**', redirectTo: "about/maincontent", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
