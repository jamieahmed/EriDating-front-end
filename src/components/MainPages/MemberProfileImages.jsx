import React from "react";
import styled from "styled-components";

const ProfileImageLink =
  "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg";

const ProfileImageChildrenLink =
  "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg";

const ProfileImageParent = styled.img`
  height: 270px;
  width: 240px;
`;

const Hr = styled.hr`
  border: 0.5px dashed white;
`;

const ProfileImageChildren = styled.img`
  height: 100px;
  width: 85px;
  margin: auto 3px;
`;

const MemberProfileImages = () => {
  return (
    <>
      <ProfileImageParent src={ProfileImageLink}></ProfileImageParent>
      <Hr />
      <>
        <ProfileImageChildren
          src={ProfileImageChildrenLink}
        ></ProfileImageChildren>
        <ProfileImageChildren
          src={ProfileImageChildrenLink}
        ></ProfileImageChildren>
        <ProfileImageChildren
          src={ProfileImageChildrenLink}
        ></ProfileImageChildren>
      </>
    </>
  );
};

export default MemberProfileImages;
