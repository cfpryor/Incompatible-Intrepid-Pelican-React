import React from 'react'

import PropTypes from 'prop-types'

import './timeline4.css'

const Timeline4 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="timeline4-max-width thq-section-max-width">
        <div className="timeline4-container01">
          <h2 className="thq-heading-2">{props.title1}</h2>
          <span className="timeline4-text01 thq-body-small">
            {props.content1}
          </span>
          <span className="timeline4-text02 thq-body-small">{props.text}</span>
          <div className="timeline4-container02">
            <a
              href="https://scholar.google.com/citations?user=wHGV0p0AAAAJ&amp;hl=en&amp;oi=ao"
              target="_blank"
              rel="noreferrer noopener"
              className="timeline4-button thq-button-filled"
            >
              {props.action1}
            </a>
          </div>
        </div>
        <div className="timeline4-timeline-container">
          <div className="timeline4-step1">
            <div className="timeline4-container03">
              <div className="timeline4-container04"></div>
              <div className="timeline4-progress0"></div>
            </div>
            <div className="timeline4-container05">
              <h3 className="thq-heading-3">{props.date1}</h3>
              <h3 className="timeline4-text04 thq-heading-3">
                {props.card1Heading}
              </h3>
              <span className="thq-body-small">{props.card1Content}</span>
              <div className="timeline4-container06"></div>
            </div>
          </div>
          <div className="timeline4-step2">
            <div className="timeline4-container07">
              <div className="timeline4-container08"></div>
              <div className="timeline4-progress01"></div>
            </div>
            <div className="timeline4-container09">
              <h3 className="thq-heading-3">{props.date2}</h3>
              <h3 className="timeline4-text07 thq-heading-3">
                {props.card2Heading}
              </h3>
              <span className="thq-body-small">{props.card2Content}</span>
              <div className="timeline4-container10"></div>
            </div>
          </div>
          <div className="timeline4-step3">
            <div className="timeline4-container11">
              <div className="timeline4-container12"></div>
              <div className="timeline4-progress02"></div>
            </div>
            <div className="timeline4-container13">
              <h3 className="thq-heading-3">{props.date3}</h3>
              <h3 className="timeline4-text10 thq-heading-3">
                {props.card3Heading}
              </h3>
              <span className="thq-body-small">{props.card3Content}</span>
              <div className="timeline4-container14"></div>
            </div>
          </div>
          <div className="timeline4-step4">
            <div className="timeline4-container15">
              <div className="timeline4-container16"></div>
              <div className="timeline4-progress03"></div>
            </div>
            <div className="timeline4-container17">
              <h3 className="thq-heading-3">{props.date4}</h3>
              <h3 className="timeline4-text13 thq-heading-3">
                {props.card4Heading}
              </h3>
              <span className="thq-body-small">{props.card4Content}</span>
              <div className="timeline4-container18"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Timeline4.defaultProps = {
  text: 'My research is inherently multidisciplinary, involving extensive collaborations with both industry and academic partners. Recently, I have focused on the symbiotic integration of deep neural networks with symbolic systems and theory, aiming to push the boundaries of what AI can achieve.',
  title1: 'Research Interests',
  card1Content:
    'Started Ph.D. studies in Computer Science and Engineering at the University of California, Santa Cruz, under the guidance of my advisor, Dr. Lise Getoor.',
  action1: 'Publications',
  card2Heading: 'Internship with Google',
  card4Content: 'Projected Ph.D. defence and graduation.',
  date1: 'September 2018',
  card2Content:
    'In collaboration with Google, I developed advanced neural-symbolic semi-supervised learning techniques for dialog systems.',
  content1:
    'Welcome to my research page! My primary interests lie in machine learning, structured prediction, and enhancing artificial intelligence reasoning with domain knowledge and constraints. I have a broad range of research goals, which has led me to work on diverse projects in machine learning and artificial intelligence. These include inference and learning over graphs, object navigation and detection, time-series modeling, entity resolution, dialogue systems, explainability, online learning, event detection in autonomous driving, and more.',
  date3: 'December 2022',
  card1Heading: 'University of California Santa Cruz',
  card3Heading: 'Advancement to Candidacy',
  card3Content:
    'Achieved Ph.D. candidacy through research on NeuPSL: A Scalable Approach to Neuro-Symbolic Inference and Reasoning.',
  date2: 'June 2020',
  card4Heading: 'Projected Doctoral Graduation',
  date4: 'August 2024',
}

Timeline4.propTypes = {
  text: PropTypes.string,
  title1: PropTypes.string,
  card1Content: PropTypes.string,
  action1: PropTypes.string,
  card2Heading: PropTypes.string,
  card4Content: PropTypes.string,
  date1: PropTypes.string,
  card2Content: PropTypes.string,
  content1: PropTypes.string,
  date3: PropTypes.string,
  card1Heading: PropTypes.string,
  card3Heading: PropTypes.string,
  card3Content: PropTypes.string,
  date2: PropTypes.string,
  card4Heading: PropTypes.string,
  date4: PropTypes.string,
}

export default Timeline4
