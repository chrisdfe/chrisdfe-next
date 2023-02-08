import { Container, Column } from '../Grid';
import { projects } from '../../data/projects';

import ProjectListItem from './ProjectListItem';

export default function Projects() {
  return (
    <div>
      <Container>
        {projects.map((project) => (
          <Column span={4} key={project.name}>
            <ProjectListItem project={project} />
          </Column>
        ))}
      </Container>
    </div>
  );
}