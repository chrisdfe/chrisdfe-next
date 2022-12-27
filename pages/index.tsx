import type { NextPage } from 'next';
import styled, { createGlobalStyle } from 'styled-components';

import Page from 'lib/components/Page';
import HeroIntro from 'lib/components/HeroIntro';
import DesignProjects from 'lib/components/DesignProjects';
import DevelopmentProjects from 'lib/components/DevelopmentProjects';
import IllustrationProjects from 'lib/components/IllustrationProjects';

const Home: NextPage = () => {
  return (
    <Page>
      <HeroIntro />
      <DesignProjects />
      <IllustrationProjects />
      <DevelopmentProjects />
    </Page>
  );
};

export default Home;
