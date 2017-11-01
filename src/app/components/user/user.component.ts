import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
 
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

  constructor(private dataService: DataService) {
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
  onClick(){
    this.name = "Wayne Rooney"
  }  
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby)
    return false;
  }
  deleteHobby(hobby){
    for( let i = 0; i <this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);

      }

    }
  }
}

interface Address{
  street:string,
  city:string,
  state:string
}