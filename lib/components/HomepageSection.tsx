import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Box from './Box';

interface Props {
  children: ReactNode,
  hasBorder?: boolean;
}

const HomepageSectionWrapperBox = styled.div`
  position: relative;
  text-align: center;

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

export default function HomepageSection({ children, hasBorder = true }: Props) {
  return (
    <HomepageSectionWrapperBox>
      <Box border={hasBorder ? ["bottom"] : []} padding={{ top: 3, bottom: 3 }}>
        {children}
      </Box>
    </HomepageSectionWrapperBox>
  );
}