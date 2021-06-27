import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaincontentRoutingModule } from './maincontent-routing.module';
import { MaincontentComponent } from './maincontent.component';


@NgModule({
  declarations: [ MaincontentComponent ],
  imports: [
    CommonModule,
    MaincontentRoutingModule
  ]
})
export class MaincontentModule { }
