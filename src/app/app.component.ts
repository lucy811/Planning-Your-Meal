import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Planning-Your-Meal-Reservation';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBfZmIa23t_amiXsdilDSVcGHWYHj8UgVw'
    });
  }

}
