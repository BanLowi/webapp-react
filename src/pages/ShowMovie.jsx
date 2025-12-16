import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ShowMovie() {

    const { id } = useParams();
    const [thisMovie, setThisMovie] = useState({});
    const [reviews, setReviews] = useState([]);
    console.log(thisMovie);
    console.log(reviews);

    const formInit = {
        name: "",
        rating: "",
        review: ""
    };

    const [formData, setFormData] = useState(formInit);



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

    function handleSubmit(e) {
        e.preventDefault()

        console.log("Form Submitted", formData);

        return axios.post(`http://localhost:3000/reviews`, formData)
            .then((response) => {
                console.log("Review submitted successfully", response.data);
                setFormData(formInit); // Reset form after submission
            })
            .catch((error) => {
                console.error("Error submitting review", error);
            });
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

                    <form onSubmit={handleSubmit}>

                        <div className="d-flex justify-content-between">
                            <div className="mb-3 w-75">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="userName"
                                    placeholder="Name"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <small id="HelpId" className="form-text text-muted">Type your name to leave a review</small>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="rating" className="form-label">Rating</label>
                                <select
                                    className="form-select form-select-lg"
                                    name="rating"
                                    id="userRating"
                                    value={formData.rating}
                                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="3">4</option>
                                    <option value="3">5</option>
                                </select>
                            </div>
                        </div> {/* userName & userRating */}

                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">Review</label>
                            <textarea
                                className="form-control"
                                name="review"
                                id="userReview"
                                rows="3"
                                placeholder="Type here"
                                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                            ></textarea>
                        </div> {/* userReview */}

                        <button type="submit" className="btn btn-primary">
                            Submit Review
                        </button>

                    </form>

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