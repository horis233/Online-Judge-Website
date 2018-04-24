import { Component, OnInit, Inject } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
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

  constructor(@Inject ("auth") private auth ) { }

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
  }

  login() {
    this.auth.login();

  }

  logout() {
    this.auth.logout();
  }

}
