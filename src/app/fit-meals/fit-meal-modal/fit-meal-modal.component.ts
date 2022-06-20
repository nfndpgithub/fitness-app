import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-fit-meal-modal',
  templateUrl: './fit-meal-modal.component.html',
  styleUrls: ['./fit-meal-modal.component.scss'],
})
export class FitMealModalComponent implements OnInit {

  @ViewChild('f',{static:true}) form:NgForm;
  @Input() title: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }

  onAddRecipe() {
    if(!this.form.valid) {
      return;
    }

    this.modalCtrl.dismiss({
      fitmealData:
       {
        title: this.form.value['title'],
       recipe: this.form.value['recipe']
      }
    },'confirm');
  }



}