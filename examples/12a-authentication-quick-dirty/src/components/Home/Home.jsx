import { useState, useEffect } from "react";
import axios from "axios";

function Home({ token, logout }) {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getUsers = async () => {
    try {
      /**
       * The API should not give you back any users unless you are logged in.
       * To prove that you are logged in, you must pass the token in the API.
       */
      const response = await axios("http://localhost:7000/api/users", {
        method: "GET",
        headers: {
          /**
           * Passing to the token to the API here, where it is a header.
           * The name of the header is "Authorization" and the value is "Bear mytoken".
           */
          Authorization: `Bearer ${token}`, // Try commenting me out and see what happens when no token is passed
        },
      });
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
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
    </div>
  );
}

export default Home;
