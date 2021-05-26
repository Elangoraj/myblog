import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"
import { FaChevronDown } from "react-icons/fa"

const Hero = () => {
  return (
    <>
      <iframe
        width="100%"
        height="400"
        src="https://ganesh0211.github.io/animate_css_background/index.html"
      ></iframe>
      {/* <Link
        //activeClass="active"
        to="blog"
        //spy={true}
        smooth={true}
        offset={-64}
        duration={500}
        className={heroStyles.arrow}
      >
        <FaChevronDown />
      </Link> */}
    </>
  )
}

export default Hero
