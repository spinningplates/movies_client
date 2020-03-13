import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieForm:FormGroup;
  id;
  image:string;

  constructor(private route:ActivatedRoute, private service:MovieService, private fb:FormBuilder) 
  {
    this.id = this.route.snapshot.paramMap.get('id');
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      plot: ['', Validators.required],
      genre: ['', Validators.required],
      year: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getMovie(this.id).subscribe((data:any) => {
      this.image = data.poster;
      this.movieForm = this.fb.group({
        title: [data.title, Validators.required],
        director: [data.director, Validators.required],
        plot: [data.plot, Validators.required],
        genre: [data.genre, Validators.required],
        year: [data.year, Validators.required],
        poster: [data.poster]
      });      
    });
  }

  onSubmit(){
    this.movieForm.value.id = this.id;
    this.service.updateMovie(this.id, this.movieForm.value).subscribe((data) => {
      console.log("Data: ", data);
      window.location.reload();
    });
  }

}
