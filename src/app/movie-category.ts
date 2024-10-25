//Bakhtiar
import { Movie } from './movie';

export interface MovieCategory {
  id: number;
  name: string;
  movies: Movie[];  // Add this line to include movies in each category
}
