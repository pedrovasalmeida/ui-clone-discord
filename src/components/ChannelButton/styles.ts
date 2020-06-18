import styled from "styled-components";
import { FiHash } from "react-icons/fi";
import { MdSettings } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";

/** GRID TEMPLATE
 ** SL - Server List
 ** SN - Server Name
 ** CI - Channel Info
 ** CL - Channel List
 ** CD - Channel Data
 ** UL - User List
 ** UI - User Info
 **/

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: display 0.2s background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    color: var(--senary);
    margin-left: 5px;
  }

  .direita {
    display: none;
  }

  &:hover,
  &:active {
    background-color: var(--quinary);
    transition: display 0.2s;

    > div span {
      color: var(--white);
    }

    > .direita {
      display: inline;
    }
  }
`;
export const DivEsquerda = styled.div``;

export const HashtagIcon = styled(FiHash)`
  color: var(--symbol);
`;

export const InviteIcon = styled(AiOutlineUserAdd)`
  color: var(--symbol);

  &:hover,
  &:active {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(MdSettings)`
  color: var(--symbol);

  margin-left: 5px;

  &:hover,
  &:active {
    color: var(--white);
  }
`;

export const LockIcon = styled(AiFillLock)`
  margin-left: 5px;
  color: var(--tertiary);
`;
