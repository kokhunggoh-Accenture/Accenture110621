import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackDetailComponent } from '../feedback-detail/feedback-detail.component';
import { ContactComponent } from './contact.component';


const routes: Routes = [
  { path: "", component: ContactComponent},
  { path: "detail", component: FeedbackDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
