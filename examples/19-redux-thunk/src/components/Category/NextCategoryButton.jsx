import { Link } from "react-router-dom";

function NextCategoryButton(props) {
  const nextCategoryId = props.currentCategoryId + 1;
  const to =
    parseInt(nextCategoryId) > props.maxCategoryId
      ? "/complete"
      : `/category/${nextCategoryId}`;
  return nextCategoryId ? (
    <Link to={to} className="btn btn-primary float-right">
      Next
    </Link>
  ) : null;
}

export default NextCategoryButton;
