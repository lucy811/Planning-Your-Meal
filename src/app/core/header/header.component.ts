import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as AuthActions from '../../auth/store/auth.actions';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as DishActions from '../../dishes/store/dish.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private store: Store<fromApp.AppState>) { }

  authState: Observable<fromAuth.State>;

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeDishes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.store.dispatch(new DishActions.FetchDishes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
