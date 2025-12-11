import { useContext } from "react";

import MoviesContext from "../context/MoviesContext";

export default function Homepage() {

    const { movies } = useContext(MoviesContext);


    return (

        <>
            <main>
                {
                    movies.map(movie => (
                        <div key={movie.id}>
                            {movie.title}
                        </div>
                    ))
                }
            </main>
        </>

    )
}