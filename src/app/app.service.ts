import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getlist(){
    return this.http.get('http://www.omdbapi.com/?apikey=2d2c9886&s=Gay Batman Forever&page=1');
  }
  getlistbysearch(name:string, type:string){
    if(type=="0"){
      return this.http.get('http://www.omdbapi.com/?apikey=2d2c9886&s='+name);
    }else{
      return this.http.get('http://www.omdbapi.com/?apikey=2d2c9886&s='+name+'&type='+type);
    }
    
  }
  getlistbysearchpage(name:string, page:number){
    return this.http.get('http://www.omdbapi.com/?apikey=2d2c9886&s='+name+'&page='+page);
  }
  getsinglemovie(id:string){
    return this.http.get('http://www.omdbapi.com/?apikey=2d2c9886&i='+id);
  }
}
