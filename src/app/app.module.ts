//Bakhtiar
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component'; // Adjust the path if necessary

@NgModule({
  declarations: [
    
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MovieListComponent,
    AppComponent,
    AddMovieComponent,
    MovieBookingComponent
    
  ],
  exports: [MovieListComponent],
  
})
export class AppModule { }