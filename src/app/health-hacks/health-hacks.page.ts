import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FitMealsService} from '../fit-meals/fit-meals.service';
import {Health} from './health.model';
//import {HealthHacks} from '../healthHacks';


@Component({
  selector: 'app-health-hacks',
  templateUrl: './health-hacks.page.html',
  styleUrls: ['./health-hacks.page.scss'],
})
export class HealthHacksPage implements OnInit {
  healthHacks: Health [];

  constructor(private router: Router ,private fitmealsService: FitMealsService) { }

  ngOnInit() {
    this.fitmealsService.getHacks().subscribe((hacksData)=>{
      const hacks: Health[]=[];
      for (const key in hacksData) {
        if (hacksData.hasOwnProperty(key)) {
          hacks.push({
            id: key,
            name: hacksData[key].name,
            image: hacksData[key].image,

          });
        }
      }
      this.healthHacks=hacks;
    });


  }

  goToItem(name: string){

    this.router.navigateByUrl(this.router.createUrlTree(['/health-hacks', name.substring(0,name.indexOf(' '))]));

  }

}
