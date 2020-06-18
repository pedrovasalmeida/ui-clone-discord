import styled from "styled-components";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { MdHeadset, MdSettings } from "react-icons/md";

/** GRID TEMPLATE
 * SL - Server List
 * SN - Server Name
 * CI - Channel Info
 * CL - Channel List
 * CD - Channel Data
 * UL - User List
 * UI - User Info
 */

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > strong {
    font-size: 13px;

    color: var(--white);

    display: block;

    transition: all 0.2s;

    &:hover {
      font-size: 15px;
    }
  }

  > span {
    font-size: 13px;

    color: var(--gray);

    transition: all 0.2s;

    &:hover {
      font-size: 15px;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 5px;
  }
`;

export const Microfone = styled(FaMicrophoneAlt)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.2;

  transition: opacity 0.2s width 0.4s height 0.4s;

  &:hover {
    opacity: 1;
    width: 23px;
    height: 23px;
  }
`;

export const Headphone = styled(MdHeadset)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.2;

  transition: opacity 0.2s width 0.4s height 0.4s;

  &:hover {
    opacity: 1;
    width: 23px;
    height: 23px;
  }
`;

export const Settings = styled(MdSettings)`
  width: 20px;
  height: 20px;

  color: var(--white);
  opacity: 0.2;

  transition: opacity 0.2s width 0.4s height 0.4s;

  &:hover {
    opacity: 1;
    width: 23px;
    height: 23px;
  }
`;
