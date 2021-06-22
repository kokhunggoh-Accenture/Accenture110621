import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users.component';


const routes: Routes = [
  { path: "", component: ListOfRegisteredUsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOfRegisteredUsersRoutingModule { }
