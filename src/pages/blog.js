import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import Image from "gatsby-image"
import styled from "styled-components"

const BannerImage = styled(Image)`
  width: 20rem;
  margin-top: 20px;
  height: 15rem;
`

const BlogPage = ({ data }) => (
  <Layout>
    <div className="experiment-grid">
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>
            <Link className="postTitle" to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </h3>
          <small style={{ fontSize: "1rem", fontStyle: "italic" }}>
            {" "}
            {post.node.frontmatter.date}
            {"  "}
            <span style={{ color: "#DAA520", fontWeight: "Bold" }}>
              {post.node.frontmatter.category}
            </span>
          </small>
          <Link to={post.node.frontmatter.path}>
            <BannerImage
              fluid={post.node.frontmatter.featured.childImageSharp.fluid}
              alt="Banner Image"
            />
          </Link>
          <p
            style={{ fontSize: "1rem", marginBottom: "0", marginTop: "0.7rem" }}
          >
            {post.node.frontmatter.desc}
          </p>
          <br></br>
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br></br>
          <hr></hr>
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          category: { in: ["Machine Learning", "Python Programming"] }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            author
            category
            desc
            featured {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
export default BlogPage
