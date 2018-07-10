
import { Component, OnInit, Inject } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  email: string = '';
  username: string = '';
  login_time: string = '';

  constructor(@Inject ("auth") private auth) { }

  ngOnInit() {
    this.profile = this.auth.getProfile();
    this.email = this.profile.email;
    this.username = this.profile.nickname;
    this.login_time = this.profile.updated_at;
  }
  resetPassword() {
    this.auth.resetPassword();
  }

}
