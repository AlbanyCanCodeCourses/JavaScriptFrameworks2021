import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";
import ThankYou from "../ThankYou/ThankYou";

function App() {
  return (
    <div className="uk-height-1-1 uk-flex uk-flex-column uk-flex-center">
      <Router>
        <Switch>
          <Route exact path="/subscribe">
            <Subscribe />
          </Route>
          <Route exact path="/thank-you">
            <ThankYou />
          </Route>
          <Route>
            <Redirect to="/subscribe" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
