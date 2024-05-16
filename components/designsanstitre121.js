import React from 'react'

import PropTypes from 'prop-types'

const Designsanstitre121 = (props) => {
  return (
    <>
      <div className={`designsanstitre121-container ${props.rootClassName} `}>
        <img
          alt={props.designsanstitre121Alt}
          src={props.designsanstitre121Src}
          className="designsanstitre121-designsanstitre121"
        />
      </div>
      <style jsx>
        {`
          .designsanstitre121-container {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .designsanstitre121-designsanstitre121 {
            width: 1920px;
            height: 1175px;
          }
          @media (max-width: 1600px) {
            .designsanstitre121-designsanstitre121 {
              top: -499px;
              left: -698px;
              width: 1384px;
              height: 846px;
              position: absolute;
              align-self: flex-start;
              padding-bottom: 0px;
            }
          }
          @media (max-width: 1200px) {
            .designsanstitre121-designsanstitre121 {
              top: -502px;
              left: -612px;
              width: 1200px;
              height: 813px;
              margin: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Designsanstitre121.defaultProps = {
  designsanstitre121Src: '/designsanstitre1211331-83hq-2000w.png',
  rootClassName: '',
  designsanstitre121Alt: 'Designsanstitre1211331',
}

Designsanstitre121.propTypes = {
  designsanstitre121Src: PropTypes.string,
  rootClassName: PropTypes.string,
  designsanstitre121Alt: PropTypes.string,
}

export default Designsanstitre121
