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

const OPEN_IN_NEW_TAB_PROPS = {
  target: '_blank',
  rel: "noreferrer"
};

const HorizontalLinksWrapper = styled.div`

  ul {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }

  a {
    font-weight: 400;
    padding-bottom: 3px;
  }

  li {
    display: inline-block;
    list-style-type: none;
    margin-right: 1.8rem;
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
        {links.map(links => (
          <li key={links.title}>
            <a
              href={links.href}
              {...(links.openInNewTab !== false ? OPEN_IN_NEW_TAB_PROPS : {})}
            >
              {links.title}
            </a>
          </li>
        ))}
      </ul>
    </HorizontalLinksWrapper >
  );
}