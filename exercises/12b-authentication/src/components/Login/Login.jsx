// You will need import something from React
import { useState, useContext } from "react";
// You will need to import something from AccessTokenContext
// You will need to import useHistory from react-router-dom
import { AccessTokenContext} from '../../context/AccessTokenContext';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Login(){
  /**
   * I should be getting something or things from the Context API
   */

  /**
   * User input
   */
  const { setToken, setIsLoggedIn } = useContext(AccessTokenContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Handle the form submission that will login the user here.
   * If successful, store token in state and redirect to /movies
   * If invalid username and password, display an error letting the user know it is invalid.
   * @see exercises/12a-authentication/src/components/App/App.jsx
   * @see examples/12a-authentication-quick-dirty/src/components/App/App.jsx
   * 
   * 
   */
  const requestLogin = async() => {
    try{
     setIsLoading(true); 
     const asyncResponse =  await axios({
        method: 'POST',
        url: "http://localhost:7000/api/login",
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify({
          username: username, 
          password: password
          })
      },
      )
      
     if(asyncResponse.status === 200 && asyncResponse.data.token) {
        setToken(asyncResponse.data.token);
        setIsLoggedIn(true);
        setIsLoading(false);
        history.push("/home");
     }
    }
    catch(error) {
      if(error.response && error.response.status === 401);
      setErrorMessage("Sorry an error occurred");
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    requestLogin();
  };

  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      <form className="form-inline mb-2" method="POST" onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="username" className="mr-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control mr-3"
            required={true}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="mr-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control mr-3"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Login
        </button>
      </form>
      <p className="form-text">
        <small>
          The username is <em>username</em> and the password is{" "}
          <em>password</em>
        </small>
      </p>
      {isLoading && <p>Loading ...</p>}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default Login;
