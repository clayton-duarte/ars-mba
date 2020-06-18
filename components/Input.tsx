import { styled } from "../providers/theme";

export default styled.input`
  border: ${(props) => props.theme.shape.BORDER};
  border-color: ${(props) => props.theme.palette.PRIMARY};
  border-radius: ${(props) => props.theme.shape.RADIUS};
  font-family: ${(props) => props.theme.font.FAMILY};
  padding: ${(props) => props.theme.shape.PADDING};
  font-size: ${(props) => props.theme.font.SIZE};
  color: ${(props) => props.theme.palette.TEXT};
  width: 100%;
  margin: 0;
  &:focus {
    border: 0.125rem solid ${(props) => props.theme.palette.SECONDARY};
  }
`;
