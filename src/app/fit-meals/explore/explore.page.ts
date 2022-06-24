import {Component, OnDestroy, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FitMealModalComponent } from '../fit-meal-modal/fit-meal-modal.component';
import { FitMealModalUpdateComponent } from '../fit-meal-modal-update/fit-meal-modal-update.component';
import { FitMeal } from '../fit-meal.model';
import { FitMealsService } from '../fit-meals.service';
import {Observable, Subscription, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {reload} from "@angular/fire/auth";
interface MealsData {
  id: string;
  title: string;
  text: string;
  protein: string;
  indgredients: string;
}

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit, OnDestroy{
  fitmeals: FitMeal[];
  private fitMealSub: Subscription;

  constructor(
    private fitmealsService: FitMealsService,
    private modalCtrl: ModalController
  ) {
    //this.fitmeals = this.fitmealsService.fitmeals;
  }

  ngOnInit() {
    this.fitmealsService.fitMeal.subscribe((meals) => {
      this.fitmeals = meals;
    });
  }
  ionViewWillEnter(){
    this.fitmealsService.getMeal().subscribe((meals) => {
     // this.fitmeals = meals;
    });

  }


  openModal() {
    this.modalCtrl
      .create({
        component: FitMealModalComponent,
        componentProps: { title: 'Add fit meal' },
      })
      .then((modal) => {
        modal.present();
        return modal.onDidDismiss();
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
  ngOnDestroy(){
    if(this.fitMealSub){
      this.fitMealSub.unsubscribe();
    }
  }

}
