import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getAllMatches(){
    return this.http.get(`${environment.apiUrl}/posts/1/`)
  }
  getLivematches(){
    return this.http.get(`${environment.apiUrl}/posts/1/comments`)
  }
  getPointTable()
  {
    return this.http.get(`${environment.apiUrl}/posts/1/comments`)
  }
}
