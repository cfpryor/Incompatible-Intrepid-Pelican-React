import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Timeline4 from '../components/timeline4'
import './research.css'

const Research = (props) => {
  return (
    <div className="research-container">
      <Helmet>
        <title>Research - Connor Pryor's Website</title>
        <meta
          property="og:title"
          content="Research - Connor Pryor's Website"
        />
      </Helmet>
      <Navbar4></Navbar4>
      <Timeline4></Timeline4>
    </div>
  )
}

export default Research
