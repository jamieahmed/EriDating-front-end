import React from "react";
import styled from "styled-components";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import BlockIcon from "@mui/icons-material/Block";

const CardContainer = styled.div`
  margin: 30px;
`;

const MembersCardText = styled.span`
  font-size: 15px;
  font-weight: medium;
  padding: 15px;
`;
const Hr = styled.hr`
  border: 0.5px solid white;
  margin-top: 20px;
`;

const MembersCardFooter = styled.div`
  width: 100%;
  text-align: center;
`;

const MembersCardFooterButton = styled.button`
  border: none;
  background-color: transparent;
  text-align: center;
  margin: 10px;
`;
const MemberProfileDetails = () => {
  return (
    <div>
      <CardContainer>
        <MembersCardText>
          <strong style={{ color: "red" }}>Jamie's Basic Info</strong>
        </MembersCardText>
        <MembersCardText>
          {" "}
          <strong style={{ marginLeft: "300px" }}>Status:</strong>19 hours ago
        </MembersCardText>
        <br />
        <MembersCardText>
          <strong>Name:</strong>
          Jamie Ahmed
        </MembersCardText>
        <br />
        <MembersCardText>
          <strong>Gender:</strong> Male
        </MembersCardText>
        <br />
        <MembersCardText>
          <strong>Age:</strong>26
        </MembersCardText>
        <br />
        <MembersCardText>
          <strong>Marital Status:</strong>Single
        </MembersCardText>
        <br />
        <MembersCardText>
          <strong>Religion:</strong> Christian
        </MembersCardText>
        <br />
        <MembersCardText>
          <strong>Lives In:</strong>Westfield,NJ,USA
        </MembersCardText>
        <br />
        <MembersCardText>
          <strong>Looking For:</strong>Long Term Relationship
        </MembersCardText>
        <br />
        <MembersCardText>
          <strong>About Me:</strong> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nam sed soluta,
        </MembersCardText>
        <br />
        <Hr />
        <MembersCardText>
          <strong style={{ color: "red" }}>Jamie is Looking For</strong>
        </MembersCardText>
        <br />
        <MembersCardText>
          <strong>Seeking:</strong> Female 34 - 40 <strong>for</strong> Long
          Term Relationship
        </MembersCardText>
        <br />
        <MembersCardText>
          <strong>Lives In:</strong>Westfield,NJ,USA
        </MembersCardText>
        <br />
        <Hr />
        <MembersCardFooter>
          <MembersCardFooterButton>
            <FavoriteBorderOutlinedIcon />
          </MembersCardFooterButton>
          <MembersCardFooterButton>
            <MessageIcon />
          </MembersCardFooterButton>
          <MembersCardFooterButton>
            <FlagCircleIcon />
          </MembersCardFooterButton>
          <MembersCardFooterButton>
            <BlockIcon />
          </MembersCardFooterButton>
        </MembersCardFooter>
      </CardContainer>
    </div>
  );
};

export default MemberProfileDetails;
