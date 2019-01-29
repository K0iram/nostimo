import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import linkStyles from './linkStyles.module.css'

const Header = ({ siteTitle }) => {
  return (
  <div style={{marginBottom: `1.45rem`}}>
    <div className={linkStyles.navigation}>
      <div className={`${linkStyles.navLinks} ${linkStyles.linksLeft}`}>
        <Link to="/" className={linkStyles.links}>
          Home
        </Link>
        <Link to="/menu/" className={linkStyles.links}>
          Menu
        </Link>
      </div>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={linkStyles.siteTitle}>
          {siteTitle}
        </Link>
      </h1>
      <div className={`${linkStyles.navLinks} ${linkStyles.linksRight}`}>
        <Link to="/catering/" className={linkStyles.links}>
          Catering
        </Link>
        <Link to="/location/" className={linkStyles.links}>
          Find Us
        </Link>
      </div>
    </div>
  </div>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
