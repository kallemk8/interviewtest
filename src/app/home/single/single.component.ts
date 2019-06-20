import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service:AppService, private router: Router) { }
  editid:string
  data:{
    
    Actors: ""
    Awards: ""
    BoxOffice: ""
    Country: ""
    DVD: ""
    Director: ""
    Genre: ""
    Language: ""
    Metascore: ""
    Plot: ""
    Poster: ""
    Production: ""
    Rated: ""
    Ratings: []
    Released: ""
    Response: ""
    Runtime: ""
    Title: ""
    Type: ""
    Website: ""
    Writer: ""
    Year: ""
    imdbID: ""
    imdbRating: ""
    imdbVotes: ""
  }
  ngOnInit() {
    this.editid = this.route.snapshot.params['id'];

    this.service.getsinglemovie(this.editid).subscribe(
      (response: Response) => {
          var result = response.json();
          console.log(result);
          this.data = result;
      }, (error) => { console.log(error); }
    );
  }

}
