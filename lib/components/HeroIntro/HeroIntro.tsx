import Section from "lib/components/Section";
import HorizontalLinks from 'lib/components/HorizontalLinks';
import Box from 'lib/components/Box';
import { SECTION_PADDING_REM } from 'lib/components/Section';

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

export default function HeroIntro() {
  return (
    <>
      <Section hasBorder={false} width="narrow">
        <Box margin={{ top: SECTION_PADDING_REM, bottom: 5 }}>
          <h1 className="h2">
            Christopher Ferris is a Designer & Front End Developer that lives in Seattle, WA.
          </h1>
        </Box>

        {/* <VertialLine /> */}

        <Box>
          <HorizontalLinks links={SOCIAL_LINKS} />
        </Box>
      </Section>
    </>
  );
}