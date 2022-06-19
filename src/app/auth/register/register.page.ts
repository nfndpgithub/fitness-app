import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('Milica'),
      surname: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

}
