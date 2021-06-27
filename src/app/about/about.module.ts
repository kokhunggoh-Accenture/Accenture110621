import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MaincontentComponent } from '../maincontent/maincontent.component';


@NgModule({
  declarations: [ AboutComponent, MaincontentComponent ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
