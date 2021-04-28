import React, { useRef } from 'react';

export default function AddFilms({ newFilm }) {
	const inputPeli = useRef();

	const addNew = (event) => {
		if (event.type === 'keypress' && event.key !== 'Enter') {
			return;
		}

		const nameOfFilm = inputPeli.current.value;
		if (nameOfFilm.trim() !== '') {
			newFilm(nameOfFilm);
		}

		inputPeli.current.value = null;
	};

	return (
		<div className="input-group mb-3">
			<input
				type="text"
				onKeyPress={addNew}
				ref={inputPeli}
				className="form-control"
				placeholder="Nombre de película"
			/>
			<button onClick={addNew} className="btn btn-outline-secondary" type="button" id="button-addon2">
				Añadir película
			</button>
		</div>
	);
}
