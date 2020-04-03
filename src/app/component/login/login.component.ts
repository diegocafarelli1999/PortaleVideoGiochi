import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, } from '@angular/forms';


//caratteristiche del componente
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
 
  constructor(private router: Router, private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
  username: ['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(15)])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(10)])],
    })
  };

  get usernameControl(): FormControl{
    return this.loginForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl{
    return this.loginForm.get('password') as FormControl;
  }
  
  login() {
    if (this.loginForm.get('username').value != null && 
    this.loginForm.get('username').value !=='' &&
    this.loginForm.get('password').value !== null &&
    this.loginForm.get('password').value !== '') {
       
      sessionStorage.setItem('user', this.loginForm.get('username').value);
      this.router.navigateByUrl("/home");
      
    }
   
  }



}

    

