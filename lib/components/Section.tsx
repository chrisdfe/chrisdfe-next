import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import Box from './Box';
import { Container, Column } from "../components/Grid";

interface Props {
  children: ReactNode,
  background?: 'primary' | 'secondary';
  isCentered?: boolean;
  hasBorder?: boolean;
  gutterContent?: ReactNode;
  description?: ReactNode;
  width?: 'regular' | 'narrow';
}

interface GutterContentProps {
  height?: string;
}

export const SECTION_PADDING_REM = 5;
export const GUTTER_CONTENT_WIDTH_REM = 10;
export const GUTTER_CONTENT_PADDING_REM = 2;

const GutterContent = styled.div<GutterContentProps>`
  display: block;
  font-size: 14px;
  line-height: 1;
  text-align: right;
  flex-grow: 1;
  
  h3 {
    margin: 0;
  }
`;

const MainContent = styled.div`
  margin-top: 1.3rem;
`;

interface WrapperProps {
  background?: 'primary' | 'secondary';
}

const Wrapper = styled.div<WrapperProps>`
  position: relative;
  padding: ${SECTION_PADDING_REM}rem 0 0;
  background: ${({ background, theme }) => background && background == 'primary' ? theme.primary.palette.backgroundColor : '#fff'};
`;

interface InnerWrapperProps { }

// const InnerWrapper = styled.div<InnerWrapperProps>`
//   position: relative;
//   display: flex;
//   flex-grow: 1;
// `;

const Description = styled.p`
  font-size: 17px;
  letter-spacing: 0.1px;
  margin: 2rem 0 3rem;
`;

export default function Section({
  children,
  isCentered = false,
  hasBorder = true,
  gutterContent,
  description,
  background,
  width = 'regular'
}: Props) {
  return (
    <Wrapper background={background}>
      <Container width={width}>
        {gutterContent && (
          <Column span={3}>
            <GutterContent>
              {gutterContent}
            </GutterContent>
          </Column>
        )}

        <Column span={gutterContent ? 9 : 12}>
          <MainContent>
            <Box
              border={hasBorder ? ["top"] : []}
              padding={{ top: 0, bottom: 3 }}>
              {description && (
                <Description>{description}</Description>
              )}
              {children}
            </Box>
          </MainContent>
        </Column>
      </Container>
    </Wrapper>
  );
}