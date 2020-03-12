import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatTableDataSource } from '@angular/material/table';
import { MovieElement } from '../interfaces/MovieElement';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Director', 'Genre', 'Year']
  dataSource;
  constructor(private service:MovieService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource<MovieElement>(data as MovieElement[]);    
    });
  }

}
