import { Link } from "react-router-dom";


function CardMovie(props) {

    const {movie} = props
    const {image, title, director, abstract, id } = movie

    return (
        <div className="card mb-4">
            {image && <img src={image} className="card-img-top" alt={title} />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <address>
                    <i>By {director || "Anonymous"}</i>
                </address>
                <p className="card-text">{abstract}</p>
                <Link to={`/movie/${id}`} className="btn btn-primary">
                    See more
                </Link>
            </div>
        </div>


    );
}

export default CardMovie