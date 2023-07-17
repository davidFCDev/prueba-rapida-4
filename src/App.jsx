import "./App.css";
import { Movies } from "./components/Movies";
import { useSearch } from "./hooks/useSearch";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { search, updateSearch } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="query"
            value={search}
            placeholder="Avengers, matrix..."
          />
          <button>Buscar</button>
        </form>
      </header>

      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
