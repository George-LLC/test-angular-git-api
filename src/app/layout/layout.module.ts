import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './main/main.component';
import {SharedModule} from "../shared/shared.module";
import {HomeModule} from "../modules/home/home.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

    HomeModule
  ]
})
export class LayoutModule { }
