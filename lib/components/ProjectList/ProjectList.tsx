import styled from 'styled-components';
import Link from 'next/link';
import { projects } from 'lib/data/projects';
import type { Project } from 'lib/types/Project';

import Box from 'lib/components/Box';
import Section from 'lib/components/Section';
import { Container, Column } from 'lib/components/Grid';
import HorizontalLinks from 'lib/components/HorizontalLinks';

const Wrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 1rem;
  /* background-color: ${({ theme }) => theme.palette.backgroundColor}; */
  padding: 1rem 1.4rem;
  box-sizing: border-box;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 15px;
  margin-bottom: 3rem;
`;

const LinksWrapper = styled.div`
  margin-top: auto;
`;

interface ProjectListViewProps {
  project: Project;
}

const ProjectListView = ({ project }: ProjectListViewProps) => (
  <Wrapper>
    <Title>
      {/* <Link href={`projects/${project.slug}`}> */}
      {project.name}
      {/* </Link> */}
    </Title>

    <Description>{project.description}</Description>

    {project.links && (
      <LinksWrapper>
        <HorizontalLinks links={project.links} />
      </LinksWrapper>
    )}
  </Wrapper>
);

const isGameProject = (project: Project) => project.name.includes("Game");

export default function ProjectList() {
  const gameProject = projects.find(isGameProject);
  const filteredProjects = projects.filter(project => !isGameProject(project));

  return (
    <Section
      gutterContent={<h3>03. Front End Development</h3>}
    >
      <Box padding={{ top: 2 }}>
        <Container>
          {filteredProjects.map((project, index) => (
            <Column
              key={index}
              span={12}>
              <ProjectListView project={project} />
            </Column>
          ))}
        </Container>
      </Box>

    </Section>
  );
}