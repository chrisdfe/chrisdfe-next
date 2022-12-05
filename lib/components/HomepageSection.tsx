import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import Box from './Box';

interface Props {
  children: ReactNode,
  isCentered?: boolean;
  hasBorder?: boolean;
}

const HomepageSectionWrapperBox = styled.div<{ isCentered?: boolean; }>`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    top: 0;
    bottom: 0;
    left: 0;
    /* border-left: 1px solid ${props => props.theme.palette.borderColor}; */
    transition: transform 0.2s;
  }
`;

export default function HomepageSection({
  children,
  isCentered = false,
  hasBorder = true
}: Props) {
  return (
    <HomepageSectionWrapperBox isCentered={isCentered}>
      <Box
        border={hasBorder ? ["bottom"] : []}
        padding={{ top: 3, bottom: 3 }}>
        {children}
      </Box>
    </HomepageSectionWrapperBox>
  );
}