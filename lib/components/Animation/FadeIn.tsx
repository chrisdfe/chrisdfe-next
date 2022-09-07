import { ReactNode } from 'react';
import styled from 'styled-components';

type FadeDirection = 'top' | 'bottom' | 'left';

interface Props {
  direction?: FadeDirection,
  children: ReactNode;
}

const Wrapper = styled.div`
  animation: fade-in 1s ease-in-out;
`;

export default function FadeIn({ direction, children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}