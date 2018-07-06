import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  nickname:string;
  email:string;
  picUrl:string;
  created:string;
  lastlogin:string;

  role:string;
  name:string;
  verified:boolean;


  newNick:string;

  constructor(@Inject('authV2') private auth) { }

  ngOnInit() {
  	if (this.auth.authenticated()) {
  		this.readProfile();
  	}
  }

  readProfile():void {

    this.profile = this.auth.getProfile();
    console.log(this.profile);
    this.nickname = this.profile.user_metadata.nickname;
    this.newNick=this.nickname;
    this.email = this.profile.email;
    this.picUrl = this.profile.picture;
    this.created = this.profile.created_at.substring(0, 10);
    this.lastlogin= this.profile.updated_at.substring(0, 10);
    this.role = 'Free User';

    if (this.profile.roles.length!=0) {
      this.role = this.profile.roles[0];
    }

    this.name = this.profile.user_metadata.full_name;

    this.verified=(this.profile.email_verified);

  }

  updateInfo():void {
    let data:any = JSON.stringify({ user_metadata: {nickname: this.newNick, full_name:this.name} })
    this.auth.updateInfo(data)
      .then( (p:string) =>{
        let tmp:object = JSON.parse(p);
        this.profile.user_metadata.nickname = tmp['user_metadata'].nickname;
        localStorage.setItem('profile',JSON.stringify(this.profile) );
        this.auth.sendNickName(tmp['user_metadata'].nickname);
        this.readProfile();
      });
  }
}
