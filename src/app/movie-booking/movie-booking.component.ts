import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class MovieBookingComponent {
  @Input() movie!: Movie;
  userName: string = '';
  email: string = '';
  phone: string = '';
  paymentMethod: string = '';
  numberOfSeats: number = 1; // Default to 1
  seatLocation: string = '';
  seatPrice: number = 10; // Example price per seat
  availableSeats: string[] = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3']; // Example seats

  // Accept the form as a parameter
  bookSeat(form: NgForm) {
    if (form.valid) { // Check if the form is valid
      const totalPrice = this.calculatePrice();
      console.log('Booking Details:', {
        userName: this.userName,
        email: this.email,
        phone: this.phone,
        paymentMethod: this.paymentMethod,
        numberOfSeats: this.numberOfSeats,
        seatLocation: this.seatLocation,
        totalPrice: totalPrice
      });

      // Display an alert message with booking details
      alert(`Booking confirmed!\n\nMovie: ${this.movie.name}\nName: ${this.userName}\nSeats: ${this.numberOfSeats}\nSeat Location: ${this.seatLocation}\nTotal Price: $${totalPrice}`);

      form.reset(); // Reset the form after booking
    } else {
      alert('Please fill out all required fields.');
      console.log('Form is invalid.');
    }
  }

  calculatePrice(): number {
    return this.numberOfSeats * this.seatPrice; // Calculate total price
  }
}
