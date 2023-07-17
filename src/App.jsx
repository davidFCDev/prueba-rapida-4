import "./App.css";
import responseMovies from "./mocks/results.json";

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form>
          <input placeholder="Avengers, matrix..." />
          <button>Buscar</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul className="movies">
            {movies.map((movie) => (
              <li key={movie.imdbID} className="movie">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No se han encontrado resultados</p>
        )}
      </main>
    </div>
  );
}

export default App;
