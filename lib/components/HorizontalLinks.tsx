import { ReactNode } from 'react';
import styled from 'styled-components';

type HorizontalLink = {
  title: string,
  href: string,
  openInNewTab?: boolean;
};

interface Props {
  links: HorizontalLink[];
}

const HorizontalLinksWrapper = styled.div`
  ul {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }

  a {
    /* letter-spacing: 0.05em; */
    font-weight: 400;
    padding-bottom: 3px;
  }

  li {
    display: inline-block;
    list-style-type: none;
    margin-right: 1.4rem;
    padding-bottom: 1rem;

    &:after {
      margin-right: 0;
    }
  }
`;

export default function HorizontalLinks({ links }: Props) {
  return (
    <HorizontalLinksWrapper>
      <ul>
        {links.map(socialLink => (
          <li key={socialLink.title}>
            <a
              href={socialLink.href}
              {...(socialLink.openInNewTab !== false ? {
                target: '_blank',
                rel: "noreferrer"
              } : {})}
            >
              {socialLink.title}
            </a>
          </li>
        ))}
      </ul>
    </HorizontalLinksWrapper >
  );
}