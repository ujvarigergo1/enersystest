import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resp } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static readonly baseUrl: string = "https://estest.enersys.hu/api/v1/";

  constructor(private http: HttpClient) { }

  testApiKey(api_key:String) {
    return this.http.post<Resp>("https://estest.enersys.hu/api/v1/test", { api_key }, { withCredentials: false });
  }

  
}