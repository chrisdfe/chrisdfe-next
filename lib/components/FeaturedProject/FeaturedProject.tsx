import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from 'lib/data/projects';

import Box from '../Box';
import Section from 'lib/components/Section';

import bannerImage from '../../../public/images/design/logo-only.png';

const Wrapper = styled.div`
  text-align: left;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
`;

interface Props { }


export default function FeaturedProject() {
  return (
    <Section
      gutterContent={<h3>01. Featured Project</h3>}
      hasBorder={false}
      description="blah blah blah Valerie Madison Fine Jewelry"
    >

      <Image src={bannerImage} />

    </Section >
  );
}