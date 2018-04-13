import React, { Component } from 'react'
import MenuIcon from 'react-icons/lib/md/menu'
import CloseIcon from 'react-icons/lib/md/close'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Header extends Component {
  toggleNav = () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('open')
  }
  render () {
    const { title } = this.props
    return (
      <header>
        <h1>{title}</h1>
        <nav>
          <Link to="/" onClick={this.toggleNav} onTouchStart={this.toggleNav}>
            Home
          </Link>
          <Link to="/about" onClick={this.toggleNav} onTouchStart={this.toggleNav}>
            About
          </Link>
          <Link to="/portfolio" onClick={this.toggleNav} onTouchStart={this.toggleNav}>
            Portfolio
          </Link>
          <Link to="/contact" onClick={this.toggleNav} onTouchStart={this.toggleNav}>
            Contact
          </Link>
        </nav>
        <a className="mobile-nav" onClick={this.toggleNav} onTouchStart={this.toggleNav}>
          <MenuIcon size={30} />
        </a>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
