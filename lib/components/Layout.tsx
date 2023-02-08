import { ReactNode } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import BaseStyles from 'lib/globalStyles/BaseStyles';
import UtilityStyles from 'lib/globalStyles/UtilityStyles';
import AnimationKeyframeStyles from 'lib/globalStyles/AnimationKeyframeStyles';

import theme from 'lib/siteTheme';

interface Props {
  children: ReactNode;
}

const Main = styled.main`
padding: 0 3rem;
`;

export default function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles />
      <UtilityStyles />
      <AnimationKeyframeStyles />

      <Main>
        {children}
      </Main>
    </ThemeProvider>
  );
}