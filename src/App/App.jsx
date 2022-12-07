import './App.css';
import { useState } from 'react';
import PeliculasGrid from '../PeliculasGrid';
import { Header } from '../Header/Header';


function App() {

  const [allMovies, setAllMovies] = useState([]);

  return (

      <main>
        
      <Header
				allMovies={allMovies}
				setAllMovies={setAllMovies}

			/>
        <PeliculasGrid
        allMovies={allMovies}
				setAllMovies={setAllMovies}

        />
        
      </main>     

  );
}

export default App;
