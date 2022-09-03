import React from "react";
import styled from "styled-components";
import Recommendation from "../../../components/MainPages/Recommendation";

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

const ContentContainer = styled.div`
  background-color: blue;
`;

const RecommendationContainer = styled.div`
  background-color: yellow;
`;

const MemberDetails = () => {
  return (
    <>
      <h3>Memebr Profile Detaills</h3>
      <Container>
        <ContentContainer>Content</ContentContainer>
        <RecommendationContainer>
          <Recommendation />
        </RecommendationContainer>
      </Container>
    </>
  );
};

export default MemberDetails;
