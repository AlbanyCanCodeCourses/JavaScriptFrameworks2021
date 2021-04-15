// You will need import something from React
import { useState, useContext } from "react";
import { AccessTokenContext } from '../../context/AccessTokenContext'
import axios from 'axios';
// You will need to import useHistory from react-router-dom
import { useHistory } from 'react-router-dom';

function Login() {
  /**
   * I should be getting something or things from the Context API
   */
  const {login} = useContext(AccessTokenContext);

  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const AUTH_URL = "http://localhost:7000/api/login";

  const getBearerToken = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request({
        method: "POST",
        url: AUTH_URL,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          username,
          password
        }
      });
      // Success - set state, clear input, redirect
      setIsLoading(false);
      setErrorMessage("");
      login(response.data.token);
      setUsername("");
      setPassword("");
      history.push("/home")
    } catch (error) {
      // Fail
      console.log(error);
      setIsLoading(false);
      if (error.response && error.response.status === 401) {
        setErrorMessage("Incorrect username or password")
      } else {
        setErrorMessage("Something went wrong...")
      }
    }
  } 
  /**
   * Handle the form submission that will login the user here.
   * If successful, store token in state and redirect to /movies
   * If invalid username and password, display an error letting the user know it is invalid.
   * @see exercises/12a-authentication/src/components/App/App.jsx
   * @see examples/12a-authentication-quick-dirty/src/components/App/App.jsx
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    getBearerToken();
  };

  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      <form className="form-inline mb-2" method="POST" onSubmit={handleSubmit}>
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
