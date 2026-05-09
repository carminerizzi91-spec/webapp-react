import axios from "axios";
import { useState, useEffect } from "react";
import CardMovie from "../components/CardMovie";



function HomePage() {

    const [movies, setMovies] = useState([]);

    // definivione funzione per chiamata axios
    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movie")
            .then(response => { setMovies(response.data) })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <h1 className="text-primary">Movie Review</h1>
            <h2><i>The best movie community</i></h2>

            <div className="row row-cols-3 mt-4">
                <CardMovie />
            </div>
        </>

    );
}

export default HomePage