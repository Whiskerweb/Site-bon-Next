import React from 'react'

import PropTypes from 'prop-types'

const Features1 = (props) => {
  return (
    <>
      <div className="features1-layout251 thq-section-padding">
        <div className="features1-max-width thq-section-max-width">
          <div className="thq-flex-row features1-section-title">
            <div className="features1-column thq-flex-column">
              <span className="thq-body-small">{props.slogan}</span>
              <h2 className="thq-heading-2 features1-text1">
                {props.sectionTitle}
              </h2>
            </div>
            <span className="thq-body-small">{props.sectionDescription}</span>
          </div>
          <div className="features1-content">
            <div className="features1-row thq-flex-row">
              <div className="features1-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature1-image"
                />
                <div className="features1-content1 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature1Title}</h3>
                  <span className="thq-body-small">
                    {props.feature1Description}
                  </span>
                </div>
              </div>
              <div className="features1-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature2-image"
                />
                <div className="features1-content2 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature2Title}</h3>
                  <span className="thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
              <div className="features1-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature3-image"
                />
                <div className="features1-content3 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature3Title}</h3>
                  <span className="thq-body-small">
                    {props.feature3Description}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features1-actions">
            <button className="thq-button-filled features1-button">
              <span className="thq-body-small">{props.mainAction}</span>
            </button>
            <button className="thq-button-outline features1-button1">
              <span className="thq-body-small">{props.secondaryAction}</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features1-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features1-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-column {
            flex-shrink: 0;
          }
          .features1-content {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-row {
            align-items: flex-start;
          }
          .features1-feature1 {
            flex: 1;
          }
          .features1-content1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature2 {
            flex: 1;
          }
          .features1-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature3 {
            flex: 1;
          }
          .features1-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
          }
          @media (max-width: 991px) {
            .features1-section-title {
              flex-direction: column;
            }
            .features1-feature1-image {
              height: 260px;
            }
            .features1-feature2-image {
              height: 260px;
            }
            .features1-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features1-column {
              width: 100%;
            }
            .features1-text1 {
              text-align: center;
            }
            .features1-row {
              flex-direction: column;
            }
            .features1-feature1-image {
              width: 100%;
            }
            .features1-feature2 {
              width: auto;
            }
            .features1-feature2-image {
              width: 100%;
            }
            .features1-feature3 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .features1-actions {
              width: 100%;
              flex-direction: column;
            }
            .features1-button {
              width: 100%;
            }
            .features1-button1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Features1.defaultProps = {
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTYxODAzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1642388889330-3cac79b6111d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTYxODAzNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTYxODAzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionDescription:
    'Explore the exciting features of Whisker that make it a unique Play To Earn OpenWorld experience.',
  feature1Title: 'NFTs Galore',
  feature2ImageAlt: 'Tokenomics Image',
  mainAction: 'Join the Presale',
  feature3ImageAlt: 'Community Building Image',
  feature1Description:
    'Collect and trade unique meme-inspired NFTs that hold real value in the Whisker metaverse.',
  feature2Description:
    'Experience a robust token economy designed to reward players for their participation and contributions.',
  slogan: 'Play, Earn, and Dive into the Memeverse',
  secondaryAction: 'Explore Marketplace',
  feature3Description:
    'Join a vibrant community of meme enthusiasts and gamers who share a passion for the memeverse.',
  feature1ImageAlt: 'NFTs Galore Image',
  feature3Title: 'Community Building',
  feature2Title: 'Tokenomics',
  sectionTitle: 'Features',
}

Features1.propTypes = {
  feature1ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  mainAction: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2Description: PropTypes.string,
  slogan: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Title: PropTypes.string,
  sectionTitle: PropTypes.string,
}

export default Features1
