import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [costs, setCosts] = useState([]);
  const [cost, setCost] = useState("");

  const handelClick = () => {
    setItems((items) => [...items, item]);
    setCosts((costs) => [...costs, cost]);
  };

  const updateFunctionOne = ({ target }) => {
    setItem(target.value);
  };

  const updateFunctionTwo = ({ target }) => {
    setCost(target.value);
  };

  const deleteItems = (index) => {
    setItems(items.filter((item, currentIndex) => currentIndex !== index));
  };

  const deleteCosts = (index) => {
    setCost(costs.filter((item, currentIndex) => currentIndex !== index));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  function sum(a) {
    return (a.length && parseFloat(a[0]) + sum(a.slice(1))) || 0;
  }

  const clearStates = () => {};

  const times = costs.length;
  const displayX = new Array(times).fill(null);

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={submitHandler}>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={item}
              onChange={updateFunctionOne}
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
              value={cost}
              onChange={updateFunctionTwo}
            />
          </div>
          <div className="col-md-auto">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handelClick}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <div className="rTable">
          <div className="rTableRow">
            <div className="rTableHead">
              <strong>Items</strong>
            </div>
            <div className="rTableHead">
              <strong>Costs</strong>
            </div>
          </div>

          <div className="rTableRow">
            <div className="rTableCell">
              {items.map((subItems, idx) => {
                return (
                  <div className="cell" key={idx}>
                    {subItems}
                  </div>
                );
              })}
            </div>
            <div className="rTableCell">
              {costs.map((subCosts, idx) => {
                return (
                  <div className="cell" key={idx}>
                    {subCosts}
                  </div>
                );
              })}
            </div>
            <div className="rTableCell">
              {displayX.map((_, idx) => (
                <div key={idx} className="cell">
                  <button
                    aria-label="Delete"
                    title="Delete"
                    onClick={() => deleteCosts(idx)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="lead">
          <strong>Total Cost: {sum(costs).toFixed(2)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={clearStates}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
