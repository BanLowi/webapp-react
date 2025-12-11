import axios from "axios"
import { useEffect, useState } from "react"

const moviesURL = "http://localhost:3000/movies"

export default function Homepage() {

    const [movies, setMovies] = useState([])

    function getMovies() {

        axios.get(moviesURL)
            .then(response => setMovies(response))
            .catch(error => console.log(error))
    }


    console.log(movies);

    useEffect(getMovies, [])


    return (

        <>
            <main>
                <p>SITO DI LOWI</p>
            </main>
        </>

    )
}