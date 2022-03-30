import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup
  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,
    private router:Router) {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(){

    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(resp=>{
        if(resp){
          this.router.navigate(['dashboard'])
        }
      })
    }else{
      alert('Please Enter All Required Fields')
    }

  }
}
