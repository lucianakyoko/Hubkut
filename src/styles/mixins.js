import styled from "styled-components";
import { colors } from "./colors";

export const flexColCenterGap = (gap) => {
  return `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${gap}rem;
  `
};

export const flexRowCenterGap = (gap) => {
  return `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${gap}rem;
  `
};