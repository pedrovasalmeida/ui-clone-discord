import styled from "styled-components";

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
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;

  background-color: var(--secondary);

  max-height: calc(100.9vh - 46px);
  /* max-height: calc(101vh - 46px); */
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;

  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;

  display: flex;
  align-items: center;

  cursor: pointer;
  border-radius: 5px;

  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  background-color: var(--primary);

  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const FlagBot = styled.span`
  margin-left: 9px;

  /** Y, X, Desfoque, Cor */
  text-shadow: 1px 1px 2px black;
  background-color: royalblue;
  color: #fff;

  border-radius: 4px;
  padding: 4px 5px;

  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const FlagAdmin = styled.span`
  margin-left: 9px;

  /** Y, X, Desfoque, Cor */
  text-shadow: 1px 1px 2px black;
  background-color: red;
  color: #fff;

  border-radius: 4px;
  padding: 4px 5px;

  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const FlagMod = styled.span`
  margin-left: 9px;

  /** Y, X, Desfoque, Cor */
  text-shadow: 1px 1px 2px black;
  background-color: orange;
  color: #fff;

  border-radius: 4px;
  padding: 4px 5px;

  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const FlagSub = styled.span`
  margin-left: 9px;

  /** Y, X, Desfoque, Cor */
  text-shadow: 1px 1px 2px black;
  background-color: purple;
  color: #fff;

  border-radius: 4px;
  padding: 4px 5px;

  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
`;
