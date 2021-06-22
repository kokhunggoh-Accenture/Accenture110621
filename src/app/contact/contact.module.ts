import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbacksComponent } from '../feedbacks/feedbacks.component';
import { SharedModule } from '../_shared/shared/shared.module';
import { FeedbackDetailComponent } from '../feedback-detail/feedback-detail.component';


@NgModule({
  declarations: [ContactComponent, FeedbacksComponent, FeedbackDetailComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ContactModule { }
