import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Timeline4 from '../components/timeline4'
import './research.css'

const Research = (props) => {
  return (
    <div className="research-container">
      <Helmet>
        <title>Research - Incompatible Intrepid Pelican</title>
        <meta
          property="og:title"
          content="Research - Incompatible Intrepid Pelican"
        />
      </Helmet>
      <Navbar4></Navbar4>
      <Timeline4></Timeline4>
    </div>
  )
}

export default Research
