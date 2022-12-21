import type { NextPage } from 'next';
import styled, { createGlobalStyle } from 'styled-components';

import Page from 'lib/components/Page';
import HeroIntro from 'lib/components/HeroIntro';
import FeaturedProject from 'lib/components/FeaturedProject';
import ProjectList from 'lib/components/ProjectList';
import ArtworkList from 'lib/components/ArtworkList';

const VertialLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;

  &:after {
    content: "";
    width: 1px;
    height: 200px;
    background: ${({ theme }) => theme.palette.borderColor};
  }
`;

const Home: NextPage = () => {
  return (
    <Page>
      <HeroIntro />
      <FeaturedProject />
      <ProjectList />
      <ArtworkList />
    </Page>
  );
};

export default Home;
