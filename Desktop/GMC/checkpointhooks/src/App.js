import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import Navbaar from './Components/Navbar/Navbaar';
import { Films } from './Films';

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [films, setFilms] = useState(Films);

  const addMovie =(newMovie)=>{
    return setFilms([...films, newMovie]);
  }

  return (
    <div className="App">
       <Navbaar addMovie={addMovie} setInputSearch={setInputSearch} />
       <h1 className="headTitle"> My Movies </h1>
       <MovieList films={films} inputSearch={inputSearch} />
    </div>
  );
}

export default App;
