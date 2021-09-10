import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
    return (
      <Layout pageTitle="My Blog Posts">
         <div className="flex flex-cols justify-between mt-12">{
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
               <h2 className="text-2xl mt-3 text-gray-600">
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p className="text-xl text-gray-300">Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
      </div>
      </Layout>
    )
  }

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`
export default BlogPage