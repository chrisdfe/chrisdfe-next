import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { COLUMN_SPAN, GUTTER } from './constants';

interface Props {
  children: ReactNode,
  width?: 'regular' | 'narrow',
}

interface WrapperProps {
  width?: Props['width'];
}

const Wrapper = styled.div<WrapperProps>`
  max-width: ${props => props.width == 'narrow' ? "700px" : "1400px"};
  padding: 0 ${GUTTER};
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
`;

const Inner = styled.div`
  margin: 0 -${GUTTER};
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: flex-start;
  align-items: flex-start;
  
`;

function Container({ width = 'regular', children }: Props) {
  return (
    <Wrapper width={width}>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  );
}

export default Container;