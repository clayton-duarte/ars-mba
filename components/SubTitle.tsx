import { styled } from "../providers/theme";

export default styled.h2`
  color: ${(props) => props.theme.palette.PRIMARY};
  text-transform: capitalize;
  font-size: 1.1rem;
  margin: 0;
`;
