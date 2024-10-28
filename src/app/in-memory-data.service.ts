import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie'


@Injectable({
    providedIn: 'root',
  })
  export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const movies = [
        { name: 'Die Hard',category:'Action ', description:' jfgjs fgjsg', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Die_Hard_%28soundtrack%29.jpg' },
        { name: 'Mad Max: Fury Road', category:'Action', description:'hkhk ', duration:'2h 10m', date:'2024-10-27', time:'16:30', hallNumber: 1, thumbnail: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/mad-max-fury-road-poster.jpeg?q=50&fit=contain&h=392&dpr=1.5' },
        { name: 'John Wick', category:'Action', description:'gfhf ', duration:'2h', date:'2024-10-27', time:'15:30', hallNumber: 2, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/94/John_Wick_Chapter_3_Parabellum.png' },
        { name: 'The Hangover', category:'comedy', description:'a ', duration:'1h 40m', date:'2024-10-27', time:'18:30', hallNumber: 3, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9f/The_Hangover_Trilogy_DVD_cover.jpg' },
        { name: 'Superbad', category:'comedy', description:' b', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png' },
        { name: 'Anchorman', category:'comedy', description:' c', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Anchorman_2_Teaser_Poster.jpg' },
        { name: 'The Shawshank Redemption', category:'Drama', description:'d ', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg' },
        { name: 'Forrest Gump', category:'Drama', description:'e ', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg' },
        { name: 'Fight Club', category:'Drama', description:'f', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/09/Fight_Club_%282023_film%29.jpg' },
        { name: 'The Lord of the Rings: The Fellowship of the Ring', category:'Fantasy', description:'g ', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg' },
        { name: 'Harry Potter and the Sorcerer\'s Stone', category:'Fantasy', description:' h', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg' },
        { name: 'Pan\'s Labyrinth', category:'Fantasy', description:' i', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/67/Pan%27s_Labyrinth.jpg' },
        { name: 'The Exorcist', category:'Horror', description:' j', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/3/36/ExorcistBelieverPoster.jpg' },
        { name: 'Get Out', category:'Horror', description:' k', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png' },
        { name: 'A Nightmare on Elm Street', category:'Horror', description:'l ', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/1/1d/A_Nightmare_on_Elm_Street_%28Original_Motion_Picture_Soundtrack%29.jpg' },
        { name: 'Pride and Prejudice', category:'Romance', description:'m ', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/07/Pride_and_Prejudice_and_Zombies_poster.jpg' },
        { name: 'The Notebook', category:'Romance', description:' n', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg' },
        { name: 'La La Land', category:'Romance', description:' o', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png' },
        { name: 'Inception', category:'Science Fiction', description:' p', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg' },
        { name: 'The Matrix', category:'Science Fiction', description:'q ', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/5/50/The_Matrix_Resurrections.jpg' },
        { name: 'Blade Runner 2049', category:'Science Fiction', description:'r ',duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1,  thumbnail: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png' },
        { name: 'Se7en', category:'Thriller', description:' s', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg' },
        { name: 'Gone Girl', category:'Thriller', description:'t ', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg' },
        { name: 'Shutter Island', category:'Thriller', description:'w ', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg' },
        { name: 'The Last Dance', category:'Documentary', description:'x ', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Venom_The_Last_Dance_Poster.jpg' },
        { name: 'Won\'t You Be My Neighbor?', category:'Documentary', description:'y ', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Won%27t_You_Be_My_Neighbor%3F.png' },
        { name: '13th', category:'Documentary', description:' z', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/6/6b/13th_%28film%29.png' },
        { name: 'Toy Story', category:'Animation', description:' AA', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Toy_Story_4_poster.jpg' },
        { name: 'Spirited Away', category:'Animation', description:' AB', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png' },
        { name: 'Finding Nemo', category:'Animation', description:' AC', duration:'2h 15m', date:'2024-10-27', time:'18:30', hallNumber: 1, thumbnail: 'https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg' }
    
    
      ];
      return {movies};
    }
  
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(movies: Movie[]): number {
      return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
    }
  }