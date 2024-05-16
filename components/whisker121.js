import React from 'react'

import PropTypes from 'prop-types'

const WHISKER121 = (props) => {
  return (
    <>
      <div className={`whisker121-container ${props.rootClassName} `}>
        <img
          alt={props.wHISKER121Alt}
          src={props.wHISKER121Src}
          className="whisker121-whisker121"
        />
        <span>{props.text}</span>
      </div>
      <style jsx>
        {`
          .whisker121-container {
            display: flex;
            position: relative;
          }
          .whisker121-whisker121 {
            flex: 1;
            width: 1325px;
            height: 88px;
            position: relative;
            align-self: center;
          }
          @media (max-width: 1600px) {
            .whisker121-whisker121 {
              top: 18px;
              left: 164px;
              width: 1256px;
              align-self: center;
              padding-right: 100px;
            }
          }
          @media (max-width: 1200px) {
            .whisker121-whisker121 {
              top: 13px;
              left: 136px;
              width: 910px;
              height: 79px;
            }
          }
          @media (max-width: 991px) {
            .whisker121-whisker121 {
              top: 16px;
              left: 131px;
              width: 731px;
              height: 50px;
            }
          }
          @media (max-width: 767px) {
            .whisker121-whisker121 {
              top: 10px;
              left: 0px;
              right: 0px;
              margin: auto;
            }
          }
          @media (max-width: 479px) {
            .whisker121-whisker121 {
              top: 17px;
              left: 0px;
              right: 0px;
              width: 288px;
              height: 32px;
              margin: auto;
            }
          }
        `}
      </style>
    </>
  )
}

WHISKER121.defaultProps = {
  wHISKER121Src: '/images/whisker1211301-d96w-200h.png',
  text: 'Text',
  wHISKER121Alt: 'WHISKER1211301',
  rootClassName: '',
}

WHISKER121.propTypes = {
  wHISKER121Src: PropTypes.string,
  text: PropTypes.string,
  wHISKER121Alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default WHISKER121
