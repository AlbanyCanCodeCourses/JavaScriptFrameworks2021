import { useState, useCallback, useEffect } from "react";
import "./App.css";

const GroceryList = () => {
  const [list, setList] = useState([
  ])
  const [name, setName] = useState();
  const [cost , setCost] = useState();
  const [table, setTable] = useState();

 
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);


  const handleSubmit = (e) => {
    e.preventDefault();
    handleList();
    handleTable();
    console.log("handleSubmit:","Name:",name,"cost:", cost,"list:", list);
  }

  const handleTable = () => {
    setTable(
      list.map((item, index) => {
        // console.log(index)
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.cost}</td>
            <td>
              <button
                onClick={() => handleDelete(index)}
                aria-label="Delete"
                title="Delete"
              >
                &times;
              </button>
            </td>
          </tr>
        );
      })
    );
  }

  const handleList = () => {
    setList(
      [...list, {name: name,  cost: cost}]
    )
  }

  const handleDelete = (index) => {
    setList(list.splice(index))
    console.log("from handleDelete", list)
  }

  
     
  


  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form
          method="POST"
          className="row g-3"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="col">
            <input
              name="Item Name"
              className="form-control"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
            />
          </div>
          <div className="col">
            <input
              name="Cost"
              className="form-control"
              type="number"
              min="0"
              step=".01"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
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
          
          </tbody>
        </table>
        <p className="lead">
          <strong>
            Total Cost:{" "}
            {Array.from(list.map((object) => Number(object.cost))).reduce(
              (acc, el) => {
                return acc + el;
              },
              0
            )}
          </strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-outline-success">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
