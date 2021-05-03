import { Link } from "react-router-dom";

function PrevCategoryButton(props) {
  const prevCategoryId = props.currentCategoryId - 1;
  const to = `/category/${prevCategoryId}`;
  return prevCategoryId ? (
    <Link to={to} className="btn btn-default">
      Previous
    </Link>
  ) : null;
}

export default PrevCategoryButton;
