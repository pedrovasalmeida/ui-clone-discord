import React from "react";

import {
  Container,
  Role,
  User,
  Avatar,
  FlagAdmin,
  FlagMod,
  FlagBot,
  FlagSub,
} from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
  isSub?: boolean;
  isAdmin?: boolean;
  isMod?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot,
  isSub,
  isMod,
  isAdmin,
}) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <FlagBot>Bot</FlagBot>}
      {isAdmin && <FlagAdmin>Adm</FlagAdmin>}
      {isMod && <FlagMod>Mod</FlagMod>}
      {isSub && <FlagSub>Sub</FlagSub>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>

      <UserRow nickname="Pedro Henrique de Vasconcellos Almeida" isAdmin />

      <Role>Offline - 30</Role>

      <UserRow nickname="chizt" isAdmin />
      <UserRow nickname="trx" isAdmin />
      <UserRow nickname="Jeff" isMod />
      <UserRow nickname="abc" isSub />
      <UserRow nickname="Tom" isBot />
      <UserRow nickname="aatéoz" />
      <UserRow nickname="amg" />
      <UserRow nickname="cupper" />
    </Container>
  );
};

export default UserList;
