import React from "react";
import Button from "../button";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row w-100">
          <div className="col logo">
            <h3>Mobile Shop Application</h3>
          </div>
          <div className="col text-right">
            <Button type="link" to="/add">
              add Item
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;