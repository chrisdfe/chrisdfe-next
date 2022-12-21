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
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 15px;
`;

interface ProjectListViewProps {
  project: Project;
}

const ProjectListView = ({ project }: ProjectListViewProps) => (
  <Box margin={{ bottom: 5 }}>
    <Wrapper>
      <Title>
        {/* <Link href={`projects/${project.slug}`}> */}
        {project.name}
        {/* </Link> */}
      </Title>

      <Description>{project.description}</Description>

      {project.links && (
        <Box margin={{ top: 2 }}>
          <HorizontalLinks links={project.links} />
        </Box>
      )}
    </Wrapper>
  </Box>
);

const isGameProject = (project: Project) => project.name.includes("Game");

export default function ProjectList() {
  const gameProject = projects.find(isGameProject);
  const filteredProjects = projects.filter(project => !isGameProject(project));

  return (
    <Section
      gutterContent={<h3>02. Personal Projects</h3>}
      hasBorder={false}
      description={"blah blah blah"}
    >

      <Container>
        {filteredProjects.map((project, index) => (
          <Column
            key={index}
            span={4}>
            <ProjectListView project={project} />
          </Column>
        ))}
      </Container>

      {gameProject && (
        <Container>
          <Column span={12}>
            <Box>
              <ProjectListView project={gameProject} />
            </Box>
          </Column>
        </Container>
      )}

    </Section>
  );
}