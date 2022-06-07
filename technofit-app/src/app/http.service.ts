import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequestModel } from './model/login-request.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  authenticate(body: LoginRequestModel): Observable<any> {
    return this.httpClient.post("https://reqres.in/api/login", body)
  }
}
