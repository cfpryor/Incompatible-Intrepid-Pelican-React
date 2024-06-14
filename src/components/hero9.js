import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div
      className={`hero9-header30 thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <div className="hero9-container1">
            <div className="hero9-container2">
              <div className="hero9-container3">
                <div className="hero9-container4">
                  <div className="hero9-container5">
                    <img
                      alt={props.imageAlt}
                      src={props.imageSrc}
                      className="hero9-image1"
                    />
                  </div>
                  <div className="hero9-social-links">
                    <a
                      href="https://github.com/cfpryor"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hero9-link"
                    >
                      <img
                        alt={props.imageAlt4}
                        src={props.imageSrc4}
                        className="hero9-image2"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/connor-pryor-182764199"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hero9-link1"
                    >
                      <img
                        alt={props.imageAlt3}
                        src={props.imageSrc3}
                        className="hero9-image3"
                      />
                    </a>
                    <a
                      href="https://scholar.google.com/citations?hl=en&amp;user=wHGV0p0AAAAJ"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hero9-link2"
                    >
                      <img
                        alt={props.imageAlt2}
                        src={props.imageSrc2}
                        className="hero9-image4"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero9-container6">
                <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
                <span className="hero9-text1">{props.currentDegree}</span>
                <p className="hero9-text2 thq-body-large">{props.content1}</p>
                <div className="hero9-actions">
                  <a
                    href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/d814a1ff-a4a3-4ae1-8f6c-2bfb6d66f5c0/610ddd8d-69e7-476c-9ec7-01dde5b0038c"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hero9-button thq-button-filled"
                  >
                    <span className="hero9-text3 thq-body-small">
                      {props.action1}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1716359952061-89c3be089192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODM3ODE4MHw&ixlib=rb-4.0.3&q=80&w=1080',
  imageAlt4: 'image',
  imageAlt3: 'image',
  imageSrc1: 'dfe39e66-b663-4d83-8b5a-7f67a1f11c11',
  action1: 'View CV',
  image1Alt: "Connor Pryor's Personal Website",
  imageAlt: 'image',
  imageAlt1: 'image',
  imageAlt2: 'image',
  currentDegree: 'Ph.D. Candidate',
  imageSrc4: '/octicons-mark-github.svg',
  heading1: 'Connor Pryor',
  imageSrc2: '/google_scholar_logo.svg-200h.png',
  action2: 'Learn More',
  imageSrc3: '/linkedin_icon.svg-200h.png',
  content1:
    'Computer Science and Engineering Ph.D. Candidate University of California Santa Cruz',
  imageSrc: '/face2019-300w.jpg',
  rootClassName: '',
}

Hero9.propTypes = {
  image1Src: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc1: PropTypes.string,
  action1: PropTypes.string,
  image1Alt: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt2: PropTypes.string,
  currentDegree: PropTypes.string,
  imageSrc4: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc2: PropTypes.string,
  action2: PropTypes.string,
  imageSrc3: PropTypes.string,
  content1: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Hero9
