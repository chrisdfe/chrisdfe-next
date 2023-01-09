import theme from 'lib/siteTheme';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import Box from '../Box';
import { Container, Column } from "../Grid";

import Wrapper from './Wrapper';
import { BackgroundProp } from './types';

interface Props {
  children: ReactNode,
  background?: BackgroundProp;
  isCentered?: boolean;
  hasBorder?: boolean;
  gutterContent?: ReactNode;
  description?: ReactNode;
  width?: 'regular' | 'narrow';
}

interface GutterContentProps {
  height?: string;
}

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