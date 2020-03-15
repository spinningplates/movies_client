import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatTableDataSource } from '@angular/material/table';
import { MovieElement } from '../interfaces/MovieElement';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Director', 'Genre', 'Year', 'Actions']
  dataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private service:MovieService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.dataSource = new MatTableDataSource<MovieElement>(data as MovieElement[]);  
      this.dataSource.paginator = this.paginator;  
    });
  }

  applyFilter(filterValue: string)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  directors(element)
  {
    var directors;
    directors = element.director.split(',');
    return directors;
  }

  genres(element)
  {
    var genres;
    genres = element.genre.split(',');
    return genres;
  }

}
