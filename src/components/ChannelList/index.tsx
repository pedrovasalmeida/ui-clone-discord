import React from "react";

import { Container, Category, AddCategory } from "./styles";
import ChannelButton from "../ChannelButton";

export interface Props {
  channelName: string;
}

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategory />
      </Category>

      <ChannelButton channelName="bem-vindo" />
      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="csgo" isLock />
      <ChannelButton channelName="fortnite" isLock />
      <ChannelButton channelName="valorant" isLock />
      <ChannelButton channelName="paladins" isLock />
      <ChannelButton channelName="afk" />
    </Container>
  );
};

export default ChannelList;
