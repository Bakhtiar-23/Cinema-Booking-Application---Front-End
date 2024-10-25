import { Injectable } from '@angular/core';
import { MovieCategory } from './movie-category';
import { MOVIE_CATEGORIES } from './mock-movies';
import { Observable, of } from 'rxjs';
import { Movie } from './movie'; // Import the Movie interface

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieCategories: MovieCategory[] = MOVIE_CATEGORIES;

  constructor() { }

  // Get all movie categories
  getMovieCategories(): Observable<MovieCategory[]> {
    return of(this.movieCategories);
  }

  // Add a new movie
  addMovie(categoryId: number, movie: Movie): void {
    const category = this.movieCategories.find(c => c.id === categoryId);
    if (category) {
      category.movies.push(movie); // Ensure that movies in the category are of type Movie
    }
  }
}
