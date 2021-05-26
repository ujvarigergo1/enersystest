import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ApiService } from '../api.service';
import { User } from '../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  api?:String;
  newUser?:User;
  dataSource :User[] =[
  {position: 1, name: 'Hydrogen', id: 1.0079, symbol: 'H'}
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private as: ApiService) { 
  }

  ngOnInit(): void {
    
  }
  send(form:NgForm){
    if (this.api != undefined)
      this.as.testApiKey(this.api!).subscribe(resp => {
        console.log(this.api)
        console.log(resp.success)
      }, error => {
        console.error(error);
      })
  }
}
