import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincontentComponent } from '../maincontent/maincontent.component';
import { AboutComponent } from './about.component';


const routes: Routes = [
  { path: "", component: AboutComponent, children: [
    { path : 'maincontent', component: MaincontentComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
