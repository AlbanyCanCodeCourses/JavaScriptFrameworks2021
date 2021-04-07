import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AccessTokenContext } from "../../context/AccessTokenContext";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  /**
   * Getting access token from the Context API
   */
  const { getToken, logout } = useContext(AccessTokenContext);

  const getUsers = async () => {
    try {
      const response = await axios.request({
        method: "GET",
        url: "/api/users",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      const users = response.data.data;
      setUsers(users);
    } catch (error) {
      console.error(error);
      /**
       * If the response returns an HTTP status of 401 in this case, that means that the token has expired or is invalid.
       * Ideally, we would want to refresh the JWT token
       * but we need to be careful to get into a never ending loop.
       */
      setErrorMessage("Oh no! An unexpected error occurred.");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        <button type="button" className="btn btn-primary mb-2" onClick={logout}>
          Logout
        </button>
      </div>
      <p>
        Notice that when you refresh the page or open a new tab, you are still
        logged in. That's because the token is being refreshed.
      </p>
      {users.map((user) => {
        const key = `user-${user.id}`;
        const name = `${user.firstName} ${user.lastName}`;
        return (
          <div key={key}>
            <img src={user.avatar} alt={name} />
            <p>{name}</p>
          </div>
        );
      })}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <div>
        Here are some links to test JWT expiration with:{" "}
        <Link to="/home">Home</Link> | <Link to="/users">Users</Link>
      </div>
    </div>
  );
}

export default Home;
