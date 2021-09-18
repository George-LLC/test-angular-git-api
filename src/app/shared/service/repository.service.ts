import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  dataUrl: any;
  constructor(private http: HttpClient,
              private route: ActivatedRoute) {

  }

  getRepository() {
    this.route.queryParams.subscribe(
      data => {
        this.dataUrl = data;
      }
      );
    return this.http.get(`https://api.github.com/repos/angular/components/forks?page=${this.dataUrl.page}&per_page=${this.dataUrl.per_page}`)
  }

}
