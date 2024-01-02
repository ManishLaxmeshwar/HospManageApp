import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { userService } from '../user-serice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
user: User = new User;

 

  constructor( private userservice : userService) {}

  ngOnInit(): void {
    
  }
  userLogin() {
    console.log(this.user)
    this.userservice.loginUser(this.user).subscribe(Response=>{
      sessionStorage.setItem("status","active")
        alert("login successfull")
    },()=>alert("Please enter valid credentials"));
    

    }

 
  
}

function data(value: object): void {
  throw new Error('Function not implemented.');
}
