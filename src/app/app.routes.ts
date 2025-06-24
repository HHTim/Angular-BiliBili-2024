import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClassComponent } from './home/class/class.component';
import { PlanComponent } from './home/plan/plan.component';
import { IntroductionComponent } from './home/class/introduction/introduction.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'class', component: ClassComponent },
  {
    path: 'plan/:id', component: PlanComponent,
    children: [
      {
        path: 'introduction', component: IntroductionComponent
      }
    ]
  },
  {
    path: '**', component: NotFoundComponent
  },
];
