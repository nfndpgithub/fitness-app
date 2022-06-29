import {Component, Input, OnInit} from '@angular/core';
import {FitMeal} from '../fit-meal.model';
import {FitMealsService} from '../fit-meals.service';


@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {
  @Input() fitMeal: FitMeal[];
  favFitmeals: FitMeal[];

  constructor(private fitmealsService: FitMealsService, ) { }

  ngOnInit() {
    //console.log("sad");
    this.fitmealsService.currentFavMeals.subscribe(fav=>this.favFitmeals=fav);
    console.log(this.favFitmeals);
  }

}
