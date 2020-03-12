import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service:MovieService) { }

  searchForm = new FormGroup({
    titleSearch: new FormControl('')
  })

  onSubmit()
  {
    this.service.searchByTitle(this.searchForm.value).subscribe((data) => {
      console.log(data);
    });
  }

}
