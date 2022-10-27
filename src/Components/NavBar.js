import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="nav-item selected">Personal</div>
      <div className="nav-item">Shared</div>
      <div className="nav-item">Settings</div>
    </div>
  );
}

export default NavBar;