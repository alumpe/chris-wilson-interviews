import React from "react";
import styled, { css } from "styled-components";

const Part = styled.span<{ isHighlighted: boolean }>`
  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      background-color: #ffff0040;
    `}
`;

export const getHighlightedText = (
  text: string,
  highlight: string | undefined
) => {
  if (!highlight) return text;

  // Split on highlight term and include term into parts, ignore case
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, i) => (
        <Part
          key={i}
          isHighlighted={part.toLowerCase() === highlight.toLowerCase()}
        >
          {part}
        </Part>
      ))}
    </span>
  );
};
