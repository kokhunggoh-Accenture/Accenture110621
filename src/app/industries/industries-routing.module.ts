import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login } from '../_guards/login.service';
import { IndustriesComponent } from './industries.component';


const routes: Routes = [
  { path: "", component: IndustriesComponent, canActivate:[Login] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustriesRoutingModule { }
