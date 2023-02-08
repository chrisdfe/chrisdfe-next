import styled from "styled-components";
import Image from 'next/image';

import { Container, Column } from '../Grid';

const VERTICAL_LINE_HEIGHT = "100px";

const SOCIAL_LINKS = [
  {
    title: "github",
    href: "https://github.com/chrisdfe",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/chrisdfe/",
  },
  {
    title: "mail",
    href: "#",
    openInNewTab: false
  }
];

const Wrapper = styled.div`
  padding: 10rem 0;
`;

const VerticalLine = styled.div`
  height: ${VERTICAL_LINE_HEIGHT};

  &:after {
    content: "";
    display: block;
    animation: 0.8s ease-in-out 0s 1 vertical-line-appear;
    animation-delay: 1s;
    animation-fill-mode: both;
    width: 2px;
    background: ${({ theme }) => theme.primary.palette.borderColor};
    height: ${VERTICAL_LINE_HEIGHT};
    margin: 0 auto;
  }
`;

const Inner = styled.div`
border-bottom: 1px solid ${props => props.theme.primary.palette.borderColor};
`;

export default function HeroIntro() {
  return (
    <Wrapper>
      <Container>
        <Column span={6}>
          <h1>
            Christopher Ferris is a Designer, Illustrator, & Front End Developer that lives in Seattle, WA.
          </h1>
        </Column>
        <Column span={6}>
          <Image
            src="/images/art/281.png"
            alt="waterfall"
            width={500}
            height={500}
          ></Image>
        </Column>
      </Container>
    </Wrapper>
  );
}