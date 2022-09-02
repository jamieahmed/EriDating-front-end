import React from "react";
import { Link } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

const Landing = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <section>
          <section>
            <p>wellcome {user ? user.name : "friend"}</p>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
            <li>
              <Link to="" onClick={handleLogout}>
                LOG OUT
              </Link>
            </li>
            <li>
              <Link to="/changePassword">Change Password</Link>
            </li>
          </section>
          <SecondPage user={user} handleLogout={handleLogout} />
        </section>
      ) : (
        <section>
          <FirstPage />
        </section>
      )}
    </>
  );
};

export default Landing;
