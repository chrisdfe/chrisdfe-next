import type { NextPage } from 'next';
import styled, { createGlobalStyle } from 'styled-components';

import { Container, Column } from 'lib/components/Grid';

import HomepageSection from 'lib/components/HomepageSection';
import HorizontalLinks from 'lib/components/HorizontalLinks';
import Page from 'lib/components/Page';
import Box from 'lib/components/Box';
import ProjectList from 'lib/components/ProjectList';

const SOCIAL_LINKS = [
  {
    title: "github",
    href: "https://github.com/chrisdfe",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/chrisdfe/",
  },
  {
    title: "mail",
    href: "#",
    openInNewTab: false
  }
];

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
      <Container>
        <Column>

          <HomepageSection hasBorder={false}>
            <Box margin={{ bottom: 2 }}>
              <h1 className="h2">
                Christopher Ferris is a Designer & Front End Developer that lives and works in
                Seattle, WA.
              </h1>
            </Box>

            {/* <VertialLine /> */}
          </HomepageSection>

          <Box margin={{ top: 0, bottom: 3 }}>
            <HorizontalLinks links={SOCIAL_LINKS} />
          </Box>

          <HomepageSection hasBorder={false}>
            <ProjectList title="Projects" />
          </HomepageSection>

        </Column>
      </Container>
    </Page>
  );
};

export default Home;
