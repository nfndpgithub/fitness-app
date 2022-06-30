import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {map, switchMap, take} from "rxjs/operators";
import {User} from "../auth/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private  userEmail: string;
  private  userCreated: string;
  private userName: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {

  this.userEmail=this.authService.userEmail;
  this.userCreated=this.authService.userCreated;
  this.userName=this.userEmail.substring(0,this.userEmail.indexOf('@')).toUpperCase();


  }

}
