import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Contact4 from '../components/contact4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Connor Pryor's Website</title>
        <meta property="og:title" content="Connor Pryor's Website" />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero9
        heading1="Connor Pryor"
        image1Src="/background-trees.webp"
        rootClassName="hero9-root-class-name"
      ></Hero9>
      <Contact4></Contact4>
    </div>
  )
}

export default Home
