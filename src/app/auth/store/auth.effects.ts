import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.action$
  .pipe(ofType(AuthActions.TRY_SIGNUP))
  .pipe(map((action: AuthActions.TrySignup) => {
    return action.payload;
  })
  , switchMap((authData: {username: string, password: string}) => {
    return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
  })
  ,switchMap(() => {
    return from(firebase.auth().currentUser.getIdToken());
  })
  ,mergeMap((token: string) => {
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
  }));

  @Effect()
  authSignin = this.action$
  .pipe(ofType(AuthActions.TRY_SIGNIN))
  .pipe(map((action: AuthActions.TrySignup) => {
    return action.payload;
  })
  ,switchMap((authData: {username: string, password: string}) => {
    return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
  })
  ,switchMap(() => {
    return from(firebase.auth().currentUser.getIdToken());
  })
  ,mergeMap((token: string) => {
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
  }));

  @Effect({dispatch: false})
  authLogout = this.action$
    .pipe(ofType(AuthActions.LOGOUT))
    .pipe(tap(() => {
      this.router.navigate(['/']);
    }));

  constructor(private action$: Actions, private router: Router) {}
}
