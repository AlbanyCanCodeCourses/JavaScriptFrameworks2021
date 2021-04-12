import { useState, useEffect } from "react";
import axios from 'axios';
import Home from '../Home/Home';

function App() {
  /**
   * User input
   */
  const [token, setToken] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleForm = (e) =>{
    e.preventDefault();
    setIsLoading(true);
    console.log('stop it')
    axios.request({
      method: 'POST',
      url: 'http://localhost:7000/api/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {username: username, password: password}
    })
    .then((response)=>{
      setToken(response.data.token)
    })
    .catch( (error)=>{
      console.error(error);
      if(error.response && error.response.status === 401){
        setErrorMessage("You done messed up parnter. Try the CORRECT information this time!");
      } else{setErrorMessage("actually, i have no idea what's messed up. try again later!")}
    })
  }

  const logout = ()=>{
    setToken('');
    setIsLoading(false);
  }
  /**
   * Complete all the logging in and logout logic
   */

  /**
   * If the user is logged in, you should render the <Home /> component instead.
   */
  if(token){
    return <Home token = {token} logout = {logout}/>
  }else{
  return (
    <div className="container mt-2 mb-5">
      <h1>Login</h1>
      {/* Handle form submission */}
      <form className="form-inline mb-2" method="POST" onSubmit = {handleForm}>
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
