import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

(window as any).global = window;

@Injectable()
export class AuthService {


  auth0 = new auth0.WebAuth({
    clientID: '8ISBVQwZmgTAz_FaNa_yT19ufKDN7bU4',
    domain: 'horis.auth0.com',
    responseType: 'token id_token',
    audience: 'https://horis.auth0.com/userinfo',
    // redirectUri: 'http://18.217.220.41:3000/callback',
    redirectUri: 'http://localhost:3000',
    scope: 'openid profile email roles'
  });

  userProfile = new BehaviorSubject<any>(undefined);

  private usernameSubject = new BehaviorSubject<string>('');

  stream: Observable<string>;

  nameSubject: Subject<string>;


  constructor(public router: Router,
              private http: HttpClient) {
              this.userProfile.next(JSON.parse(localStorage.getItem('profile')));
             }

  ngOnInit() {
  }

  public login() {
    this.auth0.authorize();
  }

  public handleAuthentication() {
    this.auth0.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.auth0.client.userInfo(authResult.accessToken, function(err, user) {
          localStorage.setItem('profile', JSON.stringify(user));
        });
        window.location.hash = '';
        this.setSession(authResult);
      } else if (error) {
        this.router.navigate(['/home']);
        console.log(error);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
    return new Date().getTime() < expiresAt;
  }

  public getProfile() {
    this.userProfile.next(JSON.parse(localStorage.getItem('profile')));
    return JSON.parse(localStorage.getItem('profile'));
  }

  public resetPassword() : void {
    let profile = this.getProfile();
    let url : string = 'https://horis.auth0.com/dbconnections/change_password';
    let httpOptions = {
       headers: new HttpHeaders({
       'Content-Type':  'application/json',
      })
    };
    let body = {
      client_id: '8ISBVQwZmgTAz_FaNa_yT19ufKDN7bU4',
      email: profile.email,
      connection: 'Username-Password-Authentication'
    }
    this.http.post(url, body, httpOptions)
    .toPromise()
    .then((res: Response) => {
      console.log(res.json);
    })
    .catch(this.handleError);
  }

  private handleError(error: any) : Promise<any> {
    console.error('Error occurred', error);
    return Promise.reject(error.message || error);
  }

  private changeUserName(term) {
    console.log(term);
    this.usernameSubject.next(term);
  }

  public getUserName(): Observable<string> {
    return this.stream;
  }

}
