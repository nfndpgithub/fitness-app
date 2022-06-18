import { Injectable } from '@angular/core';
import { FitMeal } from './fit-meal.model';

@Injectable({
  providedIn: 'root'
})
export class FitMealsService {

  fitmeals: FitMeal[] = [
    {id: 'r1', title: 'Spicy Chicken With Couscous', text: 'This super-tasty macro-balanced meal is perfect for nailing that meal prep. Bursting with flavour, it’s a simple way to liven up your routine from plain old chicken and rice.',protein:'50g',imageUrl: 'https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg'},
    {id: 'r2', title: 'Spicy Chicken With Couscous', text: 'This super-tasty macro-balanced meal is perfect for nailing that meal prep. Bursting with flavour, it’s a simple way to liven up your routine from plain old chicken and rice.',protein:'50g',imageUrl: 'https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg'}
  ];

  constructor() { }

  getFitMeal(id: string) {
    return this.fitmeals.find((fm) =>fm.id===id);
  }
}
