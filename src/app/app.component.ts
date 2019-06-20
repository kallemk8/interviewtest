import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testone';
  
  constructor(private service: AppService){}
  ngOnInit(){
    
  }
  
}
