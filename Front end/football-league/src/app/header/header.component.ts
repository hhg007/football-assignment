import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showLogin = true
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  signUpForm = this.formBuilder.group({
    Name: '',
    email: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder,private mainService: MainService) { }

  ngOnInit(): void {
    this.checkLogin()
  }

  onLoginSubmit(): void {
    var user = {
      "email":this.loginForm.get('email').value,
      "password":this.loginForm.get('password').value
    }
    this.mainService.getLogin(user).subscribe(data=>{
      this.checkLogin()
      location.reload()
    })
  }

  onSignUpSubmit(): void {
    var user = {
      "Name": this.signUpForm.get('Name').value,
      "email":this.signUpForm.get('email').value,
      "password":this.signUpForm.get('password').value
    }

    this.mainService.registerUser(user).subscribe(data=>{
      location.reload();
    })
  }

  checkLogin()
  {
    const  user = JSON.parse(localStorage.getItem('user'))
    if(user)
    {
      this.showLogin = false
    }
    else{
      this.showLogin = true
    }
  }

  logout()
  {
    localStorage.removeItem('user')
    this.checkLogin()
  }

}
