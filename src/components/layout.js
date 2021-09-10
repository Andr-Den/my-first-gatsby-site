import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }`
      )
  return (
    <div className="m-auto max-w-screen-xl">
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className="text-xl text-gray-100 font-bold mt-12">{data.site.siteMetadata.title}</header>
      <nav>
        <ul className="flex pl-0 list-none mt-6">
          <li className="pr-8">
            <Link to="/" className="text-gray-400">
              Home
            </Link>
          </li>
          <li className="pr-8">
            <Link to="/about" className="text-gray-400">
              About
            </Link>
          </li>
          <li className="pr-8">
            <Link to="/blog" className="text-gray-400">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="font-sans text-7xl text-gray-600 text-center">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout