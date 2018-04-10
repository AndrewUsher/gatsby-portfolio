import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <main className="banner">
    <div className="hero-box">
      <h2>I am Andrew Usher.</h2>
      <h3>I'm a front-end developer focused on crafting clean, friendly, and beautiful user experiences.</h3>
    </div>
    <div className="social-icons-container">
      <h3>Where to find me</h3>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/andrew-usher-125332120/" className="linkedin" target="_blank">
          Linkedin
        </a>
        <a href="https://github.com/AndrewUsher" className="github" target="_blank">
          Github
        </a>
        <a href="http://andrewusher.co/blog" className="blog" target="_blank">
          Blog
        </a>
        <a href="https://instagram.com/AndrewUsher" className="instagram" target="_blank">
          Instagram
        </a>
        <a href="https://codepen.io/uncledrew35/" className="codepen" target="_blank">
          Codepen
        </a>
      </div>
    </div>
  </main>
)

export default IndexPage
