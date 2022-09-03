import React from "react";
import styled from "styled-components";
import Card from "../../../components/MainPages/Card";
import { useState, useEffect } from "react";
import * as profileService from "../../../services/profileService";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
`;

const Members = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles();
      setProfiles(profileData);
    };
    fetchProfiles();
  }, []);
  return (
    <>
      {profiles.length ? (
        <Container>
          {profiles.map((profile) => (
            <Card key={profile._id} profile={profile} />
          ))}
        </Container>
      ) : (
        <p>No profiles yet</p>
      )}
    </>
  );
};

export default Members;
