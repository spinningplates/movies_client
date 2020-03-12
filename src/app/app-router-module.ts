import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//components
import {MoviesComponent} from './movies/movies.component';
import {SearchComponent} from './search/search.component';

//route
const routes:Routes = [
    {path: '', component:MoviesComponent},
    {path: 'movies', component:MoviesComponent},
    {path: 'add', component:SearchComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule{}