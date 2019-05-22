import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DishService } from '../dishes/dish.service';
import { AuthService } from '../auth/auth.service';
import { ContactUsService } from '../contact-us/contact-us.service';
import { Dish } from '../dishes/dish.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private dishService: DishService, private authService: AuthService, private cService: ContactUsService) {}

  storeDishes() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://meal-plan-application.firebaseio.com/dishes.json?auth=' + token, this.dishService.getDishes());
  }

  getDishes() {
    const token = this.authService.getToken();
    this.httpClient.get<Dish[]>('https://meal-plan-application.firebaseio.com/dishes.json?auth=' + token).map(
      (dishes) => {
        for (const dish of dishes) {
          if (!dish.ingredients) {
            dish.ingredients = [];
          }
        }
        return dishes;
      }
    ).subscribe(
      (dishes: Dish[]) => {
        this.dishService.setDishes(dishes);
      }
    );
  }

  storeContactInfo() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://meal-plan-application.firebaseio.com/messages.json?auth=' + token, JSON.stringify(this.cService.getContactInfo()));
  }

  fetchContactInfo() {
    const token = this.authService.getToken();
    this.authService.getToken();
    this.httpClient.get<string>('https://meal-plan-application.firebaseio.com/messages.json?auth=' + token, {
      observe: 'body',
      responseType: 'json',
    }).subscribe(
      (contact: string) => {
        this.cService.addContactInfo(contact);
      }
    );
  }
}


