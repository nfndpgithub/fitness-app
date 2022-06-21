import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FitMeal } from '../fit-meal.model';

@Component({
  selector: 'app-fit-meal-element',
  templateUrl: './fit-meal-element.component.html',
  styleUrls: ['./fit-meal-element.component.scss'],
})
export class FitMealElementComponent implements OnInit {
  @Input() fitmeal: FitMeal = {
    id: 'r4',
    title: 'Novi',
    text: 'Novi',
    ingredients: ['new'],
    protein: 'new',
    imageUrl:
      'https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg',
  };

  constructor(private alertCtrl: AlertController) {}

  ngOnInit() {}

  openAlert() {
    this.alertCtrl.create({
      header: 'FAVORITE FIT MEALS',
      message: 'Move to favorites?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('moved');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
            
          }
        }
      ]
    }).then((alert) =>{
      alert.present();
    });
  }
}
