import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ShowMovie() {

    const { id } = useParams();
    const [thisMovie, setThisMovie] = useState({});
    const [reviews, setReviews] = useState([]);
    console.log(thisMovie);
    console.log(reviews);



    function getThisMovie() {

        return axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => setThisMovie(response.data))
            .catch(err => console.log(err))

    }

    function getReviews() {

        return axios.get("http://localhost:3000/reviews")
            .then(response => setReviews(response.data))
            .catch(err => console.log(err))
    }


    useEffect(() => getThisMovie, [id]);
    useEffect(() => getReviews, []);

    return (
        <>
            <div className="container">

                <h1>{thisMovie.title}</h1>

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

                <div>
                    {
                        reviews.map(review => (
                            <div key={review.id} className="card">
                                <div className="card-header">{review.name}</div>
                                <div className="card-body">
                                    <p className="card-text">{review.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
};