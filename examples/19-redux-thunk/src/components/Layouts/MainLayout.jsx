import { Link } from "react-router-dom";
import logo from "../../assets/52-CMA-Awards-Logo.jpg";

function MainLayout(props) {
  const { children, ...restOfProps } = props;
  return (
    <div {...restOfProps}>
      <header className="text-center mt-4 mb-2">
        <Link to="/">
          <img src={logo} alt="52nd CMA Awards" width="250" height="167" />
        </Link>
      </header>
      <main className="container">{children}</main>
    </div>
  );
}

export default MainLayout;
