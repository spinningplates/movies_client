import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { MatTableDataSource } from '@angular/material/table';
import { MovieElement } from '../interfaces/MovieElement';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Director', 'Genre', 'Year', 'Actions']
  public category;
  public categoryValue;
  dataSource;

  constructor(private route:ActivatedRoute, private service:MovieService, private router:Router) { 
    this.category = this.route.snapshot.paramMap.get('category');
    this.categoryValue = this.route.snapshot.paramMap.get('categoryvalue');
  }

  ngOnInit(): void {
    var categorySearch  = 
    {
        "CategoryName": this.category,
        "CategoryValue": this.categoryValue
    };

    this.service.valueSearch(categorySearch).subscribe((data:any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<MovieElement>(data as MovieElement[]);  
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

}
