import { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Film sur les rêves et la manipulation mentale.",
      posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._SL1500_.jpg",
      rating: 9
    },
    {
      title: "Interstellar",
      description: "Voyage à travers l'espace et le temps.",
      posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._SL1500_.jpg",
      rating: 10
    }
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      Number(movie.rating) >= Number(searchRating)
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px" }}>🎬 Application Cinéma</h1>

      <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />

      <AddMovie addMovie={addMovie} />

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
