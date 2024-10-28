// Bakhtiar
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Movie } from '../movie';

@Component({
  standalone: true,
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  imports: [FormsModule, CommonModule] // Include CommonModule here
})
export class AddMovieComponent {
  @Output() movieAdded = new EventEmitter<Movie>();
  @Output() movieDeleted = new EventEmitter<number>();

  @Input() movies: Movie[] = [];

  id: number | null = null;
  name: string = '';
  category: string = '';
  description: string = '';
  thumbnail: string = '';

  // New properties for the Movie
  duration: string = ''; // e.g., "2h 15m"
  date: string = ''; // e.g., "2024-10-27"
  time: string = ''; // e.g., "18:30"
  hallNumber: number | null = null; // e.g., 3

  addMovie() {
    const newMovie: Movie = {
      id: this.id?? this.generateUniqueId(), // Use non-null assertion because id will be set
      name: this.name,
      category: this.category,
      description: this.description,
      thumbnail: this.thumbnail,
      duration: this.duration, // Include duration
      date: this.date, // Include date
      time: this.time, // Include time
      hallNumber: this.hallNumber! // Use non-null a
    };

    this.movieAdded.emit(newMovie);
    // Display an alert message with booking details
    alert(`Booking registered!\n\nMovie: ${newMovie.name}\nHall Number: ${newMovie.hallNumber}\nDate: ${newMovie.date}\nTime: ${newMovie.time}`);
    this.resetForm();
  }

  deleteMovie(movieId: number) {
    if (confirm(`Are you sure you want to delete this movie?`)) {
      this.movieDeleted.emit(movieId); // Emit the id of the movie to be deleted
      alert(`Movie deleted successfully!`);
    }
  }

  resetForm() {
    this.id = null;
    this.name = '';
    this.category = '';
    this.description = '';
    this.thumbnail = '';
    this.duration = ''; // Reset duration
    this.date = ''; // Reset date
    this.time = ''; // Reset time
    this.hallNumber = null; // Reset hall number
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000000); // Simple unique ID generator
  }
}
