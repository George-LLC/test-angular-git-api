import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StargazerLocalService {

  apiUrl: any;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl + '/star';
  }

  getStargazers() {
    return this.http.get(this.apiUrl)
  }

  addStargazers(id: any) {
    return this.http.post(this.apiUrl, {id: id})
  }

  deleteStargazers(id: any) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
