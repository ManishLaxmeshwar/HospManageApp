import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user';
import { userService } from '../user-serice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{

  user:User=new User();
  
  constructor(private userservice:userService,private activeRouter:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    
  }
  userSignupData() {
    console.log(this.user);
    this.userservice.signupUser(this.user).subscribe((Data: any) =>{
      alert("Registration Data insertion successfull");
      this.router.navigate(['/login'])
      },(error:any)=>alert("Registration data insertion Unsucessfull"))
    }
}
