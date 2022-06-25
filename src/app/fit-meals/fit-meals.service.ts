import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, observable, Observable, pipe} from 'rxjs';
import { FitMeal } from './fit-meal.model';
import {catchError, map, switchMap, take, tap} from 'rxjs/operators';

import { Database, set, ref, update, onValue,remove } from '@angular/fire/database';

//import { MealsData } from './fitMeals.ts';

@Injectable({
  providedIn: 'root',
})
export class FitMealsService {

  private fitmeals: FitMeal[] =[
    {
      id: 'r1',
      title: 'api Chicken With Couscous',
      text: 'This super-tasty macrep. Bursting with flavour, it’s a simple way to liven up your routine from plain old chicken and rice.',
      ingredients: '1 tbsp. curry paste',
      protein: '50g',
      imageUrl:
        'https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg'
    }];
  private _fitmeals=new BehaviorSubject<FitMeal[]>([]);

  constructor(private http: HttpClient, private  db: Database) {}
  get fitMeal(){
    // eslint-disable-next-line no-underscore-dangle
    return this._fitmeals.asObservable();
  }

  addMeal(
    title: string,
    text: string,
    ingredients: string,
    protein: string,
    imageUrl:
      string ='https://blogscdn.thehut.net/app/uploads/sites/478/2021/09/0806-STDCRE-19499-CC-MYP-Kitchen-Recipes-Shot-8-1200x672-min_1632817070.jpg'
  ) {
    let generatedId;
    return this.http.post<{ name: string }>(

      'https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals.json',
      { title, text, ingredients, protein, imageUrl }
    ).pipe(switchMap((resData)=>{
      // @ts-ignore
      generatedId=resData.name;
      return this.fitMeal;



    }),take(1),tap((fitmeals)=>{
      // eslint-disable-next-line no-underscore-dangle
      this._fitmeals.next(fitmeals.concat({
        id:generatedId,
        title,
        text,
        ingredients,
        protein,
        imageUrl
      }));
    }));
  }

  getMeal() {
    return this.http.get<{ [key: string]: FitMeal }>(
      'https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals.json'
    ).pipe(map((fitmealsData)=>{
      const meals: FitMeal[] = [];
      for (const key in fitmealsData) {
        if(fitmealsData.hasOwnProperty(key)){
          meals.push({
            id: key,
            title: fitmealsData[key].title,
            text: fitmealsData[key].text,
            protein: fitmealsData[key].protein,
            ingredients: fitmealsData[key].ingredients,
            imageUrl: fitmealsData[key].imageUrl,
          });
        }

      }
      // eslint-disable-next-line no-underscore-dangle
      this._fitmeals.next(meals);
      return meals;

    }),tap(meals=>{
      this._fitmeals.next(meals);
    }));
  }
  //public cast=this._fitmeals.asObservable();


  /*  getMeal(): Observable<MealsData[]> {
    return this.http.get<MealsData[]>(
      'https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals.json'
    );
  } */
  getFitMeal(id: string) {
    this.fitMeal.subscribe((meals) => {
      this.fitmeals = meals;});

    return this.fitmeals.find((fm) => fm.id === id);
  }
  deleteFitMeal(id: string){


    // @ts-ignore
    return remove(ref(this.db, 'fitmeals/' + id), { });

  }
  updateFitMeal(id: string,
                title: string,
                text: string,
                ingredients: string,
                protein: string,
                imageUrl: string ='https://blogscdn.thehut.net/app/uploads/sites/478/2021/09/0806-STDCRE-19499-CC-MYP-Kitchen-Recipes-Shot-8-1200x672-min_1632817070.jpg'
                ){
     update(ref(this.db, 'fitmeals/' + id), {
      title,
      text,
      ingredients,
      protein,
      imageUrl
    });

  }
  deleteUsingHttp(id: string){
    const url= 'https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals/'+id+'.json';
    // @ts-ignore
    return this.http.delete<{ [key: string]: FitMeal }>(url);
  }



}
