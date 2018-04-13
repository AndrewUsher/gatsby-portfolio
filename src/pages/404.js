import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div className="not-found">
    <div className="not-found-box">
      <h2>Sorry...</h2>
      <p>You just found a page that doesn't exist... the sadness...</p>
      <p>The page you're looking for may have been removed, had its name changed, or may be unavailable.</p>
      <p>You might find the page you're looking for down below:</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default NotFoundPage
