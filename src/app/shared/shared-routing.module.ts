import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchResultComponent} from "./page/search-result/search-result.component";

const routes: Routes = [
  {
    path: 'search-result',
    component: SearchResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
