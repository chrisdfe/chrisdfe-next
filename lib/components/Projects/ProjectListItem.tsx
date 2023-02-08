import styled from "styled-components";
import { Project } from "lib/types/Project";

interface Props {
  project: Project;
}

const Wrapper = styled.div`
  margin-bottom: 3rem;
  border-top: 1px solid ${props => props.theme.primary.palette.borderColor};
`;

const Title = styled.h3`
  margin: 1rem 0;
`;

export default function ProjectListItem({ project }: Props) {
  return (
    <Wrapper>
      <Title>{project.name}</Title>

      <p>{project.description}</p>

      <p>type: {project.type}</p>

      <div>
        <ul>
          {project.links?.map(link => (
            <li key={link.href}>{link.title}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}