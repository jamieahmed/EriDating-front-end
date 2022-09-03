import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GeneralContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  background-color: #f3e6e8;
  -webkit-box-shadow: 5px 5px 15px 5px #ffffff;
  box-shadow: 5px 5px 15px 5px #ffffff;
`;

const Container = styled.div`
  display: flex;
  background-color: #f3e6e8;
  gap: 10px;
  margin: 10px;
`;

const Text = styled.div`
  text-align: center;
  padding: 20px;
  gap: 0px;
  flex: 7;
  height: 100px;
  background-color: #f3e6e8;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  margin: 10px;
  border-top: 2px solid white;
`;

const Settings = ({ user }) => {
  return (
    <>
      {/* <h4>Account Page</h4> */}
      <GeneralContainer>
        <Container>
          <Text>
            <Link
              to="/Settings/accountmanagement/changePassword"
              style={{ textDecoration: "none" }}
            >
              Change Password
            </Link>
          </Text>
          <Text>Change Email Address</Text>
          <Text>More about me</Text>
        </Container>
        <Container>
          <Text>More about me</Text>
          <Text>More about me</Text>
          <Text>More about me</Text>
        </Container>
        <Container>
          <Text>More about me</Text>
          <Text>More about me</Text>
          <Text>More about me</Text>
        </Container>
      </GeneralContainer>
    </>
  );
};

export default Settings;
