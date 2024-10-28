import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  { path: 'app-add-movie', component: AddMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }