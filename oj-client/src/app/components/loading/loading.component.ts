import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(
    @Inject ("auth") private auth,
    private router: Router
   ) { }

  ngOnInit() {
    this.redirect();
  }
  redirect(): void {
    if ( this.auth.isAuthenticated()) this.router.navigate(['/problems']);
  }

}
