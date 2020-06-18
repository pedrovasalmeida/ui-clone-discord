import styled from "styled-components";

// --primary: #36393f;
// --secondary: #2f3136;
// --tertiary: rgb(32,34,37);
// --quaternary: #292b2f;
// --quinary: #393d42;
// --senary: #828386;

// --white: #fff;
// --gray: #8a8c90;
// --chat-input: rgb(64,68,75);
// --symbol: #74777a;

// --notification: #f84a4b;
// --discord: #6e86d6;
// --mention-detail: #f9a839;
// --mention-message: #413f3f;

// --link: #5d80d6;

// --rocketseat: #6633cc;
const winheight = window.innerHeight;

export const Container = styled.div`
  /** qual grid-area usar */
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  /** padding vertical */
  padding: 11px 0;

  max-height: winheight;
  /** cria um scroll quando elementos excedem o tamanho da tela */
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  margin-bottom: 8px;
  border-bottom: 2px solid var(--quaternary);
`;
