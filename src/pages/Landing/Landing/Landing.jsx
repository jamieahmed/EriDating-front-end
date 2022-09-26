import React from "react";
import "./Landing.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FirstPage from "../../../components/Prepage/FirstPage";

const Container = styled.div`
  display: flex;
  background-color: #f3e6e8;
  gap: 3px;
  margin: 10px;
`;

const profileAvatar =
  "https://www.salisburyut.com/wp-content/uploads/2020/09/avatar-1-1536x1536.jpeg";

const Landing = ({ user, profiles }) => {
  return (
    <>
      {user ? (
        <>
          {profiles.length ? (
            <>
              {profiles.map((profile) => (
                <div key={profile._id}>
                  <Container>
                    <Link
                      to={`/profile/id/${profile._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        className="profile-image"
                        src={profile?.photo || profileAvatar}
                        alt="profile-pic"
                      />
                      <br />
                      User Id <strong>{profile._id}</strong> <br />
                      Name <strong>{profile.name}</strong> <br />
                      Age <strong>
                        {profile?.age || "age not selected"}
                      </strong>{" "}
                      <br />
                      Created at <strong>{profile.createdAt}</strong>
                      <br />
                    </Link>
                  </Container>
                </div>
              ))}
            </>
          ) : (
            <p>No profiles yet</p>
          )}
        </>
      ) : (
        <FirstPage />
      )}
    </>
  );
};

export default Landing;
