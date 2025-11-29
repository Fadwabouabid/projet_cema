import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import MovieDescription from "./MovieDescription";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "Film sur les rêves et la manipulation mentale.",
      posterURL:
        "https://m.media-amazon.com/images/I/81p+xe8cbnL._SL1500_.jpg",
      rating: 9,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Voyage à travers l'espace et le temps.",
      posterURL:
        "https://m.media-amazon.com/images/I/91kFYg4fX3L._SL1500_.jpg",
      rating: 10,
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E"
    }
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, { id: movies.length + 1, ...newMovie }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      Number(movie.rating) >= Number(searchRating)
  );

  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center", margin: "20px" }}>
          🎬 Application Cinéma
        </h1>

        <Routes>

          {/* PAGE ACCUEIL */}
          <Route
            path="/"
            element={
              <>
                <Filter
                  setSearchTitle={setSearchTitle}
                  setSearchRating={setSearchRating}
                />
                <AddMovie addMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />

          {/* PAGE DESCRIPTION */}
          <Route
            path="/movie/:id"
            element={<MovieDescription movies={movies} />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
