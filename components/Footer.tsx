import { styled } from "../providers/theme";

export default styled.footer`
  background: ${(props) => props.theme.palette.PRIMARY};
  color: ${(props) => props.theme.palette.BG};
  grid-template: 1fr / auto auto auto;
  justify-content: space-between;
  place-items: center;
  position: sticky;
  font-size: 2rem;
  display: grid;
  padding: 1rem;
  z-index: 999;
  bottom: 0;
  gap: 1rem;
`;
