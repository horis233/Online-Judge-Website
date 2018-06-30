import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

import { routing } from 'app/app.routes';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { EditorComponent } from './components/editor/editor.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FootbarComponent } from './components/footbar/footbar.component';

import { SearchPipe } from './pipes/search.pipe';

import { DataService } from 'app/services/data.service';
import { AuthService } from 'app/services/auth.service';
import { AuthGuardService } from "./services/auth-guard.service";
import { CollaborationService } from './services/collaboration.service';
import { InputService } from './services/input.service';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    ProfileComponent,
    EditorComponent,
    LoadingComponent,
    FootbarComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'data',
      useClass: DataService
    },
    {
      provide:'auth',
      useClass: AuthService
    },
    {
      provide: 'authGuard',
      useClass: AuthGuardService
    },
    {
      provide: 'collaboration',
      useClass: CollaborationService
    },
    {
      provide: "input",
      useClass: InputService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
