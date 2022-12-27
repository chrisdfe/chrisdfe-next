import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { featuredProject } from 'lib/data/projects';

import Box from '../Box';
import Section from 'lib/components/Section';
import HorizontalLinks from 'lib/components/HorizontalLinks';
import { Container, Column } from 'lib/components/Grid';

import bannerImage from '../../../public/images/design/vm-logo-sticker-circle.png';

const Wrapper = styled.div`
  text-align: left;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  margin-top: 0;
`;

const BannerImageWrapper = styled.div`
  /* padding: 4rem 0; */
`;

interface Props { }


export default function FeaturedProject() {
  return (
    <Section
      gutterContent={<h3>01. Design</h3>}
    >
      <Box padding={{ top: 2 }}>
        <Container>
          <Column span={9}>
            <Description>{featuredProject.description}</Description>

            <HorizontalLinks links={[
              {
                title: "read on",
                href: `${featuredProject.slug}`,
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

    </Section >
  );
}