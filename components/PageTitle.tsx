import { styled } from "../providers/theme";

export default styled.h1`
  border-bottom: ${(props) => props.theme.shape.BORDER};
  border-color: ${(props) => props.theme.palette.SECONDARY};
  margin: ${(props) => props.theme.shape.MARGIN};
  text-transform: capitalize;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
`;
