import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {FitMeal} from "../fit-meal.model";

@Component({
  selector: 'app-fit-meal-modal',
  templateUrl: './fit-meal-modal.component.html',
  styleUrls: ['./fit-meal-modal.component.scss'],
})
export class FitMealModalComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
  @Input() title: string;
  @Input() fitMeal: FitMeal;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    console.log(this.fitMeal);
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onAddRecipe() {
    if (!this.form.valid) {
      return;
    }

    this.modalCtrl.dismiss(
      {
        fitmealData: {
          title: this.form.value['title'],
          text: this.form.value['recipe'],
          protein: this.form.value['protein'],
          ingredients: this.form.value['ingredients'],
        },
      },
      'confirm'
    );
  }
}
