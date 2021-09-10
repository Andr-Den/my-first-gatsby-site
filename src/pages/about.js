import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p className="text-center mt-6">Hello there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <div className="grid grid-cols-12">
          <StaticImage
          className="w-96 mt-6 col-start-1 col-end-4"
          alt="Andrey"
          src="../images/Andrey.jpg"
          />
          <div className="col-start-5 col-end-13">
            <p className="font-sans text-3xl text-gray-600 mt-6 place-self-center">Denisov Andrey</p>
            <ul className="mt-6">
              <li className="mt-3">Ссылка на Вконтакте</li>
              <li className="mt-3">Ссылка на Facebook</li>
              <li className="mt-3">Ссылка на Instagram</li>
            </ul>
          </div>
        </div>
    </Layout>
  )
}

export default AboutPage