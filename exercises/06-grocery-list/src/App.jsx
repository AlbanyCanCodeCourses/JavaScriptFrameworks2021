import { useState } from "react";
import "./App.css";


const GroceryList = () => {
<<<<<<< HEAD
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
=======

  const [groceries, setGroceries] = useState([])
  const [formValues, setFormValues] = useState(
    {
      product: "",
      price: ""
    }
  )
  
  const handleForm = (e) => {
    e.preventDefault()
    console.log(e.target)
    setGroceries([...groceries, formValues])
    setFormValues(
      {
        product: "",
        price: ""
      }
    )
  }

  const handleChange = (e) => {
    setFormValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  }

  const removeGrocery = (e) => {
    let currentGroceries = [...groceries]
    currentGroceries.splice(parseInt(e.target.id),1)
    setGroceries(
      currentGroceries
    )
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
  }

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
<<<<<<< HEAD
        <form
          onSubmit={handleForm}
          method="POST"
          id="myForm"
          className="row g-3"
        >
=======
        <form method="POST" className="row g-3" onSubmit={handleForm}>
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
          <div className="col">
            <input
              required
              onChange={(e) => setGroceryName(e.target.value)}
              onFocus = {()=>setGroceryName('')}
              className="form-control"
              name="product"
              onChange={handleChange}
              value={formValues.product}
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
              name="price"
              onChange={handleChange}
              value={formValues.price}
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              value={groceryPrice}
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
<<<<<<< HEAD
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
=======
            {
            groceries.map((grocery,index) => {
              console.log(index)
              return (
                <tr key={index}>
                  <td>{grocery.product}</td>
                  <td>{`$${grocery.price}`}</td>
                  <td>
                    <button 
                      id={index}
                      aria-label="Delete"
                      title="Delete"
                      className="btn"
                      onClick={removeGrocery}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              )
            })
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
          <strong>Total Cost: {`$${groceries.reduce((acc,grocery) => acc+parseFloat(grocery.price), 0)}`}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success" onClick={() => setGroceries([])}>
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
