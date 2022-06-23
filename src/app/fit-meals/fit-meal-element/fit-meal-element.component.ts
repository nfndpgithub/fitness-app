import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FitMeal } from '../fit-meal.model';
import {FitMealsService} from '../fit-meals.service';
import { switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from "@angular/router";
import {reload} from "@angular/fire/auth";
import { ModalController } from '@ionic/angular';
import { FitMealModalComponent } from '../fit-meal-modal/fit-meal-modal.component';

@Component({
  selector: 'app-fit-meal-element',
  templateUrl: './fit-meal-element.component.html',
  styleUrls: ['./fit-meal-element.component.scss'],
})
export class FitMealElementComponent implements OnInit, OnDestroy {
  @Input() fitmeal: FitMeal ;

    /*{
    id: 'r4',
    title: 'Novi',
    text: 'Novi',
    ingredients: 'novi',
    protein: 'new',
    imageUrl:
      'https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg',
  };*/

  constructor(private alertCtrl: AlertController,
              private fitmealsService: FitMealsService,
              private router: Router,
              private route: ActivatedRoute,
              private modalCtrl: ModalController) {}

  ngOnInit() {}
  ionViewWillEnter() {
  }
  ngOnDestroy(){}

  openAlert() {
    this.alertCtrl
      .create({
        header: 'FAVORITE FIT MEALS',
        message: 'Move to favorites?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              console.log('moved');
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel');
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }
  reload(){
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['./'],{relativeTo: this.route
    });
  }
openModal(){
  this.modalCtrl
    .create({
      component: FitMealModalComponent,
      componentProps: { title: 'Edit fit meal' },
    })
    .then((modal) => {
      modal.present();
      return modal.onWillDismiss();
    })
    .then((resultData) => {
      if (resultData.role === 'confirm') {
        console.log(resultData);
        let { title, text, ingredients, protein,imageUrl } =resultData.data.fitmealData;
        this.fitmealsService
          .addMeal(title, text, ingredients, protein, imageUrl)
          .subscribe((res) => {
            //this.fitmeals=res;
          });
        console.log('uspesno');
        console.log(resultData);
      }
    });
}


  openAlert2() {
    this.alertCtrl
      .create({
        header: 'DELETE',
        message: 'Are you sure you want to delete this?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
               this.fitmealsService.deleteFitMeal(this.fitmeal.id);



            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel');
            },
          },
        ],
      })
      .then((alert) => {
        this.reload();
        alert.present();
        this.reload();
      });
  }
}
