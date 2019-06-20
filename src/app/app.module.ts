import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { BlankComponent } from './blank/blank.component';
import { SingleComponent } from './home/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlankComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
