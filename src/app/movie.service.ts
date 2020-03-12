import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl: string = "https://localhost:5001/api/movies";
  omdbUrl: string = "https://localhost:5001/api/omdb"

  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get(this.moviesUrl);
  }

  searchByTitle(searchValue)
  {
    return this.http.post(this.omdbUrl, searchValue);
  }

  addMovie(movie)
  {
    return this.http.post(this.moviesUrl, movie);
  }
}
