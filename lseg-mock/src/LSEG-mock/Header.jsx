import React from "react";
import logo from "../assets/LSEG-logo.png";

export default function Header() {
  return (
    <div class="container text-start" style={{ backgroundColor: "white" }}>
      <header>
        <a class="navbar-brand text-start" href="/">
          <img src={logo} alt="LSEG Logo" style={{ height: "150px" }} />
        </a>
      </header>
    </div>
  );
}
