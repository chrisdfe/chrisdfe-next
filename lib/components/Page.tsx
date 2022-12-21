import { ReactNode } from 'react';
import Layout from './Layout';
import FadeIn from './Animation/FadeIn';

interface Props {
  children: ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <Layout>
      <FadeIn>
        {children}
      </FadeIn>
    </Layout>
  );
}