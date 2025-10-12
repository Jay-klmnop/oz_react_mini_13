import type { MovieCardType } from '@/features/movie';
import { create } from 'zustand';

interface MovieState {
  bookmarkedMovies: MovieCardType[];
  likedMovies: MovieCardType[];
  hiddenMovies: MovieCardType[];
  toggleBookmarked: (movie: MovieCardType) => void;
  toggleLiked: (movie: MovieCardType) => void;
  toggleHidden: (movie: MovieCardType) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  bookmarkedMovies: [],
  likedMovies: [],
  hiddenMovies: [],
  toggleBookmarked: (movie) =>
    set((state) => ({
      bookmarkedMovies: state.bookmarkedMovies.some((m) => m.id === movie.id)
        ? state.bookmarkedMovies.filter((m) => m.id !== movie.id)
        : [...state.bookmarkedMovies, movie],
    })),
  toggleLiked: (movie) =>
    set((state) => ({
      likedMovies: state.likedMovies.some((m) => m.id === movie.id)
        ? state.likedMovies.filter((m) => m.id !== movie.id)
        : [...state.likedMovies, movie],
    })),
  toggleHidden: (movie) =>
    set((state) => ({
      hiddenMovies: state.hiddenMovies.some((m) => m.id === movie.id)
        ? state.hiddenMovies.filter((m) => m.id !== movie.id)
        : [...state.hiddenMovies, movie],
    })),
}));
