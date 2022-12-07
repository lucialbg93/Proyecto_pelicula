import { useState } from 'react';
import "./Header.css"

export const Header = ({
	allMovies,
	setAllMovies,
}) => {
	const [active, setActive] = useState(false);

	const eliminarPelicula= pelicula => {
		const results = allMovies.filter(
			item => item.id !== pelicula.id
		);

		setAllMovies(results);
	};

	const limpiarCarrito = () => {
		setAllMovies([]);
	};

	return (
		<header>
			
			<h1>WatchList</h1>

			<div className='icono-contenedor'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)} 
				>	
				 	<button type="button-lista" class="btn btn-secondary btn-lg">WatchList</button>

				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}>
				
					{(allMovies.length>0) ? ( 
						<>
							<div className='row-pelicula'>
								{allMovies.map(pelicula => (
									<div className='cart-pelicula' key={pelicula.id}>
										<div className='info-cart-pelicula'>
											
											<p className='titulo-pelicula'>
												{pelicula.title}
											</p>
										
										</div>
											<button type="button" class="btn btn-light" onClick={() => eliminarPelicula(pelicula)}>X</button>
									</div>
								))}
							</div>
							<button type="button" class="btn btn-dark" onClick={limpiarCarrito}>
								Vaciar WatchList
							</button>
						</>
					 ) : ( 
						<p className='listavacia'>WatchList está vacía</p>
					 )} 
				</div> 
			</div>
		</header>
	);
};