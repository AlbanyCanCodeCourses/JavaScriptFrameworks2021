function ErrorMessage(props) {
  return (
    <div className="alert alert-danger" role="alert">
      {props.children}
    </div>
  );
}

export default ErrorMessage;
