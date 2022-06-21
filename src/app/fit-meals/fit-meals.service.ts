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
      ingredients: ['1 tbsp. curry paste',
      '1 tbsp. mango chutney',
      '½ tsp. turmeric',
      'Salt to taste',
      '50ml olive oil',
      '4 chicken breast',
      '300g couscous',
      '350ml vegetable stock'],
      protein: '50g',
      imageUrl:
        'https://blogscdn.thehut.net/app/uploads/sites/478/2019/12/Spicy-Chicken-ARTICLE_1577793747.jpg',
    },
    {
      id: 'r2',
      title: 'Fajita Pasta Bake',
      text: 'Fajita chicken in a cheesy pasta bake is the crossover we all needed. If you weren’t sure what to have for dinner before reading this… well, you know now.',
      ingredients:['1 tbsp. coconut oil',
      '350g chicken thigh (cubed)',
      '1 onion (finely sliced)',
      '2 bell peppers (finely sliced)',
      '½ pack fajita seasoning',
      '350g rigatoni',
      '100g salsa dip',
      '100g light cream cheese',
      'A small bunch of coriander (stems removed, finely chopped)',
      '50g light cheddar',
      '30g light mozzarella'],
      protein: '28g',
      imageUrl:
        'https://blogscdn.thehut.net/app/uploads/sites/478/2020/07/Fajita-Pasta-Bake-BLOG-min_1594109390.jpg',
    },
    {
      id: 'r3',
      title: 'Easy Protein Bowl Meal Prep',
      text: 'This mighty, macro-friendly lunch will keep you on track and feeling full all day. Packed with lean protein and lots of veggies, it’s a strong set up.',
      ingredients:['2 tbsp. soy sauce',
      '1 tbsp. honey',
       '1 tsp. black pepper',
       '1 tbsp. garlic (minced)',
       '1 chicken breast',
       '75g quinoa',
       '200ml water',
       '1 egg',
       '50g broccoli',
       '50g mangetout',
       '½ red pepper (sliced)',
       '4 cherry tomatoes (halved)',
       'Spring onions (chopped)'],
      protein: '55g',
      imageUrl:
        'https://blogscdn.thehut.net/app/uploads/sites/478/2021/09/0806-STDCRE-19499-CC-MYP-Kitchen-Recipes-Shot-8-1200x672-min_1632817070.jpg',
    },
  ];

  constructor(private http: HttpClient) {}

  addMeal(title: string, text: string = 'piletina',ingredients:string[], protein: string) {
    return this.http.post<{ name: string }>(
      'https://fitness-app-c9885-default-rtdb.europe-west1.firebasedatabase.app/fitmeals.json',
      { title, text,ingredients, protein }
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
