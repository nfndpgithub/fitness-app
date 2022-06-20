import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openChest() {
    this.router.navigateByUrl('/exercises/chest');
  }

  openBack() {
    this.router.navigateByUrl('/exercises/back');
 }

}
