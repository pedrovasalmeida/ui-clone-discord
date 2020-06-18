import React from "react";

import {
  Container,
  Title,
  HashtagIcon,
  Separator,
  Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>Chat livre</Title>
      <Separator />
      <Description>Cannal aberto para conversas.</Description>
    </Container>
  );
};

export default ChannelInfo;
