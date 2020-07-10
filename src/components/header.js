import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: `100%`,
      paddingTop: `0.45rem`,
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `space-evenly`,
      background: `black`,
      position: `fixed`,
      width: `100%`,
      zIndex: 100,
      boxShadow: `0 6px 6px 0 rgba(0,0,0,0.23), inset 0 -1px 0 0 #dadce0`,
    }}
  >
    <div>
      <h3 style={{ margin: `0` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* <img src="src/images/dl.png" width="48" height="48" /> */}
          {siteTitle}
        </Link>
      </h3>
    </div>
    <div style={{ display: `flex` }}>
      <h5 className="headerMenu">
        <Link
          to="/blog"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Blog
        </Link>
      </h5>
      <h5 className="headerMenu">
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </h5>
      <h5 className="headerMenu">
        <Link
          to="/experiment"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Experiments
        </Link>
      </h5>
      <h5 className="headerMenu">
        <Link
          to="/quant"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Quant Finance
        </Link>
      </h5>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
