import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toPromise';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: '8ISBVQwZmgTAz_FaNa_yT19ufKDN7bU4',
    domain: 'horis.auth0.com',
    responseType: 'token id_token',
    audience: 'https://horis.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000',
    scope: 'openid profile'
  });

  constructor(public router: Router,private http: Http) {}

  public login(){
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
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
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  public resetPassword(): void {
    this.getProfile((err, profile) => {
      this.userProfile = profile;
    });
    let profile = this.userProfile;
    let url: string = `https://${this.auth0.domain}/dbconnections/change_password`;
    let headers = new Headers({ 'content-type': 'application/json' });
    let body = { client_id: '8ISBVQwZmgTAz_FaNa_yT19ufKDN7bU4',
     email: profile.email,
     connection: 'Username-Password-Authentication'
   }

    this.http.post(url, body, headers)
      .toPromise()
      .then((res: Response) => {
        console.log(res.json());
      })
      .catch(this.handleError);
  }
  private handleError (error : any): Promise<any> {
    console.log("error occurred", error);
    return Promise.reject(error.message || error);
  }


}
