import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, observable, Observable, pipe} from 'rxjs';
import { FitMeal } from './fit-meal.model';
import {catchError, map, switchMap, take, tap} from 'rxjs/operators';

import { Database, set, ref, update, onValue,remove } from '@angular/fire/database';
import {Health} from "../health-hacks/health.model";
import { AuthService } from '../auth/auth.service';

//import { MealsData } from './fitMeals.ts';

interface FitMealData{
  title: string;
  text: string;
  ingredients: string;
  protein: string;
  imageUrl: string;
  userId: string;
}

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
        'https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg',
      userId: 'xx'
    }];
  private _fitmeals=new BehaviorSubject<FitMeal[]>([]);
  private  favMeals=new BehaviorSubject<FitMeal[]>([]);
  currentFavMeals=this.favMeals.asObservable();

  constructor(private http: HttpClient, private  db: Database,private authService: AuthService) {}

  get fitMeal(){
    // eslint-disable-next-line no-underscore-dangle
    return this._fitmeals.asObservable();
  }

  addMeal(
    title: string,
    text: string,
    ingredients: string,
    protein: string,
    imageUrl: string ='https://blogscdn.thehut.net/app/uploads/sites/478/2021/09/0806-STDCRE-19499-CC-MYP-Kitchen-Recipes-Shot-8-1200x672-min_1632817070.jpg') {
    let generatedId;
    let newFitMeal: FitMeal;
    let fetchedUserId: string;

    return this.authService.userId.pipe(
      take(1),
      switchMap(userId =>{
      fetchedUserId=userId;
      return this.authService.token;

      }),
      take(1),
      switchMap((token) => {
        newFitMeal= new FitMeal(
          null,
          title,
          text,
          ingredients,
          protein,
          'https://media.istockphoto.com/vectors/the-cook-vector-id165611246?b=1&k=20&m=165611246&s=612x612&w=0&h=9ICKsABUnhB0cQdRxYFQuGBMC1yKvuRU681OgCR2leg=',
          fetchedUserId
          );
          return this.http.post<{ name: string }>(
            `https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals.json?auth=${token}`,newFitMeal);

      }),
      take(1),
      switchMap((resData)=>{
        generatedId=resData.name;
        return this.fitMeal;
      }),
      take(1),
      tap((fitmeals)=>{
        newFitMeal.id = generatedId;
        this._fitmeals.next(fitmeals.concat(newFitMeal));
      })
    );
  }

  getMeal() {
    return this.authService.token.pipe(
      take(1),
      switchMap((token) =>{
        return this.http.get<{ [key: string]: FitMeal }>(
          `https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals.json?auth=${token}`
        )

      }),
      map((fitmealsData)=>{
        const meals: FitMeal[] = [];
        for (const key in fitmealsData) {
          if(fitmealsData.hasOwnProperty(key)){
            meals.push( new FitMeal(key,fitmealsData[key].title,fitmealsData[key].text, fitmealsData[key].ingredients,fitmealsData[key].protein,fitmealsData[key].imageUrl,fitmealsData[key].userId)
            );
          }

        }
        // eslint-disable-next-line no-underscore-dangle
        this._fitmeals.next(meals);
        return meals;
      }),
      tap(meals=>{
        this._fitmeals.next(meals);
      })
    );
  }

  getFitMeal(id: string) {
    this.fitMeal.subscribe((meals) => {
      this.fitmeals = meals;});

    return this.fitmeals.find((fm) => fm.id === id);
  }



  deleteUsingHttp(id: string){
    return this.authService.token.pipe(
      take(1),
      switchMap((token) =>{
    const url= `https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals/`+id+`.json?auth=${token}`;
    // @ts-ignore
    return this.http.delete<{ [key: string]: FitMeal }>(url).pipe(map((fitmealsData)=>{

      //this.fitMeal.subscribe((mealss) => {
        //this.fitmeals = mealss;});
      // eslint-disable-next-line no-underscore-dangle
      // @ts-ignore
      //this.getMeal();
    this.fitmeals=this.getMeal().subscribe();


      //return this.fitmeals;

    }),tap(meals=>{
      //console.log(this.fitmeals);
    }));
      }));



  }
  updateUsingHttp(
    id: string,
    title: string,
    text: string,
    ingredients: string,
    protein: string,
    imageUrl:
      string ='https://blogscdn.thehut.net/app/uploads/sites/478/2021/09/0806-STDCRE-19499-CC-MYP-Kitchen-Recipes-Shot-8-1200x672-min_1632817070.jpg'
  ) {
    return this.authService.token.pipe(
      take(1),
      switchMap((token) =>{
    const url= `https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals/`+id+`.json?auth=${token}`;
    return this.http.put<{ name: string }>(
      url,
      { title, text, ingredients, protein, imageUrl }
    ).pipe(map((fitmealsData)=>{


      // eslint-disable-next-line no-underscore-dangle
      // @ts-ignore

      this.fitmeals=this.getMeal().subscribe();

    }),tap(meals=>{

    }));
      }));
  }
  getHacks(){
    return this.authService.token.pipe(
      take(1),
      switchMap((token) =>{
        return this.http.get<{ [key: string]: Health }>(
          `https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/health-hacks.json?auth=${token}`
        )

      }));


  }
  addHack(name: string, image: string){
    // @ts-ignore
     return this.http.post('https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/health-hacks.json',{name,image}).subscribe();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  meals: FitMeal[]=[];
  favorite(meal: FitMeal){
    for(const val of this.meals){
      if(val.id===meal.id){
        return;
      }
    }

    this.meals.push(meal);

    this.favMeals.next(this.meals);
  }





}
