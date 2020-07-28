import { styled } from "../providers/theme";

export default styled.footer`
  background: ${(props) => props.theme.palette.PRIMARY};
  color: ${(props) => props.theme.palette.BG};
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;
  grid-template-rows: auto;
  place-items: center;
  position: sticky;
  font-size: 2rem;
  display: grid;
  padding: 1rem;
  z-index: 999;
  bottom: 0;
  gap: 1rem;
`;
