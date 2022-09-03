import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as profileService from "../../services/profileService";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const Container = styled.div`
  font-size: medium;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 15px;
`;

const MembersCard = styled.div`
  height: 360px;
  width: 200px;
  background-color: #f3e6e8;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(255, 255, 255, 0);
  margin: auto 20px;
`;
const MembersCardImageSrc =
  "https://tse3.mm.bing.net/th?id=OIP.zc3XRPZxUt4Xt7zDZYLa_wHaHa&pid=Api&P=0";

const MembersCardImage = styled.img`
  height: 200px;
  width: 100%;
`;
const MembersCardDetails = styled.div`
  height: 200px;
  width: 100%;
`;
const MembersCardText = styled.span`
  font-size: 15px;
  font-weight: medium;
  padding: 10px;
  color: #7f53ac;
`;
const Hr = styled.hr`
  border: 0.5px solid white;
`;
const MembersCardFooter = styled.div`
  width: 100%;
  margin-top: 0px;
  text-align: center;
`;
const MembersCardFooterButton = styled.button`
  border: none;
  background-color: transparent;
  text-align: center;
  margin: auto 5px;
`;

const Card = () => {
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
              <MembersCardDetails>
                <Link to="/member/:id" style={{ textDecoration: "none" }}>
                  <MembersCardImage src={MembersCardImageSrc} />
                  <MembersCardText>
                    <strong>Name:</strong>
                    {profile.name}
                  </MembersCardText>
                  <br />
                  <MembersCardText>
                    <strong>Lives In:</strong>Westfield,NJ,USA
                  </MembersCardText>
                  <br />
                  <MembersCardText>
                    <strong>Age:</strong>26
                  </MembersCardText>
                  <br />
                  <MembersCardText>
                    <strong>Seeking:</strong>Male 21 - 34
                  </MembersCardText>
                  <br />
                  <MembersCardText>
                    <strong>Status:</strong>19 hours ago
                  </MembersCardText>
                  <br />
                </Link>
                <Hr />
                <MembersCardFooter>
                  <MembersCardFooterButton>
                    <FavoriteBorderOutlinedIcon />
                  </MembersCardFooterButton>
                  <MembersCardFooterButton>
                    <MessageIcon />
                  </MembersCardFooterButton>
                  <MembersCardFooterButton>
                    <VisibilityOutlinedIcon />
                  </MembersCardFooterButton>
                </MembersCardFooter>
              </MembersCardDetails>
            </MembersCard>
          ))}
        </Container>
      ) : (
        <p>No profiles yet</p>
      )}
    </>
  );
};

export default Card;
