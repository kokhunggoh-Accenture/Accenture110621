import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplyRoutingModule } from './supply-routing.module';
import { SupplyComponent } from './supply.component';
import { SupplyHeadComponent } from './supply-head/supply-head.component';
import { SupplyBodyComponent } from './supply-body/supply-body.component';


@NgModule({
  declarations: [ SupplyComponent, SupplyHeadComponent, SupplyBodyComponent ],
  imports: [
    CommonModule,
    SupplyRoutingModule
  ]
})
export class SupplyModule { }
