import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardReview from "../components/CardReview";

function MoviePage() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});

    // definivione funzione per chiamata axios
    const fetchMovie = () => {
        axios.get("http://localhost:3000/api/movie/" + id)
            .then(response => { setMovie(response.data) })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(fetchMovie, []);

    // funzione rendering 
    const renderReviews = () => {
        return movie.reviews?.map((review) => {
            return (
                <div className="col" key={review.id}>
                    <CardReview key={review.id} review={review} />
                </div>
            )
        })
    }


    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    {movie?.image && <img className="movie-img" src={movie?.image} alt={movie?.title} />}
                </div>

                <h1>{movie.title}</h1>
                <h3 className="text-muted">
                    <i>By {movie.director}</i>
                </h3>
                <p>{movie.abstract}</p>
            </header>

            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center">
                    <h4>Our community reviews</h4>
                </header>
                <div className="col">
                    {renderReviews()}
                </div>

            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-between">
                <Link className="btn btn-secondary" to="/">
                    Back to home
                </Link>
            </footer>

        </>

    );
}

export default MoviePage