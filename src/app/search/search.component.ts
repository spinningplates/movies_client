import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';
import { MoviePreviewElement } from '../interfaces/MoviePreviewElement';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  displayedColumns: string[] = ['Title', 'Year', 'Actions']
  searchResult = new MatTableDataSource<MoviePreviewElement>([] as MoviePreviewElement[]);
  constructor(private service:MovieService, private router:Router) { }

  searchForm = new FormGroup({
    titleSearch: new FormControl('')
  })

  onSubmit()
  {
    this.service.searchByTitle(this.searchForm.value).subscribe((data) => {
      this.searchResult = new MatTableDataSource<MoviePreviewElement>(data["Search"] as MoviePreviewElement[]);
    });
  }

  addMovie(movie)
  {
    this.service.addMovie(movie).subscribe((data) => {
      this.router.navigate(['/movies']);
    });
  }

}
