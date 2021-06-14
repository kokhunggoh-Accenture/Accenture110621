import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { DetailComponent } from './detail/detail.component'
import { LocationComponent } from './location/location.component'
import { UsersComponent } from './users/users.component'

const routes: Routes = [
  { path : 'contact', component: ContactComponent},
  { path : 'detail', component: DetailComponent},
  { path : 'location', component: LocationComponent},
  { path : 'users', component: UsersComponent},
  { path : 'about', component: AboutComponent, children: [
    { path : 'maincontent', component: MaincontentComponent}
  ]},
  { path : '', redirectTo: "about", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
