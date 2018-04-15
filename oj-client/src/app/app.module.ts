import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

import { DataService } from 'app/services/data.service';
import { AuthService } from 'app/services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { routing } from 'app/app.routes';
import {NewProblemComponent} from './components/new-problem/new-problem.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FormsModule} from '@angular/forms';

import { HttpModule } from "@angular/http";
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [
    {
      provide: 'data',
      useClass: DataService
    },{
      provide:'auth',
      useClass: AuthService
    },
    {
      provide: 'authGuard',
      useClass: AuthGuardService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
