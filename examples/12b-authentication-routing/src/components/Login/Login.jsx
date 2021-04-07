import { useContext, useState } from "react";
import { AccessTokenContext } from "../../context/AccessTokenContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  /**
   * Handling authentication
   */
  const { login } = useContext(AccessTokenContext);
  const history = useHistory();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    axios
      .request({
        method: "POST",
        url: "/api/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          username,
          password,
        }),
      })
      .then((response) => {
        /**
         * If login is successful,
         * getting the JWT token and expiry time from the response
         */
        const { token, expiry } = response.data;
        if (!token) throw Error("Missing JWT token");
        login(token, expiry);
        /**
         * And redirecting to the home page
         */
        history.push("/home");
      })
      .catch((error) => {
        console.error(error);
        /**
         * If the response returns an HTTP status of 401 when loggin in, this means that username or password is incorrect
         */
        if (error.response && error.response.status === 401) {
          setErrorMessage("Invalid username or password");
        } else setErrorMessage("We are sorry, unexpected error occurred.");
        setIsLoading(false);
      });
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
