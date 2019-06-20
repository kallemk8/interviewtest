import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlankComponent } from './blank/blank.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'Searchmovie', component: HomeComponent },
    { path: 'blank', component: BlankComponent },
    { path: '', component:AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
