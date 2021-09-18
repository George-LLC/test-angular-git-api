import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SearchResultComponent } from './page/search-result/search-result.component';
import { SearchFieldComponent } from './component/search-field/search-field.component';
import {HttpClientModule} from "@angular/common/http";
import { SearchPipe } from './pipe/search.pipe';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./material.module";
import {ConfirmationDialogComponent} from "./component/confirmation-dialog/confirmation-dialog.component";


@NgModule({
  declarations: [
    SearchResultComponent,
    SearchFieldComponent,
    SearchPipe,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    SearchResultComponent,
    SearchFieldComponent,
    ConfirmationDialogComponent,
    MaterialModule,
    SharedRoutingModule,
  ]
})
export class SharedModule { }
