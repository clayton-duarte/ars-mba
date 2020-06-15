import { Theme, styled } from "../providers/theme";

export default styled.button`
  background: ${({ theme, secondary }: { theme: Theme; secondary?: boolean }) =>
    secondary ? theme.palette.SECONDARY : theme.palette.PRIMARY};
  border: ${(props) => props.theme.shape.BORDER};
  border-color: ${(props) => props.theme.palette.PRIMARY};
  border-radius: ${(props) => props.theme.shape.RADIUS};
  font-family: ${(props) => props.theme.font.FAMILY};
  padding: ${(props) => props.theme.shape.PADDING};
  font-size: ${(props) => props.theme.font.SIZE};
  color: ${(props) => props.theme.palette.BG};
  text-transform: uppercase;
  cursor: pointer;
  &:focus,
  &:active {
    background: ${(props) => props.theme.palette.SECONDARY};
  }
  &:disabled {
    filter: grayscale(100%);
    pointer-events: none;
  }
`;
