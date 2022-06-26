import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  onLogIn(logInForm: NgForm) { 
    this.isLoading=true;

    if(logInForm.valid){
    this.authService.logIn(logInForm.value).subscribe(resData => {
      console.log('prijava uspesna');
      console.log(resData);
      this.isLoading=false;
      this.router.navigateByUrl('/fit-meals/tabs/explore');
    });
  }
 }

}
