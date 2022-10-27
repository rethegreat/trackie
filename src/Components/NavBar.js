import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navBar">
      <Link to='/personal' className={`nav-item ${props.Personal ? "selected" : ""}`}>Personal</Link>
      <Link to='/shared' className={`nav-item ${props.Shared ? "selected" : ""}`}>Shared</Link>
      <div className="nav-item">Settings</div>
    </div>
  );
}

export default NavBar;