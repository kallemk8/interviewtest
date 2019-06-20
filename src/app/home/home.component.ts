import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'testone';
  data = [];
  totalnumber = 0;
  numberofpages = 0;
  searchvalue:string;
  pages = [];
  errormessage:string;
  constructor(private service: AppService){}
  ngOnInit(){
    this.service.getlist().subscribe(
      (response: Response) => {
          var result = response.json();
          this.totalnumber = result.totalResults;
          this.numberofpages = result.totalResults/10;
         
          this.data = result.Search;
      }, (error) => { console.log(error); }
    );
  }
  onchangemoviename(name){
    this.errormessage = "";
    this.service.getlistbysearch(name).subscribe(
      (response: Response) => {
          var result = response.json();
          if(result.Response==='True'){
            this.data = result.Search;
            this.totalnumber = result.totalResults;
            this.numberofpages = this.totalnumber/10;
            for(var i = 1; i < this.numberofpages; i++){
                this.pages.push(i);
            }
          }else{
            this.data = [];
            this.pages = [];
            this.errormessage = "No Movie Found";
          }
      }, (error) => { console.log(error); }
    );
  }
  onchangepagenumber(page, name){
    this.errormessage = "";
    this.service.getlistbysearchpage(name, page).subscribe(
      (response: Response) => {
          var result = response.json();
          if(result.Response==='True'){
            this.data = result.Search;
            this.totalnumber = result.totalResults;
            this.numberofpages = this.totalnumber/10;
            for(var i = 1; i < this.numberofpages; i++){
                this.pages.push(i);
            }
          }else{
            this.data = [];
            this.pages = [];
            this.errormessage = "No Movie Found";
          }
      }, (error) => { console.log(error); }
    );
  }

}
