import React from "react";
import styled from "styled-components";
import Members from "./Members";

const GeneralContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  overflow-y: auto;
  position: relative;
  padding: 10px;
`;
const HomeContainer = styled.div`
  margin: 10px auto;
  width: 100%;
  position: relative;
`;
const SecondPage = () => {
  return (
    <>
      <GeneralContainer>
        <HomeContainer>
          <Members />
        </HomeContainer>
      </GeneralContainer>
    </>
  );
};

export default SecondPage;
