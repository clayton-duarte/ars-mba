import { styled } from "../providers/theme";

export default styled.footer`
  background: ${(props) => props.theme.palette.PRIMARY};
  color: ${(props) => props.theme.palette.BG};
  justify-content: space-between;
  place-items: center;
  position: sticky;
  font-size: 2rem;
  display: flex;
  padding: 1rem;
  z-index: 999;
  bottom: 0;
`;
