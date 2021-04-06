import { useState } from "react";
import { subscribe } from "../../services/subscribe";
import { useHistory } from "react-router-dom";

function Subscribe() {
  const [email, setEmail] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await subscribe(email);
      history.push("/thank-you");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="uk-text-center">
      <h1>Subscribe to Our Newsletter</h1>
      <p>
        Stay up-to-date with the latest fashions and trends from{" "}
        <em>YourStylist.com</em>.
      </p>

      <div className="uk-flex uk-flex-center" method="POST">
        <form
          className="uk-margin uk-flex-inline"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            className="uk-input"
            type="email"
            placeholder="Email"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="uk-button uk-button-danger" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
