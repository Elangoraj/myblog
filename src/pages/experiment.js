import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Menu from "../components/menu"

const ExperimentPage = ({ data }) => (
  <div className="container">
    <div className="sidebar">
      <Menu />
    </div>
    <section className="blog">
      <h3> Experiments </h3>
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
    </section>
  </div>
)

export const pageQuery = graphql`
  query ExperimentPostIndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: ["Nature"] } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            author
            desc
            category
          }
          excerpt
        }
      }
    }
  }
`

export default ExperimentPage
