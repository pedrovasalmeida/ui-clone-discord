import styled from "styled-components";
import { MdAdd } from "react-icons/md";

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
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 16px 9.5px 0 10px;
  background-color: var(--secondary);

  /** scroll vertical */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500px;
    color: var(--gray);
  }
`;

export const AddCategory = styled(MdAdd)`
  width: 21px;
  height: 21px;

  color: var(--symbol);
  cursor: pointer;
`;
