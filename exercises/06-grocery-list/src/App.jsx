import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [itemInput, setItemInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let newGroceryItem = {
      item: itemInput,
      price: priceInput,
    };
    let newGroceryItems = [...groceryItems, newGroceryItem];

    setGroceryItems(newGroceryItems);
    setItemInput("");
    setPriceInput("");
  };

  const deleteItem = (index) => {
    setGroceryItems(
      groceryItems.filter((groceryItem, currentIndex) => currentIndex !== index)
    );
  };

  const clearList = () => {
    setGroceryItems([]);
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              required={true}
              value={itemInput}
              onChange={(event) => setItemInput(event.target.value)}
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
              required={true}
              value={priceInput}
              onChange={(event) => setPriceInput(event.target.value)}
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
            {groceryItems.map((groceryItem, index) => {
              const { item, price } = groceryItem;
              return (
                <tr key={`grocery-item-${index}`}>
                  <td>{item}</td>
                  <td>{price}</td>
                  <td>
                    <button
                      aria-label="Delete"
                      title="Delete"
                      onClick={() => deleteItem(index)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead">
          <strong>
            Total Cost:{" "}
            {Object.values(groceryItems).reduce((total, item) => {
              return total + parseInt(item.price);
            }, 0)}
          </strong>
        </p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={clearList}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
