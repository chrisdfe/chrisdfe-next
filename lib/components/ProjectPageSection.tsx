import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Box from 'lib/components/Box';

interface Props {
  children?: ReactNode,
  hasBorder?: boolean;
  gutterContent?: ReactNode,
  gutterHeight?: string;
}

const WrapperBox = styled.div`
position: relative;
`;

interface GutterContentProps {
  height?: string;
}

const Wrapper = styled.div`
  background: #fff;
`;

const GutterContent = styled.div<GutterContentProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 6rem;
  top: 0.4em;
  left: -8rem;
  font-size: 13px;
  height: ${props => props.height || "1em"};
`;

export const GutterContentLine = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid ${props => props.theme.palette.borderColor};
`;

export default function ProjectPageSection({ children, gutterContent, gutterHeight }: Props) {
  return (
    <Wrapper>
      <Box padding={{ top: 1, bottom: 1 }}>
        <WrapperBox>
          {gutterContent && (
            <GutterContent height={gutterHeight}>{gutterContent}</GutterContent>
          )}

          {children && children}
        </WrapperBox>
      </Box>
    </Wrapper>
  );
}