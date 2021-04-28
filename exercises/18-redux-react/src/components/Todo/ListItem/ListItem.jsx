function ListItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-baseline">
      {props.children}
      <button
        type="button"
        className="btn btn-link"
        aria-label="Delete"
        onClick={() => props.deleteTodo(props.todoIndex)}
      >
        x
      </button>
    </li>
  );
}

export default ListItem;
