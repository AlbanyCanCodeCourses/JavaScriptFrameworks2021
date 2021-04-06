import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Category from "../Category/Category";

function App() {
  /**
   * - "/" should map to "Home"
   * - "/category/food" should map to "Category"
   * - "/category/clothing" should map to "Category"
   * - "/category/office" should map to "Category"
   */
  return (
    <>
      <div className="bg-success text-white pt-1 pb-1 mb-3">
        <h1 className="container h2">NoName E-Commerce</h1>
      </div>
      <main className="container mb-4">
        <Router>
          <Switch>
            {/* The ":category" is essentially a variable, which can be food, clothing or office */}
            <Route exact path="/category/:category">
              <Category />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
