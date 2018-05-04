import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { routing } from 'app/app.routes';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { CallbackComponent } from './components/callback/callback.component';
import { EditorComponent } from './components/editor/editor.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchPipe } from './pipes/search.pipe';

import { DataService } from 'app/services/data.service';
import { AuthService } from 'app/services/auth.service';
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
    CallbackComponent,
    EditorComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    ReactiveFormsModule,
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
