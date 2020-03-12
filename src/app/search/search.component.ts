import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';
import { MovieElement } from '../interfaces/MovieElement';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  displayedColumns: string[] = ['Title', 'Year']
  searchResult = new MatTableDataSource<MovieElement>([] as MovieElement[]);
  constructor(private service:MovieService) { }

  searchForm = new FormGroup({
    titleSearch: new FormControl('')
  })

  onSubmit()
  {
    this.service.searchByTitle(this.searchForm.value).subscribe((data) => {
      this.searchResult = new MatTableDataSource<MovieElement>(data["Search"] as MovieElement[]);
    });
  }

}
