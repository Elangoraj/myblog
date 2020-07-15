import React from "react";
import linkedin from "../images/linkedin.png";
import git from "../images/git.png";
import mail from "../images/mail.png";
import Link from "gatsby-link";

const Menu = () => (
  <>
    <ul
      style={{
        listStyle: `None`,
        color: `white`
      }}
    >
      <h4>Aarif Malik</h4>
      <p style={{ marginTop: `-1.3rem`, color: `rgba(255,255,255,0.5)` }}>
        Software Developer
      </p>
    </ul>
    <div className="menu-items">
      <Link
        to="/blog"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        Blog
      </Link>

      <Link
        to="/about"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        About
      </Link>

      <Link
        to="/experiment"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        Experiments
      </Link>

      <Link
        to="/quant"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        Quant Finance
      </Link>
    </div>
    <div class="go-social" style={{ color: `white` }}>
      <div className="social">
        <a href="../images/icons8-linkedin-100.png" target="_">
          <img
            alt="Linkedin"
            src={linkedin}
            style={{ height: `1rem`, width: `1rem` }}
          />
        </a>

        <a href="../images/icons8-linkedin-100.png" target="_">
          <img
            alt="GitHub"
            src={git}
            style={{ height: `1rem`, width: `1rem` }}
          />
        </a>

        <img alt="Email" src={mail} style={{ height: `1rem`, width: `1rem` }} />
      </div>{" "}
      <footer>
        ©{new Date().getFullYear()} {` `}{" "}
        <a href="https://www.linkedin.com/in/maarif1430/" target="_">
          {" "}
          Aarif Malik{" "}
        </a>{" "}
      </footer>
    </div>{" "}
  </>
);

export default Menu;
