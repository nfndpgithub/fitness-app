import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  isLoading = false;

  constructor(private authService: AuthService,private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  onLogIn(logInForm: NgForm) { 
    this.isLoading=true;

    if(logInForm.valid){
    this.authService.logIn(logInForm.value).subscribe(resData => {
      this.isLoading=false;
      this.router.navigateByUrl('/fit-meals/tabs/explore');
    },
     errRes => {
       this.isLoading= false;
       let message = 'Incorrect email or password';

       const errMessage = errRes.error.error.message;
       if(errMessage ==='EMAIL_NOT_FOUND') {
        message = 'Email address could not be found';
       } else if (errMessage === 'INVALID_PASSWORD') {
         message = 'This password is incorrect';
       }

       this.alertCtrl.create({
        header: 'Authentication failed',
        message,
        buttons: ['Okay']
       }).then((alert) =>{
        alert.present();
       });
       logInForm.reset();
     });
  }
 }
}
