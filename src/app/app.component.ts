import { Component } from '@angular/core';
import { MovieListComponent } from "./movie-list/movie-list.component"; // Ensure this path is correct
import { MovieBookingComponent } from "./movie-booking/movie-booking.component"; // Ensure this path is correct

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MovieListComponent, MovieBookingComponent] // Import the standalone components
})
export class AppComponent {
  title = 'Cinema Seat Booking ';
}
