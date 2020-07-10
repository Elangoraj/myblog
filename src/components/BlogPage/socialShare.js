import React from "react"
import shareStyles from "../../templates/blogpage.module.scss"
import ShareItems from "./shareItems"

class SocialShare extends React.Component {
  state = {
    showSocialShare: false,
  }

  onScroll = () => {
    if (window.pageYOffset > 200) {
      this.setState({
        showSocialShare: true,
      })
    } else {
      this.setState({
        showSocialShare: false,
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll)
  }

  render() {
    const { slug, title, heading, twitterHandle, siteUrl } = this.props

    return (
      <>
        <ShareItems
          heading={heading}
          slug={slug}
          title={title}
          twitterHandle={twitterHandle}
          siteUrl={siteUrl}
          customClass={
            this.state.showSocialShare
              ? `${shareStyles.shareInView}`
              : `${shareStyles.shareNotInView}`
          }
        />
        {/* )} */}
      </>
    )
  }
}

export default SocialShare
