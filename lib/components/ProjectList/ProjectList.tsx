import styled from 'styled-components';
import Link from 'next/link';
import { projects } from 'lib/data/projects';

import { Container, Column } from '../Grid';
import Box from '../Box';

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
`;

export default function ProjectList() {
  return (
    <div>

      {projects.map((project, index) => (
        <Box key={project.name} margin={{ bottom: index < projects.length - 1 ? 3 : 0 }}>
          <Title>
            <Link href={`projects/${project.slug}`}>{project.name}</Link>
          </Title>
          <Description>{project.description}</Description>
        </Box>
      ))}

    </div>
  );
}