import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <header className="header">
      <h2>Peliappi</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Games</Link>
          </li>
          <li>
            <Link to="/addgames">Add Games</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
