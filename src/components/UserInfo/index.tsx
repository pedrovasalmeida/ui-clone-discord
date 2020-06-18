import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  Microfone,
  Headphone,
  Settings,
} from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Pedro H.</strong>
          <span>#9793</span>
        </UserData>
      </Profile>
      <Icons>
        <Microfone />
        <Headphone />
        <Settings />
      </Icons>
    </Container>
  );
};

export default UserInfo;
