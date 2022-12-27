import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { artworks } from 'lib/data/artworks';

import Box from '../Box';
import ProjectPageSection from '../ProjectPageSection';
import Section from 'lib/components/Section';
import HorzontalLinks from 'lib/components/HorizontalLinks';
import { Column, Container } from '../Grid';

const Wrapper = styled.div`
  background: #fff;
`;

const ArtWrapper = styled.div`
  text-align: left;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

interface Props { }

export default function ArtworkList() {
  return (
    <Wrapper>
      <Section
        gutterContent={<h3>02. Illustration</h3>}
        description={"A collection of art that I have made blah blah blah."}
      >
        <Container>
          <Column span={12}>
            <Box margin={{ top: 0, bottom: 3 }}>
              <HorzontalLinks links={[
                {
                  title: "instagram",
                  href: "https://www.instagram.com/sweaterparrot/",
                  openInNewTab: true
                },
                {
                  title: "twitter",
                  href: "https://twitter.com/sweaterparrot",
                  openInNewTab: true
                }
              ]} />
            </Box>
          </Column>
        </Container>

        <Container>
          {artworks.map((artwork, index) => (
            <Column span={4} key={artwork.name}>
              <Box margin={{ bottom: 1 }}>
                <ArtWrapper>
                  <Image
                    src={`/images/art/${artwork.src}`}
                    alt={artwork.name}
                    layout="responsive"
                    width={400}
                    height={400}
                  />
                </ArtWrapper>
              </Box>
            </Column>
          ))}

        </Container>

      </Section>
    </Wrapper>
  );
}