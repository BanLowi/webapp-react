import { useContext, useState } from "react";
import axios from "axios";

import MoviesContext from "../context/MoviesContext";

export default function ShowMovie() {

    const { movies } = useContext(MoviesContext);
    const [selectedMovie, setSelectedMovie] = useState(null);
    console.log(selectedMovie);


    function handleChange(e) {

        const movieId = e.target.value;

        if (movieId) {

            axios.get(`http://localhost:3000/movies/${movieId}`)
                .then(response => setSelectedMovie(response.data[0]))
                .catch(error => console.log(error))
        } else {
            setSelectedMovie(null)
        };
    }


    return (
        <>
            <div className="container">

                <div>

                    <select className="form-select" aria-label="Default select example" onChange={handleChange}>
                        <option value="">- select a movie -</option>
                        {
                            movies.map(movie => (
                                <option key={movie.id} value={movie.id}>{movie.title}</option>
                            ))
                        }
                    </select>

                </div>
                {
                    selectedMovie &&
                    <div className="col mt-5">
                        <div className="card">
                            <div className="card-header">
                                <h3>{selectedMovie.title}</h3>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{selectedMovie.director}</h5>
                                <p className="card-text">{selectedMovie.abstract}</p>
                            </div>
                            <img src="http://localhost:3000/matrix.jpg" alt="" />
                        </div>
                    </div>
                }

            </div>
        </>
    )
};