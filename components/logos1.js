import React from 'react'

import PropTypes from 'prop-types'

const Logos1 = (props) => {
  return (
    <>
      <div
        className={`logos1-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="logos1-max-width thq-section-max-width">
          <h2 className="logos1-text thq-heading-2">{props.heading1}</h2>
          <div className="thq-grid-6">
            <img
              alt={props.logo1Alt}
              src={props.logo1Src}
              className="logos1-logo1 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo2Alt}
              src={props.logo2Src}
              className="logos1-logo2 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo3Alt}
              src={props.logo3Src}
              className="logos1-logo3 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo4Alt}
              src={props.logo4Src}
              className="logos1-logo4 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo5Alt}
              src={props.logo5Src}
              className="logos1-logo5 thq-img-ratio-16-9"
            />
            <img
              alt={props.logo6Alt}
              src={props.logo6Src}
              className="logos1-logo6 thq-img-ratio-16-9"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logos1-container {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .logos1-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .logos1-text {
            color: #3d1f10;
            text-align: center;
            font-family: 'Star Cartoon';
          }
          .logos1-logo1 {
            object-fit: contain;
          }
          .logos1-logo2 {
            object-fit: contain;
          }
          .logos1-logo3 {
            object-fit: contain;
          }
          .logos1-logo4 {
            object-fit: contain;
          }
          .logos1-logo5 {
            object-fit: contain;
          }
          .logos1-logo6 {
            object-fit: contain;
          }
          .logos1-root-class-name {
            top: 100px;
            left: 0px;
            position: absolute;
            background-color: #ffffff;
          }
          @media (max-width: 767px) {
            .logos1-container {
              gap: var(--dl-space-space-twounits);
            }
            .logos1-max-width {
              gap: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Logos1.defaultProps = {
  logo6Alt: 'Roadmap Logo',
  logo4Alt: 'Tokenomics Logo',
  logo2Alt: 'NFT Collections Logo',
  logo3Src: '/design%20sans%20titre%20(19)-1400w.png',
  logo3Alt: 'Marketplace Logo',
  logo1Src: '/design%20sans%20titre%20(20)-1400w.png',
  heading1: 'Whisker - Play To Earn OpenWorld',
  logo2Src: '/design%20sans%20titre%20(18)-1400w.png',
  logo1Alt: 'Whisker Logo',
  logo5Src: '/design%20sans%20titre%20(22)-1400w.png',
  logo6Src: '/design%20sans%20titre%20(17)-1400w.png',
  rootClassName: '',
  logo4Src: '/design%20sans%20titre%20(21)-1400w.png',
  logo5Alt: 'Partnerships Logo',
}

Logos1.propTypes = {
  logo6Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo3Src: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo1Src: PropTypes.string,
  heading1: PropTypes.string,
  logo2Src: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo6Src: PropTypes.string,
  rootClassName: PropTypes.string,
  logo4Src: PropTypes.string,
  logo5Alt: PropTypes.string,
}

export default Logos1
