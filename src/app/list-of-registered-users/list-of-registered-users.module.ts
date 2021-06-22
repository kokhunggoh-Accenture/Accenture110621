import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserDataDisplayComponent } from '../user-data-display/user-data-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../_shared/shared/shared.module';



@NgModule({
  declarations: [ListOfRegisteredUsersComponent, SignUpComponent, UserDataDisplayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ListOfRegisteredUsersModule { }
