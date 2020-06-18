import styled from "styled-components";
import { FiHash } from "react-icons/fi";

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
  grid-area: CI;

  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 0 17px;
  background-color: var(--primary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Title = styled.h1`
  margin-left: 9px;

  font-size: 16px;
  font-weight: bold;

  color: var(--white);
`;

export const HashtagIcon = styled(FiHash)`
  width: 28px;
  height: 28px;

  color: var(--symbol);

  cursor: pointer;
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;

  background-color: var(--white);
  opacity: 0.2;

  margin: 0 12px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);
`;
