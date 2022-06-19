import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('Milica',Validators.required),
      surname: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required,Validators.minLength(7)]) 
    });
  }

  onRegister(){
    this.authService.register();
    this.router.navigateByUrl('/fit-meals/tabs/explore');
    
  }

}
