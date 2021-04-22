import { Component } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from "axios";

class App extends Component {
  state = {
    quote: [],
    isLoading: true,
    hasError: false,
  };

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
    })
      .then((response) => {
        this.setState({
          quote: response.data,
          isLoading: false,
          hasError: false,
        });
      })
      .catch(() => this.setState({ hasError: true, isLoading: false }));
  }

  render() {
    return (
      <div className="cover bg-warning text-center">
        <img
          src={ronSwansonImage}
          alt=""
          width="450"
          height="423"
          className="mt-4"
        />
        <div className="container">
          {this.state.isLoading && <p>Loading...</p>}
          {this.state.hasError && (
            <div className="alert alert-danger" role="alert">
              We're sorry, but an unexpected error occurred
            </div>
          )}
          <blockquote
            id="quote"
            className="blockquote bg-dark text-white border-0 mb-4"
          >
            {this.state.quote.map((quote) => {
              return quote;
            })}
          </blockquote>
        </div>
      </div>
    );
  }
}

export default App;
