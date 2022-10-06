import React from "react";
import Button from "./UI/Button";

const NavButton = ({ showUser, removedUser }) => {
  return (
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
      <Button onClick={showUser} className="active nav-link" tab="tab">
        User
      </Button>
      <Button onClick={removedUser} className="nav-link" tab="tab">
        Delete User
      </Button>
    </div>
  );
};

export default NavButton;
