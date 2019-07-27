import React from "react";
import { NavLink } from "react-router-dom";

// making links for signup and signin
const Nav2 = () => {
  return (
    <div>
      <button type="button">
        <NavLink to="/signup" exact>
          sign up
        </NavLink>{" "}
        <br></br>
      </button>

      <button type="button">
        <NavLink to="/signin" exact>
          Login
        </NavLink>{" "}
        <br></br>
      </button>
    </div>
  );
};

export default Nav2;
