import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FitMealModalComponent } from '../fit-meal-modal/fit-meal-modal.component';
import { FitMeal } from '../fit-meal.model';
import { FitMealsService } from '../fit-meals.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  fitmeals: FitMeal[];

  constructor(
    private fitmealsService: FitMealsService,
    private modalCtrl: ModalController
  ) {
    this.fitmeals = this.fitmealsService.fitmeals;
  }

  ngOnInit() {}

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
          let { title, text,ingredients, protein } = resultData.data.fitmealData;
          this.fitmealsService
            .addMeal(title, text,ingredients, protein)
            .subscribe((res) => {
              console.log(res);
            });
          console.log('uspesno');
          console.log(resultData);
        }
      });
  }
}
