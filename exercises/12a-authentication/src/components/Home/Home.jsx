// You might need to import something from React
import { useState, useEffect } from "react";
import axios from 'axios';
// import Axios (or use Fetch)

function Home({ token, logout }) {
  const [movies, setMovies] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const MOVIE_API_URL = "http://localhost:7000/api/movies";
  /**
   * Make an AJAX request to http://localhost:7000/api/movies to get a list of movies.
   * Be sure to provide the token in the AJAX request.
   */
  useEffect(() => {
    axios.get(MOVIE_API_URL, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }).then(response => {
      // Successful
      setMovies(response.data);
      setErrorMessage("");
    }).catch(error => {
      // Fail
      if (error.response && error.response.status === 401) {
        setErrorMessage(error.response.data.message)
      } else {
        setErrorMessage("Something went wrong...")
      }
      
    })
  }, [])

  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        {/* Make this button functional */}
        <button className="btn btn-primary" onClick={logout}>Logout</button>
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
