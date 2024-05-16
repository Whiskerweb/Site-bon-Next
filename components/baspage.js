import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Baspage = (props) => {
  return (
    <>
      <div className={`baspage-container ${props.rootClassName} `}>
        <Link href="/privacy-policy">
          <a className="baspage-link">
            <div className="baspage-pp">
              <span className="baspage-text">PrivacyPolicy</span>
              <span className="baspage-text1">PrivacyPolicy</span>
            </div>
          </a>
        </Link>
        <a
          href="https://witwhisker.com/PDFWP.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="baspage-link1"
        >
          <div className="baspage-wp">
            <span className="baspage-text2">{props.text}</span>
            <span className="baspage-text3">{props.text1}</span>
          </div>
        </a>
        <a
          href="mailto:Contact@witwhisker.com?subject=For the best Base project in the world"
          className="baspage-mail"
        >
          {props.mail}
        </a>
        <div className="baspage-j-oin-wit">
          <span className="baspage-text4">{props.text2}</span>
          <span className="baspage-text5">{props.text3}</span>
        </div>
        <div id="SOCIAL" className="baspage-whisker-big">
          <span className="baspage-text6">{props.text4}</span>
          <span className="baspage-text7">{props.text5}</span>
        </div>
        <div className="baspage-telegram">
          <img
            alt={props.rectangle9Alt}
            src={props.rectangle9Src}
            className="baspage-rectangle9"
          />
          <a
            href={props.linkRectangle10}
            target="_blank"
            rel="noreferrer noopener"
            className="baspage-link2"
          >
            <img
              alt={props.rectangle10Alt}
              src={props.rectangle10Src}
              className="baspage-rectangle10"
            />
          </a>
          <a
            href="https://t.me/+fcFRXCCEWPI0Y2U0"
            target="_blank"
            rel="noreferrer noopener"
            className="baspage-link3"
          >
            <img
              alt={props.iAMTHEBESTMEMECOIN251Alt}
              src={props.iAMTHEBESTMEMECOIN251Src}
              className="baspage-iamthebestmemecoin251"
            />
          </a>
        </div>
        <div className="baspage-discord">
          <img
            alt={props.rectangle9Alt1}
            src={props.rectangle9Src1}
            className="baspage-rectangle91"
          />
          <a
            href={props.linkRectangle101}
            target="_blank"
            rel="noreferrer noopener"
            className="baspage-link4"
          >
            <img
              alt={props.rectangle10Alt1}
              src={props.rectangle10Src1}
              className="baspage-rectangle101"
            />
          </a>
          <a
            href="https://discord.com/invite/unjG6yz4T3"
            target="_blank"
            rel="noreferrer noopener"
            className="baspage-link5"
          >
            <img
              alt={props.iAMTHEBESTMEMECOIN281Alt}
              src={props.iAMTHEBESTMEMECOIN281Src}
              className="baspage-iamthebestmemecoin281"
            />
          </a>
        </div>
        <div className="baspage-twitter">
          <a
            href={props.linkRectangle9}
            target="_blank"
            rel="noreferrer noopener"
            className="baspage-link6"
          >
            <img
              alt={props.rectangle9Alt2}
              src={props.rectangle9Src2}
              className="baspage-rectangle92"
            />
          </a>
          <img
            alt={props.rectangle10Alt2}
            src={props.rectangle10Src2}
            className="baspage-rectangle102"
          />
          <a
            href="https://twitter.com/Whisker_Witcoin"
            target="_blank"
            rel="noreferrer noopener"
            className="baspage-link7"
          >
            <img
              alt={props.iAMTHEBESTMEMECOIN241Alt}
              src={props.iAMTHEBESTMEMECOIN241Src}
              className="baspage-iamthebestmemecoin241"
            />
          </a>
        </div>
        <img alt={props.tAPEAlt} src={props.tAPESrc} className="baspage-tape" />
      </div>
      <style jsx>
        {`
          .baspage-container {
            width: 1600px;
            height: 1019px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .baspage-link {
            display: contents;
          }
          .baspage-pp {
            top: 803px;
            right: 20px;
            width: 221.54818725585938px;
            height: 31.56367301940918px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            text-decoration: none;
          }
          .baspage-text {
            top: 0px;
            left: 1px;
            color: rgba(0, 0, 0, 1);
            width: 219px;
            height: auto;
            position: absolute;
            font-size: 30px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .baspage-text1 {
            top: -3px;
            color: rgba(255, 255, 255, 1);
            right: -1px;
            width: 219px;
            height: 100%;
            position: absolute;
            font-size: 30px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
          }
          .baspage-link1 {
            display: contents;
          }
          .baspage-wp {
            right: 27px;
            width: 203px;
            bottom: 126px;
            height: 31.56367301940918px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            text-decoration: none;
          }
          .baspage-text2 {
            left: 18px;
            color: rgb(0, 0, 0);
            width: 92px;
            bottom: -5px;
            height: auto;
            position: absolute;
            font-size: 30px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .baspage-text3 {
            top: 1px;
            left: 21px;
            color: rgb(255, 255, 255);
            width: 92px;
            height: auto;
            position: absolute;
            font-size: 30px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .baspage-mail {
            top: 617px;
            color: rgb(255, 255, 255);
            right: 183px;
            width: 254px;
            height: auto;
            margin: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .baspage-j-oin-wit {
            top: 333px;
            right: -56px;
            width: 457px;
            height: 30px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: alternate;
            animation-iteration-count: 2000;
            animation-timing-function: ease;
          }
          .baspage-text4 {
            left: -173px;
            color: rgb(0, 0, 0);
            width: auto;
            bottom: -36px;
            height: auto;
            position: absolute;
            font-size: 45px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .baspage-text5 {
            left: -171px;
            color: rgb(219, 158, 79);
            width: auto;
            bottom: -33px;
            height: auto;
            position: absolute;
            font-size: 45px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .baspage-whisker-big {
            top: 242px;
            right: 85px;
            width: 439px;
            height: 122px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .baspage-text6 {
            top: -126px;
            left: -268px;
            color: rgb(0, 0, 0);
            height: auto;
            position: absolute;
            font-size: 200px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .baspage-text7 {
            top: -133px;
            left: -260px;
            color: rgb(255, 255, 255);
            height: auto;
            position: absolute;
            font-size: 200px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .baspage-telegram {
            top: 457px;
            right: 183px;
            width: 84.17013549804688px;
            height: 84.17013549804688px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
            background-color: rgba(219, 158, 79, 0);
          }
          .baspage-rectangle9 {
            top: -2px;
            left: -59px;
            width: 112px;
            height: 112px;
            position: absolute;
            border-radius: 17px;
          }
          .baspage-link2 {
            display: contents;
          }
          .baspage-rectangle10 {
            top: -1px;
            left: -58px;
            width: 110px;
            height: 110px;
            position: absolute;
            border-radius: 17px;
            text-decoration: none;
          }
          .baspage-link3 {
            display: contents;
          }
          .baspage-iamthebestmemecoin251 {
            left: -59px;
            width: 100px;
            bottom: -18px;
            height: 90px;
            position: absolute;
            transition: 0.3s;
            text-decoration: none;
          }
          .baspage-iamthebestmemecoin251:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .baspage-discord {
            top: 433px;
            right: 17px;
            width: 124px;
            height: 121px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .baspage-rectangle91 {
            left: -13px;
            width: 112px;
            bottom: -12px;
            height: 112px;
            position: absolute;
            border-radius: 17px;
          }
          .baspage-link4 {
            display: contents;
          }
          .baspage-rectangle101 {
            left: -12px;
            width: 110px;
            bottom: -11px;
            height: 110px;
            position: absolute;
            border-radius: 17px;
            text-decoration: none;
          }
          .baspage-link5 {
            display: contents;
          }
          .baspage-iamthebestmemecoin281 {
            top: 6px;
            left: -24px;
            width: 137px;
            height: 137px;
            position: absolute;
            transition: 0.3s;
            text-decoration: none;
          }
          .baspage-iamthebestmemecoin281:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .baspage-twitter {
            top: 456px;
            left: 1101px;
            width: 90.30754089355469px;
            height: 92.06108093261719px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .baspage-link6 {
            display: contents;
          }
          .baspage-rectangle92 {
            top: 0px;
            left: 0px;
            width: 112px;
            height: 112px;
            position: absolute;
            border-radius: 17px;
            text-decoration: none;
          }
          .baspage-rectangle102 {
            top: 0.8767722249031067px;
            left: 1.753544569015503px;
            width: 110px;
            height: 110px;
            position: absolute;
            border-radius: 17px;
          }
          .baspage-link7 {
            display: contents;
          }
          .baspage-iamthebestmemecoin241 {
            top: -4px;
            left: -8px;
            width: 137px;
            height: 137px;
            position: absolute;
            transition: 0.3s;
            text-decoration: none;
          }
          .baspage-iamthebestmemecoin241:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .baspage-tape {
            left: -200px;
            right: 50px;
            width: 1177px;
            bottom: 0px;
            height: 1019px;
            position: absolute;
            object-fit: cover;
          }
          .baspage-root-class-name {
            left: 199px;
            bottom: -3px;
            position: absolute;
          }
          .baspage-root-class-name1 {
            fill: var(--dl-color-theme-neutral-dark);
            left: 191px;
            color: rgba(25, 24, 24, 0);
            bottom: -2111px;
            position: absolute;
          }

          @media (max-width: 1600px) {
            .baspage-container {
              width: 1600px;
            }
            .baspage-pp {
              right: 60.453125px;
              bottom: 178px;
            }
            .baspage-wp {
              right: 74px;
              bottom: 117px;
            }
            .baspage-mail {
              top: 702px;
              left: 825px;
              right: 0px;
              border-color: var(--dl-color-theme-neutral-dark);
              border-width: 0px;
            }
            .baspage-j-oin-wit {
              top: 468px;
              right: -15px;
            }
            .baspage-text4 {
              right: -14px;
              width: auto;
              bottom: -22px;
            }
            .baspage-text5 {
              right: -18px;
              width: auto;
              bottom: -20px;
            }
            .baspage-whisker-big {
              top: 376px;
              right: 168px;
            }
            .baspage-text6 {
              top: -86px;
              left: -62px;
              font-size: 150px;
            }
            .baspage-text7 {
              top: -93px;
              left: -54px;
              font-size: 150px;
            }
            .baspage-telegram {
              top: 566px;
              left: 1103px;
              width: 101px;
              height: 99px;
              background-color: rgba(81, 219, 79, 0);
            }
            .baspage-rectangle9 {
              top: -8px;
              left: -5px;
            }
            .baspage-rectangle10 {
              top: -5px;
              left: -4px;
            }
            .baspage-iamthebestmemecoin251 {
              left: -5px;
              bottom: 0px;
            }
            .baspage-discord {
              top: 540px;
              right: 72px;
            }
            .baspage-twitter {
              top: 556px;
              left: 1243px;
              margin-top: 2px;
            }
            .baspage-iamthebestmemecoin241 {
              right: -3px;
              bottom: -9px;
            }
            .baspage-tape {
              top: 0px;
              left: 0px;
            }
            .baspage-root-class-name {
              left: -44px;
              bottom: 1px;
            }
            .baspage-root-class-name1 {
              left: -40px;
              bottom: -2112px;
              position: absolute;
            }
          }
          @media (max-width: 1200px) {
            .baspage-container {
              width: 1200px;
            }
            .baspage-pp {
              top: 850px;
              right: 21px;
              bottom: 129px;
            }
            .baspage-wp {
              right: 31px;
              bottom: 80px;
            }
            .baspage-mail {
              top: 708px;
              left: 500px;
            }
            .baspage-j-oin-wit {
              top: 483px;
              right: -31px;
            }
            .baspage-text4 {
              top: -1px;
              left: 0px;
              right: 0px;
              margin: auto;
              font-size: 30px;
            }
            .baspage-text5 {
              top: -3px;
              left: 0px;
              right: 0px;
              margin: auto;
              font-size: 30px;
            }
            .baspage-whisker-big {
              top: 382px;
              right: -119px;
            }
            .baspage-text6 {
              top: -23px;
              left: -140px;
              font-size: 100px;
            }
            .baspage-text7 {
              top: -30px;
              left: -132px;
              font-size: 100px;
            }
            .baspage-telegram {
              top: 553px;
              left: 1050px;
              right: 93px;
            }
            .baspage-discord {
              top: 526px;
              left: 759px;
            }
            .baspage-twitter {
              top: 544px;
              left: 900px;
            }
            .baspage-tape {
              top: 350px;
              left: -27px;
              width: 785px;
              bottom: -14px;
              height: 679px;
            }
            .baspage-root-class-name1 {
              top: 585px;
              left: 27px;
            }
          }
          @media (max-width: 991px) {
            .baspage-container {
              width: 991px;
            }
            .baspage-pp {
              left: 700px;
              right: 101px;
              bottom: 189px;
            }
            .baspage-wp {
              top: 798px;
              right: 72px;
            }
            .baspage-mail {
              top: 695px;
              left: 596px;
              font-size: 25px;
            }
            .baspage-j-oin-wit {
              top: 491px;
              right: -36px;
            }
            .baspage-whisker-big {
              top: 408px;
              right: -125px;
            }
            .baspage-text7 {
              top: -27px;
              left: -136px;
            }
            .baspage-telegram {
              left: 830px;
              right: 47px;
              bottom: 28px;
            }
            .baspage-discord {
              top: 526px;
              left: 550px;
            }
            .baspage-iamthebestmemecoin281 {
              top: 6px;
              left: -25px;
            }
            .baspage-twitter {
              top: 546px;
              left: 681px;
            }
            .baspage-tape {
              top: 450px;
              left: -13px;
              width: 629px;
              bottom: -2px;
              height: 576px;
            }
            .baspage-root-class-name1 {
              top: 810px;
              left: -3px;
            }
          }
          @media (max-width: 767px) {
            .baspage-container {
              width: 767px;
            }
            .baspage-pp {
              top: 164px;
              left: 282px;
              right: 262px;
            }
            .baspage-wp {
              top: 117px;
              right: 281px;
            }
            .baspage-mail {
              top: 382px;
              left: -60px;
            }
            .baspage-j-oin-wit {
              top: 333px;
              right: 119px;
            }
            .baspage-whisker-big {
              top: 240px;
              right: 13px;
            }
            .baspage-telegram {
              left: 620px;
              right: 29px;
              bottom: 638px;
            }
            .baspage-discord {
              top: 658px;
              left: 630px;
              right: 14px;
            }
            .baspage-twitter {
              top: 815px;
              left: 616px;
              right: 0px;
              bottom: 115px;
            }
            .baspage-tape {
              top: 470px;
              width: 642px;
              height: 555px;
            }
            .baspage-root-class-name {
              left: 9px;
              bottom: 7px;
            }
            .baspage-root-class-name1 {
              top: 834px;
              left: -12px;
            }
          }
          @media (max-width: 479px) {
            .baspage-container {
              width: 479px;
            }
            .baspage-pp {
              top: -100px;
              left: 163px;
              margin: auto;
            }
            .baspage-text {
              top: -1px;
              left: -16px;
              color: rgb(0, 0, 0);
              font-size: 30px;
              font-family: Star Cartoon;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            .baspage-text1 {
              top: -3px;
              left: -14px;
              color: rgb(255, 255, 255);
              font-size: 30px;
              font-family: Star Cartoon;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            .baspage-wp {
              left: 0px;
              right: 0px;
              bottom: 541px;
              margin: auto;
            }
            .baspage-mail {
              top: 434px;
              left: -45px;
              height: 50px;
            }
            .baspage-j-oin-wit {
              top: 112px;
              right: -34px;
            }
            .baspage-whisker-big {
              top: 47px;
              left: 30px;
              right: 0px;
              width: 306px;
              height: 99px;
              margin: auto;
              align-items: center;
            }
            .baspage-text6 {
              left: 0px;
              right: 0px;
              margin: auto;
              font-size: 70px;
            }
            .baspage-text7 {
              left: 0px;
              right: 0px;
              margin: auto;
              font-size: 70px;
            }
            .baspage-telegram {
              top: 159px;
              left: 405px;
              right: 0px;
            }
            .baspage-rectangle9 {
              top: 10px;
              left: -57px;
              width: 90px;
              bottom: -2px;
              height: 90px;
            }
            .baspage-rectangle10 {
              top: 12px;
              left: -57px;
              width: 90px;
              bottom: -3px;
              height: 90px;
            }
            .baspage-iamthebestmemecoin251 {
              left: -56px;
              width: 80px;
              bottom: 2px;
              height: 70px;
            }
            .baspage-discord {
              top: 148px;
              left: 85px;
            }
            .baspage-rectangle91 {
              top: 22px;
              left: -14px;
              width: 90px;
              height: 90px;
            }
            .baspage-rectangle101 {
              right: 15px;
              width: 90px;
              bottom: 6px;
              height: 90px;
            }
            .baspage-iamthebestmemecoin281 {
              top: 19px;
              left: -18px;
              width: 100px;
              bottom: 3px;
              height: 100px;
            }
            .baspage-twitter {
              top: 170px;
              left: 208px;
            }
            .baspage-rectangle92 {
              top: -2px;
              left: 4px;
              right: 0px;
              width: 90px;
              height: 90px;
            }
            .baspage-rectangle102 {
              width: 90px;
              height: 90px;
            }
            .baspage-iamthebestmemecoin241 {
              top: 5px;
              left: 2px;
              width: 100px;
              height: 100px;
            }
            .baspage-tape {
              left: -4px;
              width: 479px;
              bottom: 0px;
              height: 545px;
              position: 0px;
              margin-top: 10px;
            }
            .baspage-root-class-name {
              left: -1px;
              bottom: 6px;
            }
            .baspage-root-class-name1 {
              top: 556px;
              left: -6px;
            }
          }
        `}
      </style>
    </>
  )
}

Baspage.defaultProps = {
  rectangle9Src2: '/images/rectangle91302-u1d-200h.png',
  rootClassName: '',
  rectangle10Alt: 'Rectangle101302',
  rectangle10Alt1: 'Rectangle101302',
  linkIAMTHEBESTMEMECOIN241: 'https://twitter.com/Whisker_Witcoin',
  rectangle10Src2: '/images/rectangle101302-h5oa-200w.png',
  rectangle9Alt1: 'Rectangle91302',
  text5: 'WHISKER',
  linkRectangle10: 'https://t.me/+fcFRXCCEWPI0Y2U0',
  text2: 'JOIN THE $WIT COMMUNITY',
  rectangle9Alt: 'Rectangle91302',
  rectangle9Src: '/images/rectangle91302-vzee-200w.png',
  rectangle9Alt2: 'Rectangle91302',
  text: 'WHITEPAPER',
  iAMTHEBESTMEMECOIN251Alt: 'IAMTHEBESTMEMECOIN2511302',
  tAPEAlt: 'image',
  text4: 'WHISKER',
  text3: 'JOIN THE $WIT COMMUNITY',
  rectangle10Alt2: 'Rectangle101302',
  rectangle10Src1: '/images/rectangle101302-3d4h-200w.png',
  iAMTHEBESTMEMECOIN251Src: '/images/iamthebestmemecoin2511302-2nap-200h.png',
  rectangle10Src: '/images/rectangle101302-8iel-200h.png',
  iAMTHEBESTMEMECOIN281Alt: 'IAMTHEBESTMEMECOIN2811302',
  tAPESrc: '/whisker%20(31)-1100h.png',
  iAMTHEBESTMEMECOIN241Src: '/images/iamthebestmemecoin2411302-d2e9-200h.png',
  text1: 'WHITEPAPER',
  linkIAMTHEBESTMEMECOIN281: 'https://discord.com/invite/unjG6yz4T3',
  linkRectangle9: 'https://twitter.com/Whisker_Witcoin',
  linkIAMTHEBESTMEMECOIN251: 'https://t.me/+fcFRXCCEWPI0Y2U0',
  rectangle9Src1: '/images/rectangle91302-vzee-200w.png',
  linkRectangle101: 'https://discord.com/invite/unjG6yz4T3',
  mail: 'Contact@witwhisker.com',
  iAMTHEBESTMEMECOIN281Src: '/images/iamthebestmemecoin2811302-ot5f-200w.png',
  iAMTHEBESTMEMECOIN241Alt: 'IAMTHEBESTMEMECOIN2411302',
}

Baspage.propTypes = {
  rectangle9Src2: PropTypes.string,
  rootClassName: PropTypes.string,
  rectangle10Alt: PropTypes.string,
  rectangle10Alt1: PropTypes.string,
  linkIAMTHEBESTMEMECOIN241: PropTypes.string,
  rectangle10Src2: PropTypes.string,
  rectangle9Alt1: PropTypes.string,
  text5: PropTypes.string,
  linkRectangle10: PropTypes.string,
  text2: PropTypes.string,
  rectangle9Alt: PropTypes.string,
  rectangle9Src: PropTypes.string,
  rectangle9Alt2: PropTypes.string,
  text: PropTypes.string,
  iAMTHEBESTMEMECOIN251Alt: PropTypes.string,
  tAPEAlt: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  rectangle10Alt2: PropTypes.string,
  rectangle10Src1: PropTypes.string,
  iAMTHEBESTMEMECOIN251Src: PropTypes.string,
  rectangle10Src: PropTypes.string,
  iAMTHEBESTMEMECOIN281Alt: PropTypes.string,
  tAPESrc: PropTypes.string,
  iAMTHEBESTMEMECOIN241Src: PropTypes.string,
  text1: PropTypes.string,
  linkIAMTHEBESTMEMECOIN281: PropTypes.string,
  linkRectangle9: PropTypes.string,
  linkIAMTHEBESTMEMECOIN251: PropTypes.string,
  rectangle9Src1: PropTypes.string,
  linkRectangle101: PropTypes.string,
  mail: PropTypes.string,
  iAMTHEBESTMEMECOIN281Src: PropTypes.string,
  iAMTHEBESTMEMECOIN241Alt: PropTypes.string,
}

export default Baspage
