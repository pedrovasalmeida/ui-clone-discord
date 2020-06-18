import React from "react";
import { Container, Separator } from "./styles";

import ServerButton from "../ServerButton";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton mentions={5} />
      <ServerButton hasNotifications />
      <ServerButton mentions={20} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications mentions={13} />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton hasNotifications />
    </Container>
  );
};

export default ServerList;
