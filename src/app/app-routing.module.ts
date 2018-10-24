import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThesesComponent } from './theses/theses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThesisComponent } from './thesis/thesis.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'theses', component: ThesesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'thesis/:id', component: ThesisComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
