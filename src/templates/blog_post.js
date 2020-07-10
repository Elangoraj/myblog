import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SocialShare from "../components/BlogPage/socialShare"
import blogPageStyles from "./blogpage.module.scss"

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark
  let url = post.frontmatter.category

  if (url === "Nature") {
    url = "/experiment"
  } else {
    url = "/"
  }

  return (
    <Layout>
      <div>
        <Link
          to={url}
          style={{
            textDecoration: `none`,
            padding: `1rem`,
          }}
        >
          Go Back
        </Link>
        <hr></hr>
        <h1 style={{ fontWeight: `normal` }}>{post.frontmatter.title}</h1>
        <h2
          style={{
            color: `darkgray`,
            fontWeight: `normal`,
            fontStyle: `italic`,
            fontSize: `1.42671rem`,
          }}
        >
          {post.frontmatter.desc}
        </h2>
        <h5 style={{ fontSize: "1rem", fontStyle: "italic" }}>
          {" "}
          {post.frontmatter.date}
          {"  "}
        </h5>
        <div style={{ display: `flex` }}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
      <div className={blogPageStyles.bottomSocialShare}>
        <SocialShare
          slug={pageContext.slug}
          title={post.frontmatter.title}
          twitterHandle={data.site.siteMetadata.twitterHandle}
          siteUrl={data.site.siteMetadata.siteUrl}
          heading="Share this"
        />
      </div>

      <div className={blogPageStyles.sideSocialShare}>
        <SocialShare
          slug={post.frontmatter.path}
          title={post.frontmatter.title}
          twitterHandle={data.site.siteMetadata.twitterHandle}
          siteUrl={data.site.siteMetadata.siteUrl}
        />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        siteUrl
        twitterHandle
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        desc
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
