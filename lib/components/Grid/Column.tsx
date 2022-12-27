import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { COLUMN_SPAN, GUTTER } from './constants';

interface Props {
  children: ReactNode;
  span?: number,
}

interface WrapperProps {
  span: number;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${props => (props.span / COLUMN_SPAN) * 100}%;
  padding: 0 ${GUTTER};
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 1;
`;

function Column({ children, span = 12 }: Props) {
  return (
    <Wrapper span={span}>
      {children}
    </Wrapper>
  );
}

export default Column;