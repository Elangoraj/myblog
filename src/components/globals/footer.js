import React from "react"
import {
  // FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          twitterHandle
          linkedin
          github
          siteUrl
        }
      }
    }
  `)
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <div className={footerStyles.ftTop}>
          <div className={footerStyles.openSource}>
            <ul>
              <li>
                <a href="/">Home</a>{" "}
              </li>
              <li>
                <a href="/blog">Blog</a>{" "}
              </li>
            </ul>
          </div>
          <div className={footerStyles.support}>
            <h3>Mail me</h3>
            <p>
              <FaEnvelope />{" "}
              <a href="mailto:malikarif13@gmail.com">malikarif13@gmail.com</a>
            </p>
          </div>
        </div>
        <div className={footerStyles.ftBottom}>
          <p className={footerStyles.copy}>
            {data.site.siteMetadata.author} &copy;{" "}
            {new Date().getFullYear().toString()}
          </p>
          <div className={footerStyles.social}>
            <ul className={footerStyles.socialList}>
              <li className={footerStyles.socialItem}>
                <a
                  href={`https://twitter.com/${data.site.siteMetadata.twitterHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>

              <li className={footerStyles.socialItem}>
                <a
                  href={`https://www.linkedin.com/in/${data.site.siteMetadata.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className={footerStyles.socialItem}>
                <a
                  href={`https://github.com/${data.site.siteMetadata.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// import { FaFacebookF } from "react-icons/fa";
// FaFacebookF   FaFacebookSquare    FaFacebook
// FaGithub FaGithubSquare
// FaGooglePlusG FaGooglePlusSquare
// FaLinkedinIn FaLinkedin
// FaPinterestP  FaPinterestSquare
// FaTwitter   FaTwitterSquare
// <h3> Lets go for a <FaFacebookF />? </h3>
