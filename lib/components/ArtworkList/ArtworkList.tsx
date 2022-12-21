import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { artworks } from 'lib/data/artworks';

import Box from '../Box';
import ProjectPageSection from '../ProjectPageSection';
import Section from 'lib/components/Section';
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
        gutterContent={<h3>03. sweaterparrot</h3>}
        hasBorder={false}
        description={"A collection of art that I have made blah blah blah."}
      >
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