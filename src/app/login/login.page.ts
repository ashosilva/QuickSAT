import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLogin = true;
  segmentModel: string = "login";
  constructor(private loginService: LoginService, private router: Router) {
    
   }

  ngOnInit() {
  }

  onLogin() {
    this.loginService.login();
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
  

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const username = form.value.name;
    const password = form.value.password;
    console.log(email, username, password);
    if (this.isLogin) {

      //API call to sign in user
      console.log("Logged In");
      this.router.navigate(['/subject'])
    } else {
      //API call to register user
      console.log("Registered");
      this.router.navigate(['/subject'])
    }
  }

  

  
  segmentChanged(ev: any) {
    this.onSwitchAuthMode();
    console.log('Segment changed', ev);
  }

}
