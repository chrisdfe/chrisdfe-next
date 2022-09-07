import { createGlobalStyle } from 'styled-components';

const AnimationKeyframeStyles = createGlobalStyle`
  @keyframes fade-in {
    from {
      opacity: 0;
      translateX: -5rem;
    }
    
    to {
      opacity: 1;
      translateY: 0;
    }
  }
`;

export default AnimationKeyframeStyles;