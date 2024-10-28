import { Component, OnInit } from '@angular/core';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MOVIE_CATEGORIES } from '../mock-movies'; // Mock data import
import { Movie } from '../movie';
import { MovieCategory } from '../movie-category';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, NgFor, UpperCasePipe } from '@angular/common'; // Import CommonModule
import { MovieService } from '../movie.service'; // Movie service
import { MovieBookingComponent } from '../movie-booking/movie-booking.component'; // Adjust the path as necessary
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Component({
  standalone: true,
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  imports: [
    FormsModule,
    CommonModule, // Include CommonModule here
    NgIf,
    NgFor,
    UpperCasePipe,
    AddMovieComponent, // Include AddMovieComponent here
    MovieBookingComponent
  ],
})
export class MovieListComponent {
  searchTerm: string = ''; // Holds the search input
  movieCategories: MovieCategory[] = MOVIE_CATEGORIES; // Categories data
  selectedCategory: MovieCategory | null = null; // Holds the currently selected category
  selectedMovie: Movie | null = null; // Set to null initially to indicate no selection

  stars = [1, 2, 3, 4, 5]; // Array for 5 stars

  // Filtered movie list based on category and search term
  get filteredMovies(): Movie[] {
    let filtered = this.movieCategories
      .filter(cat => !this.selectedCategory || cat.name === this.selectedCategory?.name)
      .flatMap(cat => cat.movies); // Flatten movie arrays from categories

    // Filter based on search term
    if (this.searchTerm) {
      filtered = filtered.filter(movie =>
        movie.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    return filtered;
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    if (this.selectedMovie && this.selectedMovie.rating === undefined) {
      this.selectedMovie.rating = 0; // Initialize to 0 if no rating exists
    }
  }

  onSelectCategory(category: MovieCategory): void {
    this.selectedCategory = category; // Set the selected category to display its movies
  }

  // Added B.
  onMovieAdded(movie: Movie): void {
    // Ensure no duplicate names if necessary
    const existingMovie = this.movieCategories.flatMap(cat => cat.movies).find(m => m.name === movie.name);
    if (!existingMovie) {
      const category = this.selectedCategory || this.movieCategories[0]; 
      movie.id = category.movies.length + 1; // Assign a new ID based on current movies
      movie.rating = 0; // Initialize rating
      category.movies.push(movie); // Push the movie to the selected category
      alert('Movie added successfully!');
    } else {
      alert('Movie with this name already exists.'); // Change ID check to name for easier user feedback
    }
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(h => h !== movie);
    this.movieService.deleteMovie(movie.id).subscribe();
  }

  // Book the selected movie
  bookMovie(movie: Movie): void {
    if (movie) {
      console.log(`Booking movie: ${movie.name}`);
      // Add additional booking logic here, e.g., navigating to a booking page or displaying a modal
      alert(`You have booked ${movie.name}`);
    } else {
      alert('No movie selected for booking.');
    }
  }

  // Rate the movie
  rateMovie(rating: number) {
    if (this.selectedMovie) {
      this.selectedMovie.rating = rating; // Assign the rating to the selected movie
    }
  }
}

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-list.component.html',
  styleUrls: [ './movie-list.component.css' ]
})
export class MovieSearchComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private movieService: MovieService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.movieService.searchMovies(term)),
    );
  }
}


