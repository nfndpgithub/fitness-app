import {Component, Directive, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {FitMeal} from '../fit-meal.model';
import {ModalController} from '@ionic/angular';


@Component({
  selector: 'app-fit-meal-modal-update',
  templateUrl: './fit-meal-modal-update.component.html',
  styleUrls: ['./fit-meal-modal-update.component.scss'],
})
export class FitMealModalUpdateComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
   //private form: NgForm;
  //@Directive({selector:'[ngForm]'})form;
  @Input() title: string;
  @Input() fitMeal: FitMeal;


  // @ts-ignore
  constructor(private modalCtrl: ModalController,) {}

  ngOnInit() {
    console.log(this.fitMeal.id);
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }
  onEditRecipe() {
    if (!this.form.valid) {
      return;
    }

    this.modalCtrl.dismiss(
      {
        fitmealData: {
          title: this.form.value.title,
          text: this.form.value.recipe,
          protein: this.form.value.protein,
          ingredients: this.form.value.ingredients,
        },

      },
      'confirm'
    );
  }

}
