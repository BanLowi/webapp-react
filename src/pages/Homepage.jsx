import { useContext } from "react";

import MoviesContext from "../context/MoviesContext";

export default function Homepage() {

    const { movies } = useContext(MoviesContext);


    return (

        <>
            <main>
                <p>SITO DI LOWI</p>
            </main>
        </>

    )
}