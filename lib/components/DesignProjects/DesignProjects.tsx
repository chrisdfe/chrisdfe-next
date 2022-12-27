import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { designProject } from 'lib/data/projects';

import Box from '../Box';
import Section from 'lib/components/Section';
import HorizontalLinks from 'lib/components/HorizontalLinks';
import { Container, Column } from 'lib/components/Grid';

import bannerImage from '../../../public/images/design/vm-logo-sticker-circle.png';

const Wrapper = styled.div`
  text-align: left;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 18px;
`;

const BannerImageWrapper = styled.div`
  /* padding: 4rem 0; */
`;

interface Props { }


export default function DesignProjects() {
  return (
    <Wrapper id="design">
      <Section
        gutterContent={<h3>01. Design</h3>}
      >
        <Box padding={{ top: 5 }}>
          <Container>
            <Column span={9}>
              <Title>{designProject.name}</Title>

              <Description>{designProject.description}</Description>

              <HorizontalLinks links={[
                {
                  title: "read on",
                  href: `${designProject.slug}`,
                  openInNewTab: false
                }
              ]} />
            </Column>

            <Column span={3}>
              <BannerImageWrapper>
                <Image
                  alt="Valerie Madison Fine Jewelry"
                  src={bannerImage}
                />
              </BannerImageWrapper>
            </Column>
          </Container>
        </Box>

      </Section>
    </Wrapper>
  );
}