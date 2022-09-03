import styled from "styled-components";
import { useState, useEffect } from "react";
import * as profileService from "../../../services/profileService";

const Container = styled.div`
  font-size: medium;
`;
const MembersCard = styled.div`
  height: 350px;
  width: 200px;
  background-color: gray;
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
            <MembersCard key={profile._id} className="memebers-card">
              {profile.name}
            </MembersCard>
          ))}
        </Container>
      ) : (
        <p>No profiles yet</p>
      )}
    </>
  );
};

export default Members;
