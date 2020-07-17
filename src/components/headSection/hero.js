import React from "react"
import { Link } from "react-scroll"
import heroStyles from "./headSection.module.scss"
import { FaChevronDown } from "react-icons/fa"

const Hero = () => {
  return (
    <iframe
      width="100%"
      height="750"
      src="https://aarif1430.github.io/animate_css_background/index.html"
    >
      <Link
        //activeClass="active"
        to="blog"
        smooth={true}
        offset={-64}
        duration={500}
        className={heroStyles.arrow}
      >
        <FaChevronDown />
      </Link>
    </iframe>
  )
}

export default Hero
