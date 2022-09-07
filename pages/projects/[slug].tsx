import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps, } from 'next';

import { Container, Column } from 'lib/components/Grid';
import Layout from 'lib/components/Layout';
import HorizontalLinks from 'lib/components/HorizontalLinks';

import { projects as allProjects, getProjectFromSlug } from 'lib/data/projects';

import { Project } from 'lib/types/Project';

import ProjectPageSection, { GutterContentLine } from 'lib/components/ProjectPageSection';

interface Props {
  project: Project;
}

export default function ProjectPage({ project }: Props) {
  return (
    <Layout>
      <Container>
        <Column>
          <ProjectPageSection gutterContent={<Link href="/">back</Link>} />

          <ProjectPageSection
            gutterContent={<GutterContentLine />}
            gutterHeight={"2rem"}
          >
            <h1>
              {project.name}
            </h1>
          </ProjectPageSection>

          <ProjectPageSection>
            <p>
              {project.description}
            </p>
          </ProjectPageSection>

          {project.links && (
            <ProjectPageSection>
              <HorizontalLinks links={project.links} />
            </ProjectPageSection>
          )}

          {project.skills && (
            <ProjectPageSection gutterContent="skills">
              <p>
                {project.skills.join(", ")}
              </p>
            </ProjectPageSection>
          )}

          {project.tools && (
            <ProjectPageSection gutterContent="tools">
              <p>
                {project.tools.join(", ")}
              </p>
            </ProjectPageSection>
          )}

          <ProjectPageSection>
          </ProjectPageSection>

        </Column>
      </Container>
    </Layout>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProjects.map(({ slug }) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  let project = null;

  if (Array.isArray(slug)) {
    project = await getProjectFromSlug(slug[0]);
  } else if (!!slug) {
    project = await getProjectFromSlug(slug);
  }

  const props = {
    project,
  };

  return { props };
};

