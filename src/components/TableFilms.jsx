import React from 'react';

export default function TableFilms({ movies, deleteFilm, read }) {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Nombre</th>
					<th scope="col">Acciones</th>
				</tr>
			</thead>
			<tbody>
				{movies.map((movie, i) => (
					<tr key={movie.id}>
						<th scope="row">{i + 1}</th>
						<td>
							{movie.name}
							{movie.done ? '✅' : ''}
						</td>
						<td>
							<div className="btn-group" role="group" aria-label="Basic mixed styles example">
								<button type="button" onClick={() => read(movie.id)} className="btn btn-success">
									Lo he visto
								</button>
								<button type="button" onClick={() => deleteFilm(movie.id)} className="btn btn-danger">
									Eliminar
								</button>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
