import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ApiService } from '../api.service';
import { User } from '../model/api/user';
import { Users } from '../model/api/users';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  api:String ="";
  newUser:User = {
    first_name : "",
    last_name: "",
    zip: "",
    address: "",
    city: "",
    email: "",
    phone: "",
    updated_at:"",
    created_at:""
  };
  dataSource :User[] =[];
  displayedColumns: string[] = [
    "Vezetéknév",
    "Keresztnév",
    "Irányítószám",
    "Város",
    "Cím",
    "Telefonszám",
    "Email",
    "Utoljára frissítve",
    "Létrehozva"];

  constructor(private as: ApiService) { 
  }

  ngOnInit(): void {
    var tmp = localStorage.getItem("api-key")
    if (tmp!= null){
      this.api = tmp
      this.getUsers()
    }
  }
  send(form:NgForm){
    if (form.valid)
      this.as.createUser(this.api,this.newUser!).subscribe(resp => {
        console.log(this.newUser)
        console.log(resp)
        this.getUsers()
        this.saveApiCode()
      }, error => {
        console.error(error);
      })
  }
  test(){
    if (this.api != undefined)
      this.as.testApiKey(this.api).subscribe(resp => {
        alert(resp.message)
        this.getUsers()
        this.saveApiCode()
      }, error => {
        console.error(error);
      })
  }
  getUsers(){
    if (this.api != undefined)
    this.as.getUsers(this.api).subscribe(resp => {
      this.dataSource = resp.data
      this.saveApiCode()
    }, error => {
      console.error(error);
    })
  }
  saveApiCode(){
    localStorage.setItem('api-key', this.api.toString());
  }
  delete(user:User){
    this.as.deleteUser(this.api,user.email).subscribe(resp => {
      console.log(resp)
      this.getUsers()
    }, error => {
      console.error(error);
    })
  }
}
