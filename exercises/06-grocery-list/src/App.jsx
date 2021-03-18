import { useState } from "react";
import "./App.css";

const GroceryList = () => {
//   const[items, setItem] = useState([{itemName: "", cost: ""}])

//   const [inputValue, setInputValue] = useState("")

//   const handleOnClick = () => {
//   const newItem =  {
//     itemName: inputValue,
//     cost: inputValue
//   };

//   const newItems = [...items, newItem];

//   setItem(newItems);
// }
  // const newItem = () => {
  //   setItem([...items, ""]);
  // };

// const deleteItem = index => {
//   item.filter((x, currentIndex) => currentIndex !== index
//   )};
const [list, setList] = useState([
  { name: "toilet paper", cost: 100},
  { name: "candy", cost: 100}
]);

const [name, setName] = useState("");
const [cost, setCost] = useState("");

const add = () => {
  setList([ ...list, { name: name, cost: cost}])
};


const deleteItem = indexOfSelectedItem => {
  console.log(indexOfSelectedItem)
  const newList = list.filter(
    (item, currentIndex) => currentIndex !== indexOfSelectedItem
  )
console.log(newList);
setList(newList);
};

const getTotal = () => {
  let sum = 0
  for(let i = 0; i<list.length; i++ ){
    sum += parseInt(list[i].cost)
    // console.log(sum)
  }
  return sum  
};

const clear = () => {
  // Array.from(document.querySelectorAll('input')).forEach(
  // input => (input.value =""));
    setList([])
};
// const validLabelorPrice = RegExp(
//   "ab+c", "i"
// );
// const validateForm = errors => {
//   let valid = true;
//   Object.values(errors).forEach(val => val.length > 0 & (valid = false));
//   return valid;
// }

const validateItem = () => {
  console.log(name)
  if(!name.length>0){
    alert("Item must be greater than 0 characters!")
  }
} 
const validateCost = () => {
  if(!cost>0){
    alert("Cost must be greater than 0!")
  }
}
const handleSubmit = (e) => {
  e.preventDefault();
  // const {key, value} = e.target
  // let error = this.state.errors
  // switch (key){
  //   case "name":
  //     name = name.length > 0 && validLabelorPrice.test(value) ? alert("Item must be greater than zero characters and only letters or numbers") :
  //     "";
  //     break;
  //   case "value":
  //     value = value.length > 0 && validLabelorPrice.test(value) ? alert("Item must be greater than zero characters and only letters or numbers") :
  //     "";
  //     break;
  // }
  add()
  validateItem()
  validateCost()
}




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

            {list.map((item, idx) => {
            return( 
            <tr key={`grocery-item-${idx}`}>
              <td>{item.name}</td>
              <td>{item.cost}</td>
              <td>
                <button onClick={() => deleteItem(idx)}>
                  &times;
                </button>
              </td>
            </tr>
            )
})};
            
        </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost:{getTotal(list)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
          };

export default GroceryList;
