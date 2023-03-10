import React, {useContext} from 'react';
import MovieCard from "./movies/MovieCard";
import { ListContext } from "../context/AppContext";
import {Link} from "react-router-dom";

function Watchlist() {
    const { watchlist } = useContext(ListContext);

    return (
        <div className="container">
            <div className="header">
                <h1>My Watchlist</h1>

                <span className="count-pill">
                    {watchlist && <>{watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}</>}
                </span>
            </div>


                {watchlist.length ?
                    (<div className="movie-grid">
                        {watchlist.map((movie) => (

                        <div key={movie.id} className="col s12 m4 l3">
                            <MovieCard movie={movie} type="watchlist"/>
                        </div> ))}
                    </div> ): <h3>Currently, no movies are in your watchlist,
                        <Link to="/search"> go find some <i className="small material-icons" >search</i></Link></h3> }

        </div>
    );
}

export default Watchlist;