import { styled } from "../providers/theme";

export default styled.label`
  color: ${(props) => props.theme.palette.TEXT};
  text-transform: capitalize;
  display: inline-block;
  font-weight: bold;
`;
