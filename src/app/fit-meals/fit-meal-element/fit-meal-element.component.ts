import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FitMeal } from '../fit-meal.model';
import {FitMealsService} from '../fit-meals.service';
import { switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {reload} from "@angular/fire/auth";
import { ModalController } from '@ionic/angular';
import { FitMealModalUpdateComponent } from '../fit-meal-modal-update/fit-meal-modal-update.component';
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
  currentMeal: FitMeal;
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
/*openModal(){
  this.modalCtrl
    .create({
      component: FitMealModalComponent,
      componentProps: { title: 'Edit fit meal' },
    })
    .then((modal) => {
      modal.present();
      this.currentMeal=this.fitmealsService.getFitMeal(this.fitmeal.id);
      console.log(this.currentMeal);
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
}*/
async openModal2() {
  this.currentMeal=this.fitmealsService.getFitMeal(this.fitmeal.id);
  console.log(this.currentMeal.id);
  const modal = await this.modalCtrl.create({
    component: FitMealModalUpdateComponent,
    componentProps: {title: 'Edit fit meal',fitMeal:this.currentMeal},
  });
  await modal.present();
  const {data: fitmealData }=await  modal.onWillDismiss();
  console.log(fitmealData);
}
  openModal3() {
    this.currentMeal=this.fitmealsService.getFitMeal(this.fitmeal.id);
    console.log(this.currentMeal.id);
    this.modalCtrl
      .create({
        component: FitMealModalUpdateComponent,
        componentProps: { title: 'Edit fit meal',fitMeal:this.currentMeal },
      })
      .then((modal) => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then((resultData) => {
        if (resultData.role === 'confirm') {
          console.log(resultData);
          let { title, text, ingredients, protein,imageUrl } =resultData.data.fitmealData;
          this.fitmealsService.updateUsingHttp(this.currentMeal.id,title,text,ingredients,protein, imageUrl).subscribe();



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
               //this.fitmealsService.deleteFitMeal(this.fitmeal.id);
              this.fitmealsService.deleteUsingHttp(this.fitmeal.id).subscribe(((res)=>{

              }));



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
