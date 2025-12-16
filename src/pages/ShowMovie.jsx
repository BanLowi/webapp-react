import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ShowMovie() {

    const { id } = useParams();
    const [thisMovie, setThisMovie] = useState({})
    console.log(thisMovie);


    function getThisMovie() {

        return axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => setThisMovie(response.data))
            .catch(err => console.log(err))

    }


    useEffect(getThisMovie, [id])

    return (
        <>
            <div className="container">

                <div className="col mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h3>{thisMovie.title}</h3>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{thisMovie.director}</h5>
                            <p className="card-text">{thisMovie.abstract}</p>
                        </div>
                        <img src={`http://localhost:3000/${thisMovie.image}`} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
};