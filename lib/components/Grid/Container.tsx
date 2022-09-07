import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { COLUMN_SPAN, GUTTER } from './constants';

interface Props {
  children: ReactNode,
  size?: 'regular' | 'narrow',
}

interface WrapperProps {
  size: Props['size'];
}

const Wrapper = styled.div<WrapperProps>`
  /* max-width: ${props => props.size == 'narrow' ? "700px" : "1200px"}; */
  max-width: 700px;
  padding: 0;
  margin: 0 auto;
`;

const Inner = styled.div`
  margin: 0 -${GUTTER};
  display: flex;
  flex-wrap: wrap;
`;

function Container({ size = 'regular', children }: Props) {
  return (
    <Wrapper size={size}>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  );
}

export default Container;