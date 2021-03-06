import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThesesComponent } from './theses/theses.component';
import { ThesisComponent } from './thesis/thesis.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'theses', component: ThesesComponent},
  { path: 'theses/:page', component: ThesesComponent},
  { path: 'thesis/:id', component: ThesisComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
