import styled from 'styled-components';
import Image from 'next/image';
import { artworks } from 'lib/data/artworks';

import Box from '../Box';
import Section from 'lib/components/Section/Section';
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

export default function IllustrationProjects() {
  return (
    <Wrapper id="#illustration">
      <Section
        gutterContent={<h3>02. Illustration</h3>}
        description={"A collection of art that I have made blah blah blah."}
      >

        <Container>
          {artworks.map((artwork) => (
            <Column span={4} key={artwork.name}>
              <ArtWrapper>
                <Image
                  src={`/images/art/${artwork.src}`}
                  alt={artwork.name}
                  layout="responsive"
                  width={400}
                  height={400}
                />
              </ArtWrapper>
            </Column>
          ))}
        </Container>

        <Container>
          <Column span={12}>
            <Box margin={{ top: 3 }}>
              <p>See more at</p>

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

      </Section>
    </Wrapper>
  );
}