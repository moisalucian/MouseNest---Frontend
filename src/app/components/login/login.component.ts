import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup ;
  message:string="";
  

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }


  login() {
    if(this.loginForm.valid) {
      
    this.userService.login(this.loginForm.value).subscribe(
      data => {
        console.log("User successfully logged in!", data);
        if (data.status === true) {
          this.router.navigate(['/home'],{queryParams:{loggedIn: true}});
        } else {
          this.message="Invalid e-mail or password!"
        }
        
      },
      err => {
        this.message="Invalid e-mail or password!"
      }
      )
  } else {
    this.message="Something went wrong!"
  }
}

  }

