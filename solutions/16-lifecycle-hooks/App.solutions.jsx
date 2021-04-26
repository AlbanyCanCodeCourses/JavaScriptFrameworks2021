import { Component } from "react";
import axios from "axios";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";

class App extends Component {
  state = {
    quote: "",
    isLoading: true,
    hasError: false,
  };

  componentDidMount() {
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => this.setState({ quote: response.data }))
      .catch((err) => {
        console.error(err);
        this.setState({ hasError: true });
      })
      .then(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <div class="cover bg-warning text-center">
        <img
          src={ronSwansonImage}
          alt=""
          width="450"
          height="423"
          class="mt-4"
        />
        <div class="container">
          {this.state.isLoading && <p>Loading ...</p>}
          {this.state.hasError && <p>There is an error</p>}
          <blockquote
            id="quote"
            class="blockquote bg-dark text-white border-0 mb-4"
          >
            {this.state.quote}
          </blockquote>
        </div>
      </div>
    );
  }
}

export default App;
