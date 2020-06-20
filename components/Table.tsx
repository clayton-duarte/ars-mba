import { lighten } from "polished";

import { styled } from "../providers/theme";

export default styled.table`
  margin: ${(props) => props.theme.shape.MARGIN};
  overflow: hidden;
  width: 100%;
  td {
    background: ${(props) => lighten(0.65, props.theme.palette.PRIMARY)};
    border-radius: ${(props) => props.theme.shape.RADIUS};
    padding: ${(props) => props.theme.shape.PADDING};
    text-transform: capitalize;
    text-align: right;
    width: 50%;
    &:first-child {
      text-align: left;
    }
  }
`;
