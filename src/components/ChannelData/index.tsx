import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>
        {Array.from(Array(15).keys()).map((item) => (
          <ChannelMessage
            author="chizt"
            date="18/06/2020"
            content="Essa é uma mensagem!"
          />
        ))}

        <ChannelMessage
          author="Tom"
          date="18/06/2020"
          content={
            <>
              <Mention>@chizt</Mention>, me carrega no Valorant, você é muito
              bom!!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
