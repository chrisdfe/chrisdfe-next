import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --content-padding-large: 5rem;
    --content-padding: 1.8rem;
    --background-color: #ffd8cc;
    --primary-color: #ca3b47;
  }

  body {
    position: relative;
    background-color: var(--background-color);
    color: var(--primary-color);
    font-family: "PT Mono";
  }

  h1,
  h3 {
    font-weight: 900;
    line-height: 1.4;
    letter-spacing: 0.04em;
    line-height: 1.8em;
  }

  h1 {
    font-size: 1.8rem;
    letter-spacing: 0.02em;
    padding: 3.8rem 0;
    margin: 0;
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 0.06em;
  }

  h3 {
    font-size: 1rem;
    letter-spacing: 0.06em;
  }

  a {
    position: relative;
    color: var(--primary-color);
    text-decoration: none;
    padding-bottom: 0.35rem;
  }

  a:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    transition: all 0.2s;
    border-bottom: 1px solid var(--primary-color);
  }

  a:hover:after {
    /*border-bottom-color: #fff;*/
    transform: translateY(-3px);
  }

  .content {
    position: relative;
    padding: 0 2.1rem;
    margin: 5rem 3rem;
    max-width: 700px;
    border-left: 1px solid var(--primary-color);
  }

  .content-inner {
    /* padding: var(--content-padding) 0; */
  }

  .social-links {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }

  .social-links a {
    letter-spacing: 0.05em;
    text-decoration: none;
    font-weight: 400;
  }

  .social-links li {
    display: inline-block;
    list-style-type: none;
    margin-right: 1.4rem;
    padding-bottom: 1rem;
  }

  .social-links li:after {
    margin-right: 0;
  }

  .section-chrisdfe {
    padding-bottom: 1.8rem;
  }

  .section-sweaterparrot {
    padding: 1.8rem 0;
  }

  .section-chrisdfe {
    border-bottom: 1px solid var(--primary-color);
  }

  .section-sweaterparrot {
    /* border-top: 1px solid var(--primary-color); */
    border-bottom: 1px solid var(--primary-color);
  }

  .section-sweaterparrot p {
    margin: 0;
  }


  .section-featured-projects h3 {
    margin-bottom: 2rem;
  }

  .section-featured-projects h2 {
    margin-bottom: 0.6rem;
  }

  .featured-project {
    padding: 1rem 0;
    border-bottom: 1px solid var(--primary-color);
  }

  .featured-project h3 {
    margin: 0 0 0.6rem;
  }

  .featured-project:last-child {
    border-bottom: 0;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 1.3rem;
      padding-top: 0;
      margin-bottom: 3rem;
    }

    h3 {
      font-size: 1rem;
    }

    .content {
      border-left-width: 0;
      padding: 0 1.5rem;
      margin: 1rem;
    }

    .social-links li {
      margin-right: 1rem;
    }

    .section-sweater-parrot,
    .section-chrisdfe {
      padding: 1.5rem 0;
    }
  }
`

export default GlobalStyles;