// Import things from React Router
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Subscribe from "../Subscribe/Subscribe";
import ThankYou from "../ThankYou/ThankYou";

function App() {
  const [path, setPath] = useState("");

  const InValidPath = () => {
    if (path !== "subscribe" || "thank-you") {
      return <Subscribe />;
    }
  };

  return (
    <div className="uk-height-1-1 uk-flex uk-flex-column uk-flex-center">
      <main>
        <Router>
          <Switch>
            <Route exact path="/subscribe">
              <Subscribe />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/thank-you">
              <ThankYou />
            </Route>
          </Switch>
          {/* <Switch>
            <Route exact path="/">
              <Subscribe />
            </Route>
          </Switch> */}
          <Switch>
            <InValidPath />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
