import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { listItemAnimation } from '../utils/animations'

const Logo = styled.h1`
  color: #fff;
  font-size: 2rem;
  padding-top: 6rem;
`

const Intro = styled.h2`
  color: #fff;
  font-size: 5rem;
  line-height: 2.2;
`

const Highlight = styled.em`
  position: relative;
  font-style: normal;
  z-index: 5;

  &::before {
    content: '';
    position: absolute;
    top: -1rem;
    right: -0.5rem;
    bottom: -1rem;
    left: -0.5rem;
    background-image: linear-gradient(110.9deg, rgba(159, 131, 216, 1) 2.6%, rgba(27, 245, 241, 1) 100.2%);
    transform-origin: left center;
  }
`

const HighlightInner = styled.span`
  position: relative;
`

const Summary = styled.p`
  color: #fff;
  font-size: 2.5rem;
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 20vh;
`

const HomeLinks = styled.nav`
  list-style: none;

  li {
    font-size: 2.4rem;
    margin-bottom: 2.5rem;

    span {
      position: relative;
      top: 5px;
    }

    a {
      color: #fff;
      cursor: pointer;
      padding-bottom: 0.5rem;
      position: relative;

      &:hover::after {
        animation: ${listItemAnimation} 600ms ease-in-out;
      }

      &:after {
        content: '';
        position: absolute;
        display: block;
        bottom: -4px;
        left: 0.5rem;
        width: 100%;
        height: 3px;
        background: linear-gradient(110.9deg, rgba(159, 131, 216, 1) 2.6%, rgba(27, 245, 241, 1) 100.2%);
      }
    }
  }
`
const IndexPage = () => (
  <Layout>
    <Logo>andrew usher.</Logo>
    <Intro>
      <Highlight>
        <HighlightInner>Web Developer</HighlightInner>
      </Highlight>{' '}
      and <br />
      <Highlight>
        <HighlightInner>Biker</HighlightInner>
      </Highlight>{' '}
      from Memphis
    </Intro>
    <Summary>
      Hi there! My name is Andrew Usher. I design and develop websites with bold typography, subtle gradients and modern
      technology. I am a stickler for details, dedicated to basketball, biking, and music.
    </Summary>
    <HomeLinks>
      <li>
        <span>🤝</span> <a>Get In Touch</a>
      </li>
      <li>
        <span>💻</span> <a>View My Projects</a>
      </li>
      <li>
        <span>🎨</span> <a>Explore My Designs</a>
      </li>
      <li>
        <span>👇</span> <a>What I Work On</a>
      </li>
    </HomeLinks>
  </Layout>
)

export default IndexPage
