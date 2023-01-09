import styled, { css } from "styled-components";
import { SECTION_PADDING_REM } from "./constants";

type BackgroundProp = 'primary' | 'secondary' | 'transparent';

interface WrapperProps {
  background?: BackgroundProp;
}

const getBackground = (background?: BackgroundProp) => {
  if (!background) {
    return css`${({ theme }) => theme.primary.palette.backgroundColor};`;
  }

  if (background === 'transparent') {
    return 'transparent';
  }

  return css`${({ theme }) => theme[background].palette.backgroundColor};`;
};

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  padding: ${SECTION_PADDING_REM}rem 0 0;
  background: ${props => getBackground(props.background)}
`;

export default Wrapper;