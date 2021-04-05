// Import things from React Router
import Subscribe from "../Subscribe/Subscribe";
import ThankYou from "../ThankYou/ThankYou";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (

    <div className="uk-height-1-1 uk-flex uk-flex-column uk-flex-center">
      <Router>
        <Switch>
          <Route path="/subscribe">
            <Subscribe/>
          </Route>
          <Route path="/thank-you">
            <ThankYou/>
          </Route>
        </Switch>
        <Switch>
          <Route path="/">
            <Redirect to="/subscribe"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
