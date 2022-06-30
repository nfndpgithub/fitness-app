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
  private  user;
  constructor(private authService: AuthService) { }

  ngOnInit() {

  this.user=this.authService.userEmail;


  }

}
