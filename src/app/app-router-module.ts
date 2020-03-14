import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//components
import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';
import {SearchComponent} from './search/search.component';
import {CategoryComponent} from './category/category.component';

//route
const routes:Routes = [
    {path: '', component:MoviesComponent},
    {path: 'movies', component:MoviesComponent},
    {path: 'movie/:id', component:MovieComponent},
    {path: 'add', component:SearchComponent},
    {path: 'category/:category/:categoryvalue', component:CategoryComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}