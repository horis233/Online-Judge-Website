import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http,Response, Headers} from '@angular/http';

// Load auth0 lock v10

declare var Auth0Lock: any;

// Auth0 Setting

const options = {
  theme: {
    logo: '../../assets/mylogo.png',
    primaryColor: '#2b2b2b'
  },
  languageDictionary: {
    title: "Log in"
  },
  rememberLastLogin: false,
  popupOptions: { width: 30, height: 40, left: 30, top: 30 },
  redirect: false,
  auth: {
      redirect: false,
      sso:false,
      responseType: 'token',
      params: {
        scope: 'openid'
      },
   },

  additionalSignUpFields: [{
    name: "nickname",
    placeholder: "Enter your nickname"
  }
  ,
  {
    name: "full_name",
    placeholder: "Enter your full name"
  }]
};




@Injectable()
export class AuthV2Service {
  // Configure Auth0
  clientId: string = '8ISBVQwZmgTAz_FaNa_yT19ufKDN7bU4';
  domain: string = 'horis.auth0.com';
  lock = new Auth0Lock(this.clientId, this.domain, options);
  profile:any;

  nickname = new BehaviorSubject<string>("");

  constructor(private router: Router,private http:Http) {


  }

  public login() {

    return new Promise( (resolve,reject)=>{
      this.lock.on("authenticated", authResult => {
        this.lock.getUserInfo(authResult.accessToken, (error, profile)=> {
            if (error) {
              console.log(error);
              return;
            }
            localStorage.setItem('accessToken', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('profile', JSON.stringify(profile));
            this.profile=profile;
            //console.log('here');
            resolve(profile);
            //this.router.navigate(['/ugihuih']);
            setTimeout( ()=>{this.lock.hide()},1300) ;

         });
        });
     this.lock.show();
    });
  }


  public getNickName() {
    return this.nickname.asObservable();
  }

 public sendNickName(nick:string):void {
    this.nickname.next(nick);
  }

  public isAuthenticated() {

    // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return localStorage.getItem('profile') && new Date().getTime() < expiresAt;
    return tokenNotExpired('id_token');
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('profile');
    //localStorage.removeItem('expires_at');
    localStorage.removeItem('id_token')
    this.router.navigate(['/']);
  }

  public getProfile(): Object {
    return JSON.parse(localStorage.getItem('profile'));
  }




  public updateInfo(info:string):Promise<string> {

    const header = new Headers();

    header.append('content-type','application/json');
    header.append('Accept','application/json');
    header.append('Authorization','Bearer ' + localStorage.getItem('id_token'));


    let url = 'https://' + 'horis.auth0.com' + '/api/v2/users/' + this.getProfile()['user_id'];
    //console.log(url);
    return this.http.patch(url,info,{headers: header})
              .toPromise()
              .then( (response:Response)=>
                response['_body']
              );
  }
}
