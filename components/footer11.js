import React from 'react'

import PropTypes from 'prop-types'

const Footer11 = (props) => {
  return (
    <>
      <div className="footer11-footer1 thq-section-padding">
        <div className="footer11-max-width thq-section-max-width">
          <div className="footer11-content">
            <div className="footer11-newsletter">
              <img
                alt={props.image1Alt}
                src={props.image1Src}
                className="footer11-image1"
              />
              <span className="thq-body-small">
                Subscribe to our newsletter for the latest updates on new
                features and product releases.
              </span>
              <div className="footer11-actions">
                <div className="footer11-form">
                  <div className="footer11-container">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="footer11-text-input thq-input"
                    />
                  </div>
                  <button className="thq-button-outline footer11-button">
                    <span className="thq-body-small">{props.action1}</span>
                  </button>
                </div>
                <span className="footer11-content2 thq-body-small">
                  {props.content2}
                </span>
              </div>
            </div>
            <div className="footer11-links">
              <div className="footer11-column1">
                <strong className="thq-body-large footer11-column1-title">
                  {props.column1Title}
                </strong>
                <div className="footer11-footer-links">
                  <span className="thq-body-small">{props.link1}</span>
                  <span className="thq-body-small">{props.link2}</span>
                  <span className="thq-body-small">{props.link3}</span>
                  <span className="thq-body-small">{props.link4}</span>
                  <span className="thq-body-small">{props.link5}</span>
                </div>
              </div>
              <div className="footer11-column2">
                <strong className="thq-body-large footer11-column2-title">
                  {props.column2Title}
                </strong>
                <div className="footer11-footer-links1">
                  <span className="thq-body-small">{props.link6}</span>
                  <span className="thq-body-small">{props.link7}</span>
                  <span className="thq-body-small">{props.link8}</span>
                  <span className="thq-body-small">{props.link9}</span>
                  <span className="thq-body-small">{props.link10}</span>
                </div>
              </div>
              <div className="footer11-column3">
                <strong className="thq-body-large footer11-social-link1-title">
                  {props.socialLink1Title}
                </strong>
                <div className="footer11-social-links">
                  <div className="footer11-link">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                    </svg>
                    <span className="thq-body-small">{props.socialLink1}</span>
                  </div>
                  <div className="footer11-link1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <span className="thq-body-small">{props.socialLink2}</span>
                  </div>
                  <div className="footer11-link2">
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="thq-icon-small"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                    <span className="thq-body-small">{props.socialLink3}</span>
                  </div>
                  <div className="footer11-link3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <span className="thq-body-small">{props.socialLink4}</span>
                  </div>
                  <div className="footer11-link4">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                    </svg>
                    <span className="thq-body-small">{props.socialLink5}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer11-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer11-row">
              <span className="thq-body-small">{props.content3}</span>
              <div className="footer11-footer-links2">
                <span className="thq-body-small">{props.privacyLink}</span>
                <span className="thq-body-small">{props.termsLink}</span>
                <span className="thq-body-small">{props.cookiesLink}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer11-footer1 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer11-max-width {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer11-content {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .footer11-newsletter {
            gap: 24px;
            width: 500px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer11-image1 {
            height: 2rem;
          }
          .footer11-actions {
            gap: 16px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer11-form {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-shrink: 0;
          }
          .footer11-container {
            width: 365px;
            display: flex;
            align-items: flex-start;
          }
          .footer11-text-input {
            gap: 8px;
            width: 100%;
            height: 32px;
            display: flex;
            font-size: 16px;
            box-sizing: content-box;
            text-align: left;
            align-items: center;
            font-family: Roboto;
            font-weight: 400;
            background-color: transparent;
          }
          .footer11-content2 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            height: auto;
            font-size: 12px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: 'Roboto';
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .footer11-links {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .footer11-column1 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            max-width: 300px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer11-footer-links {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer11-column2 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            max-width: 300px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer11-footer-links1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer11-column3 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            max-width: 300px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .footer11-social-links {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer11-link {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .footer11-link1 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .footer11-link2 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .footer11-link3 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .footer11-link4 {
            gap: 12px;
            display: flex;
            padding: 8px 0;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .footer11-credits {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer11-row {
            gap: 64px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer11-footer-links2 {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 991px) {
            .footer11-newsletter {
              width: 300px;
            }
            .footer11-form {
              width: 100%;
              flex-direction: column;
            }
            .footer11-container {
              width: 100%;
            }
            .footer11-text-input {
              width: 100%;
              padding: var(--dl-space-space-halfunit);
            }
            .footer11-button {
              width: 100%;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .footer11-content {
              flex-direction: column;
            }
            .footer11-newsletter {
              width: 100%;
            }
            .footer11-form {
              width: 100%;
              flex-direction: row;
              justify-content: flex-start;
            }
            .footer11-container {
              width: 100%;
            }
            .footer11-button {
              width: 208px;
            }
            .footer11-links {
              width: 100%;
              align-items: flex-start;
              justify-content: center;
            }
            .footer11-column1 {
              align-items: center;
            }
            .footer11-column1-title {
              text-align: center;
            }
            .footer11-footer-links {
              align-self: center;
            }
            .footer11-column2 {
              align-items: center;
            }
            .footer11-column2-title {
              text-align: center;
            }
            .footer11-footer-links1 {
              align-self: center;
            }
            .footer11-column3 {
              align-items: center;
            }
            .footer11-social-link1-title {
              text-align: center;
            }
            .footer11-social-links {
              align-self: center;
            }
            .footer11-link {
              align-self: center;
            }
            .footer11-link1 {
              align-self: center;
            }
            .footer11-link2 {
              align-self: center;
            }
            .footer11-link3 {
              align-self: center;
            }
            .footer11-link4 {
              align-self: center;
            }
            .footer11-row {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .footer11-actions {
              width: 100%;
            }
            .footer11-form {
              width: 100%;
              flex-direction: column;
            }
            .footer11-container {
              width: 100%;
            }
            .footer11-button {
              width: 100%;
            }
            .footer11-links {
              flex-direction: column;
            }
            .footer11-column1 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer11-footer-links {
              align-items: center;
              justify-content: center;
            }
            .footer11-column2 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer11-footer-links1 {
              align-items: center;
              justify-content: center;
            }
            .footer11-column3 {
              width: 100%;
              max-width: 100%;
              align-items: center;
              justify-content: center;
            }
            .footer11-social-links {
              align-items: center;
              justify-content: center;
            }
            .footer11-link {
              justify-content: center;
            }
            .footer11-link1 {
              justify-content: center;
            }
            .footer11-link2 {
              justify-content: center;
            }
            .footer11-link3 {
              justify-content: center;
            }
            .footer11-link4 {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .footer11-credits {
              gap: 0;
            }
            .footer11-row {
              align-items: center;
              justify-content: center;
            }
            .footer11-footer-links2 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer11.defaultProps = {
  socialLink3: 'https://www.facebook.com/whiskerofficial',
  link7: 'Cookie Policy',
  link6: 'Privacy Policy',
  link8: 'Roadmap',
  link4: 'Blog',
  image1Alt: 'logo',
  link10: 'Marketplace',
  termsLink: 'Terms of Service',
  privacyLink: 'Privacy Policy',
  socialLink5: 'https://www.reddit.com/r/whiskerofficial',
  cookiesLink: 'Cookies Settings',
  socialLink1Title: 'Follow Us',
  column1Title: 'Company',
  link2: 'Contact Us',
  link5: 'Terms of Service',
  column2Title: 'Resources',
  image1Src:
    'https://images.unsplash.com/photo-1615985249956-d13775508df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTYxMDQ3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: 'Subscribe',
  socialLink2: 'https://www.instagram.com/whiskerofficial',
  link9: 'Tokenomics',
  socialLink4: 'https://www.linkedin.com/company/whiskerofficial',
  content3: '© 2024 TeleportHQ',
  content2:
    'By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.',
  link1: 'About Us',
  socialLink1: 'https://twitter.com/whiskerofficial',
  link3: 'FAQs',
}

Footer11.propTypes = {
  socialLink3: PropTypes.string,
  link7: PropTypes.string,
  link6: PropTypes.string,
  link8: PropTypes.string,
  link4: PropTypes.string,
  image1Alt: PropTypes.string,
  link10: PropTypes.string,
  termsLink: PropTypes.string,
  privacyLink: PropTypes.string,
  socialLink5: PropTypes.string,
  cookiesLink: PropTypes.string,
  socialLink1Title: PropTypes.string,
  column1Title: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  column2Title: PropTypes.string,
  image1Src: PropTypes.string,
  action1: PropTypes.string,
  socialLink2: PropTypes.string,
  link9: PropTypes.string,
  socialLink4: PropTypes.string,
  content3: PropTypes.string,
  content2: PropTypes.string,
  link1: PropTypes.string,
  socialLink1: PropTypes.string,
  link3: PropTypes.string,
}

export default Footer11
