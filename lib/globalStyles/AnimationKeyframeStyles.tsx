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

  @keyframes vertical-line-appear {
    from {
      height: 0%;
    }
    
    to {
      height: 100%;
    }
  }
`;

export default AnimationKeyframeStyles;