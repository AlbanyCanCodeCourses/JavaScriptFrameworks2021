// You will need to import some things from React
import { useState, useEffect, useContext } from "react";
// You will need to import something from AccessTokenContext
import {AccessTokenContext} from '../../context/AccessTokenContext';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const {token} = useContext(AccessTokenContext);
  /**
   * I should be getting something or things from the Context API
   */

  /**
   * Make an AJAX request to http://localhost:7000/api/movies to get a list of movies.
   * Be sure to provide the token in the AJAX request.
   * @see exercises/12a-authentication/src/components/Home/Home.jsx
   */
  useEffect(()=> {
    const getMovies = async () => {
        setMovies(await axios("http://localhost:7000/api/movies)"))
    }
    getMovies();
  }, [])

  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        {/* Make this button functional */}
        <button className="btn btn-primary">Logout</button>
      </div>
      {Object.values(movies).map((movie, idx) => {
        return (
          <div className="media mb-3" key={`movie-${idx}`}>
            <img
              src={movie.poster}
              alt={movie.title}
              width="150"
              height="220.875"
              className="mr-3"
            />
            <div className="media-body">
              <h2 className="h3">{movie.title}</h2>
              <p>{movie.synopsis}</p>
            </div>
          </div>
        );
      })}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default Home;
