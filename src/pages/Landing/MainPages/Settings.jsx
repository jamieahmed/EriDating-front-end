import React from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <strong>
        <Link to="/Settings/changePassword" style={{ textDecoration: "none" }}>
          Change Password
        </Link>
      </strong>
    </div>
  );
};

export default Settings;
