import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRouteReuseStrategy } from '@angular/router';
import { Users } from './model/api/users';
import { Resp } from './model/api/testApiKeyResponse';
import { User } from './model/api/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static readonly baseUrl: string = "https://estest.enersys.hu/api/v1";

  constructor(private http: HttpClient) { }

  testApiKey(api_key:String) {
    return this.http.post<Resp>(`${ApiService.baseUrl}/test`, { api_key }, { withCredentials: false });
  }
  getUsers(api_key:String) {
    return this.http.post<Users>(`${ApiService.baseUrl}/users/get-my-users`, { api_key }, { withCredentials: false });
  }
  createUser(api_key:String,user:User){
    return this.http.post<User>(`${ApiService.baseUrl}/user/create`, { api_key,user }, { withCredentials: false });
  }
  deleteUser(api_key:String,email:String){
    return this.http.post<Resp>(`${ApiService.baseUrl}/users/delete`, { api_key,email }, { withCredentials: false });
  }
}