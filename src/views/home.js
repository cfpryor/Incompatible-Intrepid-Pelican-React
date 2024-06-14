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
        <title>Incompatible Intrepid Pelican</title>
        <meta property="og:title" content="Incompatible Intrepid Pelican" />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero9
        heading1="Connor Pryor"
        image1Src="/emma-watson-udtq0737wu0-unsplash-e1600498395787-1500w.webp"
        rootClassName="hero9-root-class-name"
      ></Hero9>
      <Contact4></Contact4>
    </div>
  )
}

export default Home
