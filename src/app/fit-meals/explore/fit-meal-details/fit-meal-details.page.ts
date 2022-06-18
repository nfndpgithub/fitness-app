import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FitMeal } from '../../fit-meal.model';
import { FitMealsService } from '../../fit-meals.service';

@Component({
  selector: 'app-fit-meal-details',
  templateUrl: './fit-meal-details.page.html',
  styleUrls: ['./fit-meal-details.page.scss'],
})
export class FitMealDetailsPage implements OnInit {

 fitmeal: FitMeal = {id: 'r1', title: 'Spicy Chicken With Couscous', text: 'This super-tasty macro-balanced meal is perfect for nailing that meal prep. Bursting with flavour, it’s a simple way to liven up your routine from plain old chicken and rice.',protein:'50g',imageUrl: 'https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg'};

  constructor(private route: ActivatedRoute, private fitmealsService: FitMealsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.fitmeal = this.fitmealsService.getFitMeal(paramMap.get('fitmealId'));
    });
  }

}
