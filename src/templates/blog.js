import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { slugify } from "../util/utilityFunction"
// import Img from "gatsby-image"
import Sidebar from "../components/sidebar/sidebar"
import SocialShare from "../components/BlogPage/socialShare"
// import avatar from "../images/ibas_avartar.png"
//import { BLOCKS } from "@contentful/rich-text-types"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import blogPageStyles from "./blogpage.module.scss"
import SEO from "../components/seo"
import { FaPencilAlt } from "react-icons/fa"

import PostSeriesLink from "../components/globals/custom_components/PostSeriesLink"
import TableOfContents from "../components/globals/custom_components/TableOfContents"
import ScrollTop from "../components/BlogPage/scrollTop"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        twitterHandle
      }
    }
    mdx(fields: { slug: { name: { eq: $slug } } }) {
      id
      timeToRead
      excerpt(pruneLength: 300)
      tableOfContents
      frontmatter {
        title
        description
        datePublished(formatString: "MMMM Do, YYYY")
        dateUpdated(formatString: "MMMM Do, YYYY")
        tags
        featured {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

// const shortcodes = {
//   PostSeriesLink,
//   TableOfContents: ({ data }) => (
//     <TableOfContents items={data.mdx.tableOfContents}>
//       Table of Contents
//     </TableOfContents>
//   ),
// }

const Blog = ({ data, pageContext }) => {
  const { datePublished, dateUpdated } = data.mdx.frontmatter
  const image = data.mdx.frontmatter.featured
    ? data.mdx.frontmatter.featured.childImageSharp.fluid
    : null

  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        excerpt={data.mdx.excerpt}
        description={data.mdx.frontmatter.description}
        image={image}
        isBlogPost
      />
      <div
        id="primary"
        className={`${blogPageStyles.container} ${blogPageStyles.wrap}`}
      >
        <main className={blogPageStyles.siteMain} role="main">
          <article className={blogPageStyles.singlePost}>
            <header className={blogPageStyles.entryHeader}>
              <h1 className={blogPageStyles.title}>
                {data.mdx.frontmatter.title}
              </h1>
              <div className={blogPageStyles.postMeta}>
                {datePublished === dateUpdated ? " Posted " : "Updated"} on{" "}
                <span>{dateUpdated}</span>
                <span className={blogPageStyles.divider}></span>
                <span>{data.mdx.timeToRead} min read</span>
                <span className={blogPageStyles.divider}></span>
                <a
                  className={blogPageStyles.editPost}
                  href={
                    "https://github.com/ganesh0211/myblog/tree/master/src/" +
                    pageContext.postPath
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edit this post <FaPencilAlt />
                </a>
              </div>
            </header>

            <div className={blogPageStyles.entryContent}>
              {/* <Img
                className={blogPageStyles.featuredImage}
                fluid={data.mdx.frontmatter.featured.childImageSharp.fluid}
                alt={data.mdx.frontmatter.title}
              /> */}
              {/* {renderAst(data.mdx.htmlAst)} */}

              {/* {documentToReactComponents(
                data.contentfulBlogPostContent.body.json,
                options
              )} */}
              <MDXProvider
                components={{
                  PostSeriesLink,
                  TableOfContents: () => (
                    <TableOfContents
                      items={data.mdx.tableOfContents.items}
                      slug={pageContext.slug}
                    ></TableOfContents>
                  )
                }}
              >
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXProvider>
            </div>
          </article>

          <div className={blogPageStyles.bottomSocialShare}>
            <SocialShare
              slug={pageContext.slug}
              title={data.mdx.frontmatter.title}
              twitterHandle={data.site.siteMetadata.twitterHandle}
              siteUrl={data.site.siteMetadata.siteUrl}
              heading="Share this"
            />
          </div>

          <div className={blogPageStyles.tagLinks}>
            <ul className={blogPageStyles.postTags}>
              {data.mdx.frontmatter.tags.map((tag, index) => (
                <li key={index}>
                  <Link to={`/tags/${slugify(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <aside className={blogPageStyles.secondaryArea}>
          <Sidebar
            relatedArticles={pageContext.relatedArticles}
            twitterHandle={data.site.siteMetadata.twitterHandle}
            slug={pageContext.slug}
          />
        </aside>
      </div>

      <div className={blogPageStyles.sideSocialShare}>
        <SocialShare
          slug={pageContext.slug}
          title={data.mdx.frontmatter.title}
          twitterHandle={data.site.siteMetadata.twitterHandle}
          siteUrl={data.site.siteMetadata.siteUrl}
          heading="share"
        />
      </div>

      <ScrollTop />
    </Layout>
  )
}

export default Blog
