import styled from 'styled-components';
import Link from 'next/link';
import { projects } from 'lib/data/projects';
import type { Project } from 'lib/types/Project';

import Box from 'lib/components/Box';
import Section from 'lib/components/Section/Section';
import { Container, Column } from 'lib/components/Grid';
import HorizontalLinks from 'lib/components/HorizontalLinks';

import DevelopmentProject from './DevelopmentProject';

const isGameProject = (project: Project) => project.name.includes("Game");

export default function DevelopmentProjects() {
  const filteredProjects = projects.filter(project => !isGameProject(project));

  return (
    <div id="developement">
      <Section
        gutterContent={<h3>03. Front End Development</h3>}
      >
        <Box padding={{ top: 2 }}>
          <Container>
            {filteredProjects.map((project, index) => (
              <Column
                key={index}
                span={12}>
                <DevelopmentProject project={project} />
              </Column>
            ))}
          </Container>
        </Box>

      </Section>
    </div>
  );
}