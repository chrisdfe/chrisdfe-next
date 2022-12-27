import styled from 'styled-components';
import type { Project } from 'lib/types/Project';

import { Container, Column } from 'lib/components/Grid';
import HorizontalLinks from 'lib/components/HorizontalLinks';

interface Props {
  project: Project;
}

const Wrapper = styled.div`
  text-align: left;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 15px;
  margin-bottom: 3rem;
`;

const LinksWrapper = styled.div`
  margin-top: auto;
`;

const DevelopmentProjectsView = ({ project }: Props) => (
  <Wrapper>
    <Container>
      <Column span={9}>
        <Title>
          {project.name}
        </Title>

        <Description>{project.description}</Description>
      </Column>

      <Column span={3}>
        {project.links && (
          <LinksWrapper>
            <HorizontalLinks links={project.links} />
          </LinksWrapper>
        )}
      </Column>
    </Container>
  </Wrapper>
);

export default DevelopmentProjectsView;
