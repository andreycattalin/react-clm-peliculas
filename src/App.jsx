import logo from './logo.svg';
import './App.css';
import AddFilms from './components/AddFilms';
import TableFilms from './components/TableFilms';
import { useState } from 'react';

function App() {
	const [ peliculas, setPeliculas ] = useState([
		{ id: 200, name: 'Avengers', done: false },
		{ id: 201, name: 'Spiderman', done: false }
	]);

	const addNewFilm = (filmName) => {
		console.log('Quiero añadir una peli', filmName);

		let newId = 1;
		if (peliculas.length > 0) {
			newId = peliculas[peliculas.length - 1].id + 1;
		}

		const myNewPeli = {
			id: newId,
			name: filmName,
			done: false
		};

		setPeliculas((prevPelis) => [ ...peliculas, myNewPeli ]);
	};

	const deleteFilm = (id) => {
		const newList = peliculas.filter((item) => item.id !== id);
		setPeliculas(newList);
		console.log('Quiero eliminar la peli', id);
	};

	const markAsRead = (id) => {
		console.log('Quiero modificar la peli', id);
		const allPelis = [ ...peliculas ]; // copia del array de peliculas para poder modificarlo
		const mFilm = allPelis.find((movie) => movie.id === id);
		mFilm.done = !mFilm.done;
		setPeliculas(allPelis);
	};

	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-12">
					<AddFilms newFilm={addNewFilm} />
					{peliculas.length === 0 ? null : (
						<TableFilms movies={peliculas} deleteFilm={deleteFilm} read={markAsRead} />
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
