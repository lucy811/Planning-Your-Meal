import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { fromPromise } from 'rxjs/internal-compatibility';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.action$
  .pipe(ofType(AuthActions.TRY_SIGNUP))
  .map((action: AuthActions.TrySignup) => {
    return action.payload;
  })
  .switchMap((authData: {username: string, password: string}) => {
    return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
  })
  .switchMap(() => {
    return fromPromise(firebase.auth().currentUser.getIdToken());
  })
  .mergeMap((token: string) => {
    this.router.navigate(['/']);
    return [
      {
        type: AuthActions.SIGNUP
      },
      {
        type: AuthActions.SET_TOEKN,
        payload: token
      }
    ];
  });

  @Effect()
  authSignin = this.action$
  .pipe(ofType(AuthActions.TRY_SIGNIN))
  .map((action: AuthActions.TrySignup) => {
    return action.payload;
  })
  .switchMap((authData: {username: string, password: string}) => {
    return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
  })
  .switchMap(() => {
    return fromPromise(firebase.auth().currentUser.getIdToken());
  })
  .mergeMap((token: string) => {
    this.router.navigate(['/']);
    return [
      {
        type: AuthActions.SIGNIN
      },
      {
        type: AuthActions.SET_TOEKN,
        payload: token
      }
    ];
  });

  @Effect({dispatch: false})
  authLogout = this.action$
    .pipe(ofType(AuthActions.LOGOUT))
    .do(() => {
      this.router.navigate(['/']);
    });

  constructor(private action$: Actions, private router: Router) {}
}
