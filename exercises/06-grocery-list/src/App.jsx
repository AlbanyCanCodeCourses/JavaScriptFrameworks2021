import { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [groceryItem, setGroceryItem] = useState([
    {item: 'itemName',
    cost: 'price'
   }
   
  ]);

  
  function newGroceryItem(item, index){
    setGroceryItem([...groceryItem, {item: "", cost: ""}])
  }
  function addGroceryItem(userInput, index){
    const newGroceryItem = [...groceryItem];
    newGroceryItem[index] = userInput;
    setGroceryItem(newGroceryItem);
  }
  function handleForm(e){
    e.preventDefault();

  }


  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form onSubmit = {handleForm} method="POST" className="row g-3">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
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
              <tr>
                <td>{}</td>
                <th>{}</th>
                </tr>
              
              
            /**
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
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {/*complete  me*/ }</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button  type="button" className="btn btn-outline-success">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
