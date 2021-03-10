import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  // groceryList = [{name: 'name', price: $}, ...]
  const [ groceryList, setGroceryList ] = useState([]);
  // currentItem = {name: 'name', price: $}
  const [ currentItem, setCurrentItem ] = useState({});
  // Reset groceryList to empty array
  const clearGroceryList = () => setGroceryList([]);
  // Remove a single item from groceryList
  const removeItem = (name, price) => {
    console.log(`Removing ${name} ($${price})`)

    // This filters out all instances of a given item tuple, even if intentionaly duplicate
    const newGroceryList = groceryList.filter(item => !((item.name === name) && (item.price === price)))

    // The long way lol
    // let newGroceryList = [];
    // let trash;
    // for (let item of groceryList) {
    //   // One-time filter out function
    //   (!trash && item.name === name && item.price === price) && trash.push(item)
    // }

    

    setGroceryList(newGroceryList);
  }

  // Handle submit
  const addItem = event => {
    event.preventDefault();
    // Check current item for completeness
    // Clone existing, add new
    (currentItem.name && currentItem.price) && setGroceryList([...groceryList, currentItem]);
    console.log(groceryList, currentItem)
  }
  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={event => addItem(event)}>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              onChange={event => setCurrentItem({
                ...currentItem,
                name: event.target.value,
              })}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              onChange={event => setCurrentItem({
                ...currentItem,
                price: event.target.value,
              })}
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              // For each item in groceryList, map a table row
              groceryList.map((item, index) => 
                <tr key={`${item}${index}`}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      aria-label="Delete" 
                      title="Delete" 
                      onClick={// Filter this entry out
                        () => removeItem(item.name, item.price)
                      }
                      >Remove
                    </button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {groceryList.reduce((accumulator, item) => (parseFloat(accumulator) + parseFloat(item.price)).toFixed(2), 0)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success" onClick={event => clearGroceryList(event)}> 
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
