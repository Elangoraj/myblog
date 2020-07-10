import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <h3> Latest Posts </h3>
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
        <p style={{ fontSize: "1rem", marginBottom: "0", marginTop: "0.7rem" }}>
          {post.node.frontmatter.desc}
        </p>
        <br></br>
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br></br>
        <hr></hr>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
          excerpt
        }
      }
    }
  }
`
export default BlogPage
