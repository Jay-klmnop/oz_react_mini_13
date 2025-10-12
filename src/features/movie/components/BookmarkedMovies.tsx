import { useMovieStore } from "@/shared/store";
import MovieCard from "./MovieCard";

export function BookmarkedMovies() {
    const {bookmarkedMovies} = useMovieStore();

    return (
        <div>
            <h1 className="text-xl">Bookmarked Movies</h1>
                <div className='mx-4 my-4 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
                    {bookmarkedMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    )
}