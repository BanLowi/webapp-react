import { useContext } from "react";

import MoviesContext from "../context/MoviesContext";
import { Link } from "react-router-dom";

export default function HomePage() {

    const { movies } = useContext(MoviesContext);


    return (

        <>
            <main>
                <div className="container">
                    <ul className="list-unstyled">

                        {
                            movies.map(movie => (
                                <li>
                                    <Link key={movie.id} to={`/movies/${movie.id}`}>
                                        {movie.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </main>
        </>

    )
}