import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FitMeal } from './fit-meal.model';
interface MealsData {
  title: string;
  text: string;
  protein: string;
}
@Injectable({
  providedIn: 'root',
})
export class FitMealsService {
  fitmeals: FitMeal[] = [
    {
      id: 'r1',
      title: 'Spicy Chicken With Couscous',
      text: 'This super-tasty macro-balanced meal is perfect for nailing that meal prep. Bursting with flavour, it’s a simple way to liven up your routine from plain old chicken and rice.',
      protein: '50g',
      imageUrl:
        'https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg',
    },
    {
      id: 'r2',
      title: 'Fajita Pasta Bake',
      text: 'Fajita chicken in a cheesy pasta bake is the crossover we all needed. If you weren’t sure what to have for dinner before reading this… well, you know now.',
      protein: '28g',
      imageUrl:
        'https://blogscdn.thehut.net/app/uploads/sites/478/2020/07/Fajita-Pasta-Bake-BLOG-min_1594109390.jpg',
    },
    {
      id: 'r3',
      title: 'Easy Protein Bowl Meal Prep',
      text: 'This mighty, macro-friendly lunch will keep you on track and feeling full all day. Packed with lean protein and lots of veggies, it’s a strong set up.',
      protein: '	55g',
      imageUrl:
        'https://blogscdn.thehut.net/app/uploads/sites/478/2021/09/0806-STDCRE-19499-CC-MYP-Kitchen-Recipes-Shot-8-1200x672-min_1632817070.jpg',
    },
  ];

  constructor(private http: HttpClient) {}

  addMeal(title: string, text: string = 'piletina', protein: string) {
    return this.http.post<{ name: string }>(
      'https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals.json',
      { title, text, protein }
    );
  }
  getMeal() {
    return this.http.get<{ [key: string]: MealsData }>(
      'https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals.json'
    );
  }
  getFitMeal(id: string) {
    return this.fitmeals.find((fm) => fm.id === id);
  }
}
