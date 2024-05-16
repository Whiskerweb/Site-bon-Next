import React from 'react'

import PropTypes from 'prop-types'

const TeleportHQFooter = (props) => {
  return (
    <>
      <div
        className={`teleport-hq-footer-teleport-hq-footer ${props.rootClassName} `}
      >
        <div className="teleport-hq-footer-container">
          <div className="teleport-hq-footer-container1">
            <span className="teleport-hq-footer-text">{props.text}</span>
            <svg viewBox="0 0 1024 1024" className="teleport-hq-footer-icon">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="teleport-hq-footer-text1">{props.text1}</span>
          </div>
          <a
            href={props.linkTeleportHQ}
            target="_blank"
            rel="noreferrer noopener"
            className="teleport-hq-footer-link"
          >
            <div className="teleport-hq-footer-teleport-hq">
              <span className="teleport-hq-footer-text2">{props.text2}</span>
              <img
                alt="TeleportHQ logo"
                src="/logo-teleporthq-200w-200w.webp"
                className="teleport-hq-footer-image"
              />
            </div>
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .teleport-hq-footer-teleport-hq-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .teleport-hq-footer-container {
            display: flex;
            font-size: 16px;
            align-items: center;
            flex-direction: row;
          }
          .teleport-hq-footer-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .teleport-hq-footer-text {
            fill: #fff;
            color: #fff;
            margin-right: var(--dl-space-space-halfunit);
          }
          .teleport-hq-footer-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .teleport-hq-footer-text1 {
            fill: #fff;
            color: #fff;
          }
          .teleport-hq-footer-link {
            display: contents;
          }
          .teleport-hq-footer-teleport-hq {
            display: flex;
            align-items: center;
            padding-left: 4px;
            flex-direction: row;
            text-decoration: none;
          }
          .teleport-hq-footer-text2 {
            fill: #fff;
            color: #fff;
            margin-right: var(--dl-space-space-halfunit);
          }
          .teleport-hq-footer-image {
            width: 25px;
            object-fit: cover;
          }

          @media (max-width: 767px) {
            .teleport-hq-footer-text {
              fill: var(--dl-color-gray-white);
              color: var(--dl-color-gray-white);
            }
            .teleport-hq-footer-text1 {
              fill: var(--dl-color-gray-white);
              color: var(--dl-color-gray-white);
            }
            .teleport-hq-footer-text2 {
              fill: var(--dl-color-gray-white);
              color: var(--dl-color-gray-white);
            }
          }
          @media (max-width: 479px) {
            .teleport-hq-footer-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

TeleportHQFooter.defaultProps = {
  linkTeleportHQ: 'https://www.teleporthq.io',
  text1: '2024 All rights reserved.',
  text: 'Copyright',
  imageAlt: 'TeleportHQ logo',
  text2: 'Made in TeleportHQ',
  imageSrc: '89bee4e0-1327-4c2e-9fe9-df441bef4697',
  rootClassName: '',
}

TeleportHQFooter.propTypes = {
  linkTeleportHQ: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  text2: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TeleportHQFooter
