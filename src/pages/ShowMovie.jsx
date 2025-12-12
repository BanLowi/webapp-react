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
                selectedMovie && <h1>{selectedMovie.title}</h1>
            }
        </>
    )
};