import React from 'react'

import PropTypes from 'prop-types'

const CTA1 = (props) => {
  return (
    <>
      <div
        className={`cta1-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="cta1-max-width thq-section-max-width">
          <div className="cta1-content">
            <h2 className="cta1-heading1 thq-heading-2">{props.heading1}</h2>
            <div className="cta1-actions">
              <button className="cta1-button thq-button-filled">
                <span className="cta1-action1 thq-body-small">
                  {props.action1}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta1-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .cta1-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .cta1-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .cta1-heading1 {
            color: #f3c285;
            text-align: center;
            font-family: 'Star Cartoon';
          }
          .cta1-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .cta1-button {
            text-decoration: none;
            background-color: #f3c285;
          }
          .cta1-action1 {
            text-align: center;
          }
          .cta1-root-class-name {
            align-self: flex-start;
            background-size: cover;
            background-image: url('/designsanstitre1211331-83hq-200h.png');
          }
          @media (max-width: 479px) {
            .cta1-actions {
              width: 100%;
              flex-direction: column;
            }
            .cta1-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

CTA1.defaultProps = {
  content1:
    'Become a part of the Whisker community and stay updated on the latest developments, NFT drops, and exciting gameplay opportunities.',
  rootClassName: '',
  heading1: 'Ready to dive into the world of memes?',
  action1: 'Home',
  action2: 'Explore Whisker Marketplace',
}

CTA1.propTypes = {
  content1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
}

export default CTA1
