import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WxAPlanComponent } from './home/wx-a-plan/wx-a-plan.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'wx-a-plan', component: WxAPlanComponent },
  {
    path: '**', component: NotFoundComponent
  },
];
