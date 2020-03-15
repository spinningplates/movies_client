import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl: string = "https://localhost:5001/api/movies";

  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get(this.moviesUrl+'/getmovies');
  }

  searchByTitle(searchValue)
  {
    return this.http.post(this.moviesUrl+'/searchbytitle', searchValue);
  }

  addMovie(movie)
  {
    return this.http.post(this.moviesUrl+'/addmovie', movie);
  }

  updateMovie(id, movie)
  {
    console.log(movie);
    return this.http.post(this.moviesUrl+'/updatemovie/'+id, movie);
  }

  getMovie(id)
  {
    return this.http.get(this.moviesUrl+'/getmovie/'+id);
  }

  valueSearch(categorySearch)
  {
    return this.http.post(this.moviesUrl+'/categorysearch', categorySearch);
  }

  deleteMovie(id)
  {
    return this.http.delete(this.moviesUrl+"/deletemovie/"+id);
  }
}
