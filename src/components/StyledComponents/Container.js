import styled from "styled-components";
import { purple } from "../../utilities";
// import { applyStyleModifiers } from "styled-components-modifiers";

const containerProto = styled.div`
  position: relative;
  padding-top: 1em;
  padding-bottom: 1em;
  text-align: center;
  overflow-x: hidden;
`;

export const Container = styled(containerProto)`
  /* Want some way for it to change between white and purple */
  color: ${props => (props.even ? "white" : "black")};
  background-color: ${props => (props.even ? purple[300] : "white")};
`;
