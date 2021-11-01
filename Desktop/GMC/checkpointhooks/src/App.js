import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import Navbaar from './Components/Navbar/Navbaar';
import { Films } from './Films';

function App() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="App">
       <Navbaar setInputSearch={setInputSearch} />
       <h1 className="headTitle"> My Movies </h1>
       <MovieList films={Films} inputSearch={inputSearch} />
    </div>
  );
}

export default App;
