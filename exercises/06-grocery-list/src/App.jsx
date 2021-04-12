import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [groceryItem, setGroceryItem] = useState([
    { item: "carrots", cost: 5 },
  ]);

  const [groceryName, setGroceryName] = useState("");
  const [groceryPrice, setGroceryPrice] = useState("");

  const addGroceryItem = () => {
    setGroceryItem([...groceryItem, { item: groceryName, cost: groceryPrice }]);
  };

  function deleteItem(index) {
    setGroceryItem(
      groceryItem.filter((currItem, currIndex) => currIndex !== index)
    );
  }
 
  function getTotalCost(groceryPrice) {
    return groceryPrice.reduce((totalCost, itemCost) => {
      return totalCost + parseFloat(itemCost.cost);
    }, 0);
  }

  function handleForm(e) {
    e.preventDefault();
    addGroceryItem();
  }

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form
          onSubmit={handleForm}
          method="POST"
          id="myForm"
          className="row g-3"
        >
          <div className="col">
            <input
              required
              onChange={(e) => setGroceryName(e.target.value)}
              onFocus = {()=>setGroceryName('')}
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={groceryName}
            />
          </div>
          <div className="col">
            <input
              required
              onChange={(e) => setGroceryPrice(e.target.value)}
              onFocus = {()=>setGroceryPrice('')}
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              value={groceryPrice}
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
            {}
            {
              groceryItem.map((oneItem, index) => {
                return (
                  <tr>
                    <td>{oneItem.item}</td>
                    <td>${oneItem.cost}</td>
                    <td>
                      <button
                        onClick={() => deleteItem(index)}
                        aria-label="Delete"
                        title="Delete"
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                );
              })
              // <tr>

              // <td>{}</td>
              // <th>{}</th>
              // </tr>
            }
          </tbody>
        </table>
        <p className="lead"> 
          <strong>Total Cost: ${getTotalCost(groceryItem)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button
            onClick={() => {
              setGroceryItem([]);
            }}
            type="button"
            className="btn btn-outline-success"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
