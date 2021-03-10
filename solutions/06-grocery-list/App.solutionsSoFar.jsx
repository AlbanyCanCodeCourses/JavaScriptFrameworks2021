import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [list, setList] = useState([
    { name: "Toilet Paper", cost: 10000000.99 },
    { name: "Tooth Paste", cost: 1.99 },
  ]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const add = () => {
    setList([...list, { name: name, cost: cost }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add();
  };
  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form onSubmit={handleSubmit} method="POST" className="row g-3">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setCost(e.target.value)}
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
            {/*
            const [list, setList] = useState([
              * [
              { name: 'Toilet Paper', cost: 10000000.99 },
              { name: 'Tooth Paste', cost: 1.99 }
            ]
            */}
            {list.map((item, idx) => {
              return (
                <tr key={`grocery-item-${idx}`}>
                  <td>{item.name}</td>
                  <td>{item.cost}</td>
                  <td>
                    <button aria-label="Delete" title="Delete">
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {/* Complete me */}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
