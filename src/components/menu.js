import React from "react"
import linkedin from "../images/linkedin.png"
import git from "../images/git.png"
import mail from "../images/mail.png"
import Link from "gatsby-link"

const Menu = () => (
  <>
    <ul
      style={{
        listStyle: `None`,
        color: `white`,
      }}
    >
      <h4>Aarif Malik</h4>
      <p style={{ marginTop: `-1.3rem`, color: `rgba(255,255,255,0.5)` }}>
        Software Developer
      </p>
    </ul>
    <ul className="menu-items">
      <li>
        <Link
          to="/blog"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/experiment"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Experiments
        </Link>
      </li>
      <li>
        <Link
          to="/quant"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Quant Finance
        </Link>
      </li>
    </ul>
    <ul style={{ color: `white` }}>
      <ul className="social">
        <li>
          <a href="https://www.linkedin.com/in/maarif1430/" target="_">
            <img
              alt="Linkedin"
              src={linkedin}
              style={{ height: `1rem`, width: `1rem` }}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/Aarif1430/" target="_">
            <img
              alt="GitHub"
              src={git}
              style={{ height: `1rem`, width: `1rem` }}
            />
          </a>
        </li>
        <li>
          <img
            alt="Email"
            src={mail}
            style={{ height: `1rem`, width: `1rem` }}
          />
        </li>
      </ul>{" "}
      <footer>
        ©{new Date().getFullYear()} {` `}{" "}
        <a href="https://www.linkedin.com/in/maarif1430/" target="_">
          {" "}
          Aarif Malik{" "}
        </a>{" "}
      </footer>
    </ul>{" "}
  </>
)

export default Menu
