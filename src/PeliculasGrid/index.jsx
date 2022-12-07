import peliculas from "../peliculas.json"

import "./PeliculasGrid.css"

const PeliculasGrid=({allMovies,
	setAllMovies,
	})=>{
        const onaddMovie = (pelicula) => {
            if (allMovies.find(item => item.id === pelicula.id)) {
                const movies = allMovies.map(item =>
                    item.id === pelicula.id                             //agrego para que no se demadre la lista
                         ? { ...item, quantity: item.quantity + 1 }
                        : item 
                );
               
                return setAllMovies([...movies]);
            }
            setAllMovies([...allMovies, pelicula]);
        };
    
    return(

        <div className='container-items'>
        {peliculas.map(pelicula => (
            <div className='item' key={pelicula.id}>
                {/* <figure> */}
                    <img className="img" src={("https://image.tmdb.org/t/p/w300" + pelicula.poster_path)} alt={pelicula.title} />
                {/* </figure> */}
                <div className='alineado'>
                    <h2>{pelicula.title}</h2>
                    
                    <button type="button" class="btn btn-secondary btn-sm" onClick={()=>onaddMovie(pelicula)}>
                        + Watchlist
                    </button>
                </div> 
            </div>
        ))}
    </div>
);


}

export default PeliculasGrid;