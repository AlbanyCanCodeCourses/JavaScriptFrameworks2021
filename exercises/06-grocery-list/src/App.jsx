import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [state, setState] = useState([{ name: "Empty", costs: 0.0 }]);
  const [item, setItem] = useState("");
  //const [costs, setCosts] = useState([]);
  const [cost, setCost] = useState("");

  const handelClick = () => {
    // setItems((items) => [...items, item]);
    // setCosts((costs) => [...costs, cost]);
    setState([...state, { name: item, costs: cost }]);
  };

  // const updateFunction = ({ target }) => {
  //   setItem(target.value);
  // };

  // const updateFunctionTwo = ({ target }) => {
  //   setCost(target.value);
  // };

  const deleteItems = (idx) => {
    setState(state.filter((item, currentIdx) => currentIdx !== idx));

    // console.log({
    //   state,
    //   item,
    //   cost,
    // });

    // console.log(Object.values);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // sum();
  };

  // function sum(a) {
  //   return (a.length && parseFloat(a[0]) + sum(a.slice(1))) || 0;
  // }

  const clearStates = () => {};

  // const times = costs.length;
  // const displayX = new Array(times).fill(null);

  //const add = state.map((item) => item.costs);
  const totalVar = Object.values(state).reduce((total, item) => {
    console.log(total);
    return parseFloat(total) + parseFloat(item.costs);
  }, 0);
  // console.log(totalVar);

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
              onChange={(e) => {
                if (e.target.value != null) {
                  setItem(e.target.value);
                } else {
                  alert("Input a value");
                }
              }}
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
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/**
             * Complete me. (You can use something else instead of a table if you like)
             * @example
             * <tr>
             *   <td>Toilet Paper</td>
             *   <td>$1.99</td>
             *   <td>
             *     <button aria-label="Delete" title="Delete" ... >
             *       &times;
             *     </button>
             *   </td>
             * </tr>
             */}
            {state.map((items, idx) => {
              return (
                <tr>
                  <td>{items.name}</td>
                  <td>{items.costs}</td>
                  <td>
                    <button
                      aria-label="Delete"
                      title="Delete"
                      onClick={() => deleteItems(idx)}
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
          <strong>Total Cost: {totalVar}</strong>
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
