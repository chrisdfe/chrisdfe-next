import styled from 'styled-components';
import Link from 'next/link';
import { projects } from 'lib/data/projects';

import { Container, Column } from '../Grid';
import Box from '../Box';
import HomepageSection from '../HomepageSection';
import ProjectPageSection from '../ProjectPageSection';

const Wrapper = styled.div`
  text-align: left;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
`;

interface Props {
  title: string;
}

export default function ProjectList({ title }: Props) {
  return (
    <div>
      <h2>{title}</h2>

      {projects.map((project, index) => (
        <ProjectPageSection key={index} gutterContent={<div>test</div>}>
          <Box key={project.name} margin={{ bottom: index < projects.length - 1 ? 3 : 0 }}>
            <Wrapper>
              <Title>
                <Link href={`projects/${project.slug}`}>{project.name}</Link>
              </Title>

              <Description>{project.description}</Description>
            </Wrapper>
          </Box>
        </ProjectPageSection>
      ))}

    </div >
  );
}