import React from 'react'

import PropTypes from 'prop-types'

const Haut = (props) => {
  return (
    <>
      <div className={`haut-haut ${props.rootClassName} `}>
        <img alt={props.bACKAlt} src={props.bACKSrc} className="haut-back" />
        <img alt={props.herbeAlt} src={props.herbeSrc} className="haut-herbe" />
        <img alt={props.imageAlt} src={props.imageSrc} className="haut-nuage" />
      </div>
      <style jsx>
        {`
          .haut-haut {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .haut-back {
            flex: 1;
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .haut-herbe {
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: auto;
            position: absolute;
            align-self: center;
            animation-name: shakeY;
            animation-delay: 0s;
            animation-duration: 25000ms;
            animation-direction: normal;
            animation-iteration-count: 2000;
            animation-timing-function: ease;
          }
          .haut-nuage {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .haut-root-class-name {
            flex: 0;
          }
          @media (max-width: 1600px) {
            .haut-haut {
              height: 1263px;
            }
            .haut-herbe {
              width: 100%;
              height: auto;
              align-self: center;
            }
            .haut-nuage {
              margin-top: -620px;
              margin-bottom: -620px;
            }
          }
          @media (max-width: 1200px) {
            .haut-herbe {
              top: 235px;
              left: 0px;
              right: 1200px;
              width: 1200px;
              height: 850px;
            }
          }
          @media (max-width: 991px) {
            .haut-herbe {
              top: 131px;
              left: -81px;
            }
          }
          @media (max-width: 767px) {
            .haut-herbe {
              top: 122px;
              left: -193px;
            }
          }
          @media (max-width: 479px) {
            .haut-herbe {
              top: 225px;
              left: 0px;
              width: 479px;
              height: 322px;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Haut.defaultProps = {
  imageAlt: 'image',
  herbeSrc: '/images/herbe1301-4jec-1500w.png',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  herbeAlt: 'Herbe1301',
  imageAlt1: 'image',
  rootClassName: '',
  nuageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/abd7273e-a1d8-480a-a685-990544bc078e/6518f72a-d404-4e0f-b101-e7f47a583d49?org_if_sml=1129569&force_format=original',
  nuageAlt: 'Nuage1301',
  imageSrc: '/nuage-1500w.png',
  bACKAlt: 'image',
  bACKSrc: '/back-1500w.png',
}

Haut.propTypes = {
  imageAlt: PropTypes.string,
  herbeSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  herbeAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  nuageSrc: PropTypes.string,
  nuageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  bACKAlt: PropTypes.string,
  bACKSrc: PropTypes.string,
}

export default Haut
