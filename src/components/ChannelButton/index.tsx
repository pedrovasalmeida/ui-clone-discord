import React from "react";

import {
  Container,
  HashtagIcon,
  InviteIcon,
  SettingsIcon,
  LockIcon,
  DivEsquerda,
} from "./styles";

export interface Props {
  channelName: string;
  selected?: boolean;
  isLock?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected, isLock }) => {
  return (
    <Container className={selected ? "selected" : ""}>
      <DivEsquerda>
        <HashtagIcon />
        <span>{channelName}</span>
        {isLock && <LockIcon />}
      </DivEsquerda>

      <div className="direita">
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
