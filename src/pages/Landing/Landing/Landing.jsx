import React from "react";
import FirstPage from "../Prepage/FirstPage";
import SecondPage from "../MainPages/SecondPage";
const Landing = ({ user}) => {
  return (
    <>
      {user ? (
        <section>
          {/* This is the second and main page */}
          <SecondPage />
        </section>
      ) : (
        <section>
          {/* This is the first and intro page */}
          <FirstPage />
        </section>
      )}
    </>
  );
};

export default Landing;
