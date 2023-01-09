import styled from "styled-components";
import Section from "lib/components/Section/Section";
import HorizontalLinks from 'lib/components/HorizontalLinks';
import Box from 'lib/components/Box';
import { SECTION_PADDING_REM } from 'lib/components/Section/constants';

import bgImage from 'public/images/art/281.png';

const VERTICAL_LINE_HEIGHT = "300px";

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
  text-align: center;
  background-color: #111e1e;
  background-image: url(${bgImage.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 80vh;
  color: #fff;
  h1, a {
    color: #fff;
  }
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

export default function HeroIntro() {
  return (
    <Wrapper>
      <Section background="transparent" hasBorder={false}>
        <Box
          margin={{ top: SECTION_PADDING_REM, bottom: 0 }} textAlign="center">
          <h1>
            Christopher Ferris is a <a href="#design">Designer</a>, <a href="#illustration">Illustrator</a>, & <a href="#development">Front End Developer</a> that lives in Seattle, WA.
          </h1>
        </Box>

        <VerticalLine />

        {/* <Box>
          <HorizontalLinks links={SOCIAL_LINKS} />
        </Box> */}
      </Section>
    </Wrapper>
  );
}