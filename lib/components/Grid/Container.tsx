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
  padding: 0;
  margin: 0 auto;
  display: flex;
`;

const Inner = styled.div`
  display: block;
  margin: 0 -${GUTTER};
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
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