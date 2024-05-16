import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <div className={`navbar-container ${props.rootClassName} `}>
        <div className="navbar-max-width">
          <Link href="/">
            <a className="navbar-link">
              <img
                alt="image"
                src="/whiskerlogooffbois11332-0xga-200h.png"
                className="navbar-logo"
              />
            </a>
          </Link>
          <div className="navbar-links">
            <Link href="/marketplace">
              <a className="navbar-link01 navbar-link">Marketplace</a>
            </Link>
            <a
              href="https://medium.com/@witcoinwhisker"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar-link02 navbar-link"
            >
              News
            </a>
            <a href="#RD" className="navbar-link03 navbar-link">
              Roadmap
            </a>
            <a href="#TOK" className="navbar-link04 navbar-link">
              Tokenomics
            </a>
            <a href="#SOC" className="navbar-link05 navbar-link">
              Social
            </a>
          </div>
          <div
            data-thq="thq-dropdown"
            className="navbar-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navbar-dropdown-toggle"
            >
              <span className="navbar-text navbar-link">Whisker</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="navbar-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="navbar-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul data-thq="thq-dropdown-list" className="navbar-dropdown-list">
              <li data-thq="thq-dropdown" className="navbar-dropdown list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-dropdown-toggle1"
                >
                  <Link href="/marketplace">
                    <a className="navbar-link06">Marketplace</a>
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navbar-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-dropdown-toggle2"
                >
                  <a
                    href="https://medium.com/@witcoinwhisker"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="navbar-link07"
                  >
                    News
                  </a>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navbar-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-dropdown-toggle3"
                >
                  <a href="#RD" className="navbar-link08">
                    Roadmap
                  </a>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navbar-dropdown3 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-dropdown-toggle4"
                >
                  <a href="#TOK" className="navbar-link09">
                    Tokenimics
                  </a>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="navbar-dropdown4 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="navbar-dropdown-toggle5"
                >
                  <a href="#SOC" className="navbar-link10">
                    Social
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <Link href="/presale">
            <a className="navbar-link11 navbar-link">Presale</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: fixed;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-max-width {
            flex: 0 0 auto;
            width: 100%;
            height: 74px;
            display: flex;
            max-width: 958px;
            margin-top: 40px;
            align-items: center;
            padding-top: 10px;
            padding-left: 40px;
            padding-right: 20px;
            flex-direction: row;
            padding-bottom: 15px;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/navbar2-200h.png');
            background-repeat: repeat-x;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-logo {
            width: 50px;
            height: 50px;
            margin-top: 10px;
            object-fit: cover;
            text-decoration: none;
          }
          .navbar-links {
            gap: 16px;
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar-link01 {
            margin-top: 12px;
            transition: 0.3s;
            text-decoration: none;
          }
          .navbar-link01:hover {
            color: #fddbc6;
          }
          .navbar-link02 {
            margin-top: 12px;
            transition: 0.3s;
            text-decoration: none;
          }
          .navbar-link02:hover {
            color: #fddbc6;
          }
          .navbar-link03 {
            margin-top: 12px;
            transition: 0.3s;
            text-decoration: none;
          }
          .navbar-link03:hover {
            color: #fddbc6;
          }
          .navbar-link04 {
            margin-top: 12px;
            transition: 0.3s;
            text-decoration: none;
          }
          .navbar-link04:hover {
            color: #fddbc6;
          }
          .navbar-link05 {
            margin-top: 12px;
            transition: 0.3s;
            text-decoration: none;
          }
          .navbar-link05:hover {
            color: #fddbc6;
          }
          .navbar-thq-dropdown {
            cursor: pointer;
            display: none;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-text {
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar-dropdown-arrow {
            transition: 0.3s;
          }
          .navbar-icon {
            fill: #f3b27c;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #fde5c0;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            list-style-position: inside;
          }
          .navbar-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle1 {
            fill: #fde5c0;
            color: #fde5c0;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-link06 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navbar-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle2 {
            fill: #fde5c0;
            color: #fde5c0;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-link07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navbar-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle3 {
            fill: #fde5c0;
            color: #fde5c0;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-link08 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navbar-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle4 {
            fill: #fde5c0;
            color: #fde5c0;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle4:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-link09 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navbar-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navbar-dropdown-toggle5 {
            fill: #fde5c0;
            color: #fde5c0;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .navbar-dropdown-toggle5:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar-link10 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .navbar-link11 {
            fill: #402818;
            color: #402818;
            display: flex;
            transition: 0.3s;
            align-items: center;
            line-height: 1;
            padding-top: 6px;
            border-color: #3d1f10;
            border-width: 5px;
            padding-left: 8px;
            border-radius: var(--dl-radius-radius-buttonradius);
            padding-right: 8px;
            padding-bottom: 4px;
            text-decoration: none;
            background-color: rgb(171, 144, 109);
          }
          .navbar-link11:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .navbar-root-class-name {
            top: -20px;
            left: -11px;
            align-self: center;
          }

          @media (max-width: 1600px) {
            .navbar-max-width {
              height: 70px;
              margin-top: 40px;
            }
          }
          @media (max-width: 1200px) {
            .navbar-max-width {
              height: 70px;
              margin-top: 40px;
            }
          }
          @media (max-width: 991px) {
            .navbar-max-width {
              height: 63px;
              margin-top: 30px;
            }
          }
          @media (max-width: 767px) {
            .navbar-max-width {
              height: 54px;
              max-width: 500px;
              margin-top: 30px;
            }
            .navbar-links {
              display: none;
            }
            .navbar-thq-dropdown {
              display: inline-block;
            }
            .navbar-text {
              font-style: normal;
              margin-top: 11px;
              font-weight: 500;
            }
            .navbar-icon {
              width: 18px;
              margin-top: 10px;
            }
            .navbar-dropdown-list {
              border-color: #5c3f0d;
              list-style-image: url('/navbar2-200h.png');
            }
            .navbar-link06 {
              color: #5c3f0d;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
            }
            .navbar-link07 {
              color: #5c3f0d;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
            }
            .navbar-link08 {
              color: #5c3f0d;
              font-size: 14px;
            }
            .navbar-link09 {
              color: #5c3f0d;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
            }
            .navbar-link10 {
              color: #5c3f0d;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
            }
          }
          @media (max-width: 479px) {
            .navbar-max-width {
              height: 52px;
              max-width: 400px;
              margin-top: 20px;
            }
            .navbar-dropdown-list {
              border-color: #5c3f0d;
            }
            .navbar-link06 {
              color: #5c3f0d;
            }
            .navbar-link07 {
              color: #5c3f0d;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
            }
            .navbar-link08 {
              color: #5c3f0d;
            }
            .navbar-link09 {
              color: #5c3f0d;
            }
            .navbar-link10 {
              color: #5c3f0d;
              font-size: 14px;
              font-style: normal;
              font-weight: 500;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  rootClassName: '',
}

Navbar.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navbar
