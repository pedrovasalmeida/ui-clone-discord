import React from "react";

import {
  Container,
  HashtagIcon,
  InviteIcon,
  SettingsIcon,
  LockIcon,
} from "./styles";

export interface Props {
  channelName: string;
  selected?: boolean;
  isLock?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected, isLock }) => {
  return (
    <Container className={selected ? "selected" : ""}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
        {isLock && <LockIcon />}
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
