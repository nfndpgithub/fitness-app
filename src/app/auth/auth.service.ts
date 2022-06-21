import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //promenio da ne bi morao svaki put da se logujem kao debil
  private _isUserAuthenticated = true;

  constructor() {}

  get isUserAuthenticated(): boolean {
    return this._isUserAuthenticated;
  }

  logIn() {
    this._isUserAuthenticated = true;
  }

  logOut() {
    this._isUserAuthenticated = false;
  }

  register() {
    this._isUserAuthenticated = true;
  }
}
