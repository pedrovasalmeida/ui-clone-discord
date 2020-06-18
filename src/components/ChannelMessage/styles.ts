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
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  &.mention {
    background-color: var(--mention-message);

    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }

  & + div {
    margin-top: 13px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;

  margin-right: 8px;

  background-color: var(--gray);

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const Message = styled.div`
  min-height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 8px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: var(--white);

    font-size: 16px;
    cursor: pointer;
  }

  > span {
    margin-left: 9px;

    /** Y, X, Desfoque, Cor */
    text-shadow: 1px 1px 2px black;
    background-color: var(--discord);
    color: #fff;

    border-radius: 4px;
    padding: 4px 5px;

    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
  }

  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 12px;
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
