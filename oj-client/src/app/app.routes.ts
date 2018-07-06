import { RouterModule, Routes } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent }from './components/problem-detail/problem-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
  path: 'home',
  component: HomeComponent

  },
  {
    path:'problems',
    component:ProblemListComponent
  },
  {
    path:'problems/:id',
    component:ProblemDetailComponent,
  },
  {
    path:'profile',
    component:ProfileComponent,
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

export const routing = RouterModule.forRoot(routes);
