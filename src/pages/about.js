import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hello there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt="Andrey"
        src="../images/Andrey.jpg"
      />
    </Layout>
  )
}

export default AboutPage