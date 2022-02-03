import React from "react";
import Search from "../search";
import "./navbar.scss";
function Navbar(props) {
  return (
    <nav className="navbar">
      <div class="logo">MovieDB App</div>

      <div class="search-menu">
        <Search search={props.search} />
      </div>
    </nav>
  );
}

export default Navbar;
