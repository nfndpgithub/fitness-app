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

 openArms() {
  this.router.navigateByUrl('/exercises/arms');
 }

openShoulders() {
  this.router.navigateByUrl('/exercises/shoulders');
}

openAbs()  {
  this.router.navigateByUrl('/exercises/abs');
}

openLegs() {
  this.router.navigateByUrl('/exercises/legs');  
}

openCalves() {
  this.router.navigateByUrl('/exercises/calves');  
}

}
