import { Link } from "react-router-dom";
import CardReview from "../components/CardReview";

function MoviePage() {

    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <h1>Titolo Film</h1>
                <h3 className="text-muted">
                    <i>By Nome regista</i>
                </h3>
                <p>Lorem ipsum dolor sit amet</p>
            </header>

            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center">
                    <h4>Our community reviews</h4>
                </header>
                <CardReview />
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