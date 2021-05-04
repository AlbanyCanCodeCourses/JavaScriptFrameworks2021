function Nominee(props) {
  const icon = props.isSelected ? "✓ " : "";
  const className = props.isSelected ? "card bg-success text-white" : "card";
  return (
    <div
      className={className}
      role="button"
      tabIndex="0"
      onClick={props.onClick}
    >
      <div className="card-body text-center">
        {icon}
        {props.nominee}
      </div>
    </div>
  );
}

export default Nominee;
