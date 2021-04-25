import { useState } from "react";
import "./App.css";


const GroceryList = () => {
  const [list, setList] = useState([
    {
      name: "Toliet Paper",
      cost: 2.50
    }
  ])
  const [name, setName] = useState();
  const [cost , setCost] = useState();

  const handleClear = () => {
    setList([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleList();
    console.log("handleSubmit:","Name:",name,"cost:", cost,"list:", list);
  }

  const handleList = () => {
    setList(
      [...list, {name: name,  cost: cost}]
    )
  }

  const handleDelete = (indexDel) => {
    setList(list.filter((item, index)=> index !== indexDel))
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
              name="product"
              onChange={handleChange}
              value={formValues.product}
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
              name="price"
              onChange={handleChange}
              value={formValues.price}
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
            <button type="submit" className="btn btn-success" disabled={!(formValues.product && formValues.price)}>
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
            {list.map((item, index) => {
              // console.log(index)
              return (
                <tr key={'grocery-item-' + index}>
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
            })}
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
          <button onClick={handleClear} className="btn btn-outline-success">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
