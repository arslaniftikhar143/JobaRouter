import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div>
      <h1>Help</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id nemo
        maxime quam dolorum obcaecati ullam itaque. Enim, accusamus voluptas.
      </p>
      <nav className="help__layout">
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
