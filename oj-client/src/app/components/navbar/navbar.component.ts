import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
//import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: String = "COJ";
  profile: any;
  username = "User";
  searchBox: FormControl = new FormControl();
  subscription: Subscription;

  constructor(@Inject ("auth") private auth,
              @Inject('input') private  input,
              private router: Router ) { }

  ngOnInit() {
    if(this.auth.isAuthenticated()){
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
        this.username = this.profile.nickname;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
          this.username = this.profile.nickname;
        });
      }
    }
    this.subscription = this.searchBox
                            .valueChanges
                            .debounceTime(200)
                            .subscribe(
                                term => { this.input.changeInput(term);}
                            );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  searchProblem(): void {
    this.router.navigate(['/problems']);
    // searchBox
  }
  
  login() {
    this.auth.login();

  }

  logout() {
    this.auth.logout();
  }

}
