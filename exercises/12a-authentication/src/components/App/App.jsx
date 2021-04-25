import { useState } from "react";
// import something here
import Home from '../Home/Home';
// import Axios (or use Fetch)
import axios from 'axios';

function App() {
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


  /**
   * Complete all the logging in and logout logic
   */
  const [token, setToken] = useState(null);

  const logout = () => {
    setToken(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const login = async () => {
      try {
        setIsLoading(true);
        const asyncResponse = await axios({
          method: "POST",
          url: "http://localhost:7000/api/login",
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify({
            username: username,
            password: password
          })
        });
          if (asyncResponse.status === 200 && asyncResponse.data.token) {
            setToken(asyncResponse.data.token);
            setIsLoading(false);
          }
      }
      catch (error) {
          if (error.response && error.response.status === 401) {
            setErrorMessage(`There was an error during login.  Server responded with status code ${error.response.status}`);
            setIsLoading(false);
          }
      }
    }
    login();
  }

  /**
   * If the user is logged in, you should render the <Home /> component instead.
   */
  if(token) {
    return <Home token={token} logout={logout} />
  } else {
    return (
      <div className="container mt-2 mb-5">
        <h1>Login</h1>
        {/* Handle form submission */}
        <form className="form-inline mb-2" method="POST" onSubmit={e=>handleSubmit(e)}>
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
}

export default App;
