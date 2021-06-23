import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'insights', loadChildren: () => import('./insights/insights.module').then(m => m.InsightsModule)
  },
  {
    path:'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path:'careers', loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule)
  },
  {
    path:'industries', loadChildren: () => import('./industries/industries.module').then(m => m.IndustriesModule)
  },
  {
    path:'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path:'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'signup', loadChildren: () => import('./list-of-registered-users/list-of-registered-users.module').then(m => m.ListOfRegisteredUsersModule)
  },
  {
    path:'feedbacks', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:'**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
