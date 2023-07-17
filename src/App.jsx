import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { searchMovies } from "./services/movies";

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies(event.target.value);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
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

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
