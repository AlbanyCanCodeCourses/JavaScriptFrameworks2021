import { Component } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)

/**
 * Convert me to the React Class Component
 */
// function App() {
//   return (
//     <div class="cover bg-warning text-center">
//       <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
//       <div class="container">
//         {/* Display a loading message */}
//         {/* Display an error message if the API fails */}
//         <blockquote
//           id="quote"
//           class="blockquote bg-dark text-white border-0 mb-4"
//         >
//           {/* Complete me */}
//         </blockquote>
//       </div>
//     </div>
//   );
// }

// export default App;
export default class App extends Component {
  state = {
    quote: "Paging Ron Swanson....",
    error: "",
  };

  componentDidMount() {
    fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get response from quote API.");
        }
        return response.json();
      })
      .then((newQuote) => this.setState({ quote: newQuote[0] }))
      .catch((error) => {
        this.setState({ error: "Failed to get quote! Try again later." });
        console.log(error);
      });
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
          {this.state.error}
          {/* Display an error message if the API fails */}
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
