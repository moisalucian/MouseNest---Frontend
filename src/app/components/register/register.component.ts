import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup ;
  message:string="";

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmedPassword: new FormControl('',[Validators.required])
    })
  }

  register() {
    if(this.registerForm.valid) {
      
    this.userService.register(this.registerForm.value).subscribe(
      data => {
        console.log("User registered successfully!");
        this.router.navigate(['/login']);
        {{}}
      },
      err => console.log(err)
      )
  } else {
    this.message="Please fill out all the register form before submitting!"
  }
}

  }


