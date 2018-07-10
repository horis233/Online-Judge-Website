import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import 'rxjs/add/operator/debounceTime';

//import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: String = "Lets Code Togather!";
  sessionId = "";
  profile: any;
  username = "" ;
  searchBox: FormControl = new FormControl();
  subscription: Subscription;




  constructor(@Inject ("auth") private auth,
              @Inject('input') private  input,
              @Inject('authGuard') private authGuard,
              private router: Router ) {
                this.auth.userProfile.subscribe(
                  profile => this.profile = profile
                );
               }

  ngOnInit() {
    if(this.auth.isAuthenticated()){
      this.username = this.auth.getProfile().nickname;
    }
    this.subscription = this.searchBox
                            .valueChanges
                            .debounceTime(200)
                            .subscribe(
                                term => { this.input.changeInput(term);}
                            );
  }

  login() {
    this.auth.login();

  }

  logout() {
    this.auth.logout();
  }
}
