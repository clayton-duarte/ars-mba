import { styled } from "../providers/theme";

export default styled.label`
  color: ${(props) => props.theme.palette.TEXT};
  text-transform: capitalize;
  margin-bottom: 0.25rem;
  display: inline-block;
  font-weight: bold;
`;
