import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  address: Address
  hobbies: string[]

  constructor() {
    console.log('constructor ran...');
   }

  ngOnInit() {
    this.name = 'John Doe'
    this.age = 30
    this.address = {
      street: '50 main street',
      city: 'Nairobi',
      state: 'N/A'
    }
    this.hobbies = ['Write code','football','Music']
  }


}

interface Address{
  street:string,
  city:string,
  state:string
}