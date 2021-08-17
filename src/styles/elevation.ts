import { css } from "styled-components";

type ElevationLevel = 0 | 1 | 2 | 3;

export const elevation = (level: ElevationLevel) => {
  switch (level) {
    case 0:
      return css`
        box-shadow: none;
      `;
    case 1:
      return css`
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);
      `;
    case 2:
      return css`
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
          0px 2px 2px 0px rgba(0, 0, 0, 0.14),
          0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      `;
    case 3:
      return css`
        box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
          0px 3px 4px 0px rgba(0, 0, 0, 0.14),
          0px 1px 8px 0px rgba(0, 0, 0, 0.12);
      `;
    default:
      return null;
  }
};
