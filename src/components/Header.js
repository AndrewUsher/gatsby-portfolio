import React, { Component } from 'react'
import MenuIcon from 'react-icons/lib/md/menu'
import CloseIcon from 'react-icons/lib/md/close'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navIsOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav = () => {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    })
  }
  render () {
    const { title } = this.props
    const { navIsOpen } = this.state
    return (
      <header>
        <h1>{title}</h1>
        <nav className={navIsOpen ? 'open' : ''}>
          <li>
            <Link to="/" onClick={this.toggleNav} onTouchStart={this.toggleNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={this.toggleNav} onTouchStart={this.toggleNav}>
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={this.toggleNav} onTouchStart={this.toggleNav}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={this.toggleNav} onTouchStart={this.toggleNav}>
              Contact
            </Link>
          </li>
        </nav>
        <a className="mobile-nav" onClick={this.toggleNav} onTouchStart={this.toggleNav}>
          {navIsOpen ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
        </a>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
