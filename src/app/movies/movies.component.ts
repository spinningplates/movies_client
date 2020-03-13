import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatTableDataSource } from '@angular/material/table';
import { MovieElement } from '../interfaces/MovieElement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Director', 'Genre', 'Year', 'Actions']
  dataSource;
  constructor(private service:MovieService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource<MovieElement>(data as MovieElement[]);    
    });
  }

  edit(id)
  {
    this.router.navigate(['/movie/'+id]);
  }

  removeMovie(element)
  {
    this.service.deleteMovie(element.id).subscribe((data) => {
      window.location.reload();
    });
  }

}
