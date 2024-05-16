import React from 'react'

import PropTypes from 'prop-types'

const TOKENOMICS = (props) => {
  return (
    <>
      <div
        id="TOKENOMICS"
        className={`tokenomics-tokenomics ${props.rootClassName} `}
      >
        <div className="tokenomics-group11">
          <img
            alt={props.rectangle3Alt}
            src={props.rectangle3Src}
            className="tokenomics-rectangle3"
          />
          <img
            alt={props.rectangle4Alt}
            src={props.rectangle4Src}
            className="tokenomics-rectangle4"
          />
          <img
            alt={props.tokenmics1Alt}
            src={props.tokenmics1Src}
            className="tokenomics-tokenmics1"
          />
          <div className="tokenomics-presale">
            <img
              alt={props.ellipse1Alt}
              src={props.ellipse1Src}
              className="tokenomics-ellipse1"
            />
            <span className="tokenomics-text">{props.text1}</span>
            <span className="tokenomics-text01">{props.text2}</span>
            <span className="tokenomics-text02">{props.text3}</span>
            <span className="tokenomics-text03">{props.text4}</span>
          </div>
          <div className="tokenomics-dev">
            <img
              alt={props.ellipse1Alt1}
              src={props.ellipse1Src1}
              className="tokenomics-ellipse11"
            />
            <span className="tokenomics-text04">{props.text5}</span>
            <span className="tokenomics-text05">{props.text6}</span>
            <span className="tokenomics-text06">{props.text7}</span>
            <span className="tokenomics-text07">{props.text8}</span>
          </div>
          <div className="tokenomics-cex">
            <img
              alt={props.ellipse1Alt2}
              src={props.ellipse1Src2}
              className="tokenomics-ellipse12"
            />
            <span className="tokenomics-text08">{props.text9}</span>
            <span className="tokenomics-text09">{props.text10}</span>
            <span className="tokenomics-text10">{props.text11}</span>
            <span className="tokenomics-text11">{props.text12}</span>
          </div>
          <div className="tokenomics-airdrop">
            <img
              alt={props.ellipse1Alt3}
              src={props.ellipse1Src3}
              className="tokenomics-ellipse13"
            />
            <span className="tokenomics-text12">{props.text13}</span>
            <span className="tokenomics-text13">{props.text14}</span>
          </div>
          <div className="tokenomics-m-arketing">
            <img
              alt={props.ellipse1Alt4}
              src={props.ellipse1Src4}
              className="tokenomics-ellipse14"
            />
            <span className="tokenomics-text14">{props.text15}</span>
            <span className="tokenomics-text15">{props.text16}</span>
          </div>
          <div className="tokenomics-game">
            <img
              alt={props.ellipse1Alt5}
              src={props.ellipse1Src5}
              className="tokenomics-ellipse15"
            />
            <span className="tokenomics-text16">{props.text17}</span>
            <span className="tokenomics-text17">{props.text18}</span>
          </div>
          <div className="tokenomics-forlp">
            <span className="tokenomics-text18">{props.text19}</span>
            <span className="tokenomics-text19">{props.text20}</span>
            <img
              alt={props.ellipse1Alt6}
              src={props.ellipse1Src6}
              className="tokenomics-ellipse16"
            />
          </div>
          <span className="tokenomics-text20">{props.text}</span>
        </div>
      </div>
      <style jsx>
        {`
          .tokenomics-tokenomics {
            width: 1381px;
            height: 753px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .tokenomics-group11 {
            top: -20px;
            left: 0px;
            right: 0px;
            width: 1418px;
            height: 828px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-end;
            flex-shrink: 1;
            justify-content: flex-start;
          }
          .tokenomics-rectangle3 {
            top: 17px;
            left: 48px;
            width: 1325px;
            height: 775px;
            margin: auto;
            position: absolute;
            border-radius: 34px;
          }
          .tokenomics-rectangle4 {
            top: 28px;
            left: 60px;
            width: 1300px;
            height: 750px;
            margin: auto;
            position: absolute;
            border-radius: 34px;
          }
          .tokenomics-tokenmics1 {
            top: 106px;
            left: 69px;
            width: 560px;
            height: 562px;
            position: absolute;
          }
          .tokenomics-presale {
            top: 187px;
            left: 700px;
            width: 368px;
            height: 94px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .tokenomics-ellipse1 {
            top: 8px;
            left: 0px;
            width: 19px;
            height: 19px;
            position: absolute;
          }
          .tokenomics-text {
            top: 2px;
            left: 17px;
            color: rgb(0, 0, 0);
            width: 350px;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text01 {
            top: 0px;
            left: 18px;
            color: rgb(255, 255, 255);
            width: 350px;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text02 {
            left: 35px;
            color: rgb(255, 255, 255);
            width: 200px;
            bottom: 23px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text03 {
            left: 40px;
            color: rgb(255, 255, 255);
            width: 200px;
            bottom: 0px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-dev {
            top: 417px;
            left: 700px;
            width: 387.5px;
            height: 94px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .tokenomics-ellipse11 {
            top: 8px;
            left: 0px;
            width: 19px;
            height: 19px;
            position: absolute;
          }
          .tokenomics-text04 {
            top: 2px;
            left: 31px;
            color: rgb(0, 0, 0);
            width: auto;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text05 {
            top: 0px;
            left: 32px;
            color: #ffffff;
            width: AUTO;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text06 {
            top: 44px;
            left: 61px;
            color: rgb(255, 255, 255);
            width: auto;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text07 {
            left: 60px;
            color: rgb(255, 255, 255);
            width: auto;
            bottom: 0px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-cex {
            top: 303px;
            left: 700px;
            width: 403.796875px;
            height: 91.03125px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .tokenomics-ellipse12 {
            top: 7.875px;
            left: 0px;
            width: 20px;
            height: 19px;
            position: absolute;
          }
          .tokenomics-text08 {
            top: 1px;
            left: 37.09375px;
            color: rgb(0, 0, 0);
            width: auto;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text09 {
            top: 0px;
            left: 39.09375px;
            color: rgb(255, 255, 255);
            width: auto;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text10 {
            left: 53.09375px;
            color: rgb(255, 255, 255);
            width: 150px;
            bottom: 22px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text11 {
            left: 4.09375px;
            color: rgb(255, 255, 255);
            width: 350px;
            bottom: 0px;
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-airdrop {
            top: 525px;
            right: 81px;
            width: 654px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .tokenomics-ellipse13 {
            top: 8px;
            left: 16px;
            width: 20px;
            height: 19px;
            position: absolute;
          }
          .tokenomics-text12 {
            top: 1px;
            left: 0px;
            color: rgb(0, 0, 0);
            width: 500px;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text13 {
            top: 0px;
            left: 2px;
            color: rgb(255, 255, 255);
            width: 500px;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-m-arketing {
            top: 594px;
            left: 700px;
            width: 359.328125px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .tokenomics-ellipse14 {
            top: 9px;
            left: 0px;
            width: 20px;
            height: 19px;
            position: absolute;
          }
          .tokenomics-text14 {
            top: 1px;
            left: 33.390625px;
            color: rgb(0, 0, 0);
            width: auto;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text15 {
            top: 0px;
            left: 35.390625px;
            color: rgb(255, 255, 255);
            width: auto;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-game {
            top: 658px;
            left: 700px;
            width: 467px;
            height: var(--dl-size-size-small);
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .tokenomics-ellipse15 {
            top: 8px;
            left: 0px;
            width: 20px;
            height: 19px;
            position: absolute;
          }
          .tokenomics-text16 {
            top: 1px;
            left: 15px;
            color: rgb(0, 0, 0);
            width: 450px;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text17 {
            top: 0px;
            left: 17px;
            color: rgb(255, 255, 255);
            width: 450px;
            height: 100%;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-forlp {
            left: 700px;
            width: 264px;
            bottom: 64px;
            height: 40px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .tokenomics-text18 {
            top: 1px;
            left: 4px;
            color: rgb(0, 0, 0);
            width: 260px;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-text19 {
            top: 0px;
            left: 35px;
            color: rgb(255, 255, 255);
            width: auto;
            height: auto;
            position: absolute;
            font-size: 35px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-ellipse16 {
            top: 8px;
            left: 0px;
            width: 20px;
            height: 19px;
            position: absolute;
          }
          .tokenomics-text20 {
            top: 76px;
            left: 691px;
            color: rgb(61, 31, 16);
            width: 450px;
            height: auto;
            position: absolute;
            font-size: 55px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .tokenomics-root-class-name {
            top: 5095px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
          }

          @media (max-width: 1600px) {
            .tokenomics-text04 {
              top: 2px;
              left: 14px;
              right: -14px;
              width: 100%;
            }
          }
          @media (max-width: 1200px) {
            .tokenomics-group11 {
              top: -2px;
              left: 0px;
              right: 0px;
              width: 1200px;
              margin: auto;
            }
            .tokenomics-rectangle3 {
              top: 41px;
              right: 51px;
              width: 1100px;
              height: 600px;
              position: absolute;
            }
            .tokenomics-rectangle4 {
              top: 53px;
              left: 0px;
              right: 0px;
              width: 1080px;
              height: 580px;
              margin: auto;
            }
            .tokenomics-tokenmics1 {
              top: 112px;
              left: 79px;
              width: 445px;
              height: 446px;
              margin: auto;
            }
            .tokenomics-presale {
              top: 167px;
              left: 596px;
            }
            .tokenomics-ellipse1 {
              top: -8px;
              left: 6px;
            }
            .tokenomics-text {
              top: -10px;
              left: -25px;
              font-size: 25px;
              font-weight: normal;
            }
            .tokenomics-text01 {
              top: -12px;
              left: -23px;
              font-size: 25px;
            }
            .tokenomics-text02 {
              top: 21px;
              left: 43px;
            }
            .tokenomics-text03 {
              top: 44px;
              left: 48px;
            }
            .tokenomics-dev {
              top: 620px;
              left: 818px;
              right: -7px;
              bottom: 110px;
              position: absolute;
            }
            .tokenomics-ellipse11 {
              top: -124px;
              left: -218px;
            }
            .tokenomics-text04 {
              top: -127px;
              left: -250px;
              font-size: 25px;
            }
            .tokenomics-text05 {
              top: -128px;
              left: -182px;
              font-size: 25px;
            }
            .tokenomics-text06 {
              top: -87px;
              left: -161px;
            }
            .tokenomics-text07 {
              top: -59px;
              left: -162px;
            }
            .tokenomics-cex {
              top: 273px;
              left: 569px;
            }
            .tokenomics-ellipse12 {
              top: -31px;
              left: 31px;
            }
            .tokenomics-text08 {
              top: -34px;
              left: 69px;
              font-size: 25px;
            }
            .tokenomics-text09 {
              top: -35px;
              left: 71px;
              font-size: 25px;
            }
            .tokenomics-text10 {
              top: -2px;
              left: 86px;
            }
            .tokenomics-text11 {
              top: 22px;
              left: 36px;
            }
            .tokenomics-airdrop {
              top: 325px;
              right: -38px;
            }
            .tokenomics-text12 {
              top: 6px;
              left: -85px;
              width: 560px;
              font-size: 25px;
            }
            .tokenomics-text13 {
              top: 5px;
              left: -83px;
              width: 560px;
              font-size: 25px;
            }
            .tokenomics-m-arketing {
              top: 562px;
              left: 447px;
            }
            .tokenomics-ellipse14 {
              top: -188px;
              left: 153px;
            }
            .tokenomics-text14 {
              top: -193px;
              right: -222px;
              font-size: 25px;
            }
            .tokenomics-text15 {
              top: -194px;
              right: -224px;
              font-size: 25px;
            }
            .tokenomics-game {
              top: 409px;
              left: 546px;
            }
            .tokenomics-ellipse15 {
              top: 4px;
              left: 54px;
            }
            .tokenomics-text16 {
              font-size: 25px;
            }
            .tokenomics-text17 {
              font-size: 25px;
            }
            .tokenomics-forlp {
              left: 757px;
              bottom: 204px;
            }
            .tokenomics-text18 {
              top: -139px;
              left: -173px;
              font-size: 25px;
            }
            .tokenomics-text19 {
              top: -140px;
              left: -113px;
              font-size: 25px;
            }
            .tokenomics-ellipse16 {
              top: -136px;
              left: -157px;
            }
            .tokenomics-text20 {
              top: 77px;
              left: 600px;
              right: 194px;
            }
            .tokenomics-root-class-name1 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .tokenomics-group11 {
              top: -21px;
              left: 54px;
              width: 887px;
              height: 747px;
              margin-left: 0px;
              margin-right: 0px;
            }
            .tokenomics-rectangle3 {
              left: 0px;
              width: 877px;
              bottom: -11px;
              height: 687px;
            }
            .tokenomics-rectangle4 {
              top: 59px;
              left: 8px;
              right: 11px;
              width: 862px;
              height: 674px;
              margin-right: 0px;
              padding-bottom: 0px;
            }
            .tokenomics-tokenmics1 {
              top: 177px;
              left: 13px;
              width: 330px;
              height: 326px;
            }
            .tokenomics-presale {
              top: 221px;
              left: 328px;
            }
            .tokenomics-ellipse1 {
              top: -4px;
              left: 13px;
            }
            .tokenomics-text {
              top: -8px;
              left: -24px;
            }
            .tokenomics-text01 {
              top: -10px;
              left: -23px;
            }
            .tokenomics-text02 {
              top: 25px;
              left: 35px;
            }
            .tokenomics-text03 {
              left: 45px;
              bottom: 27px;
            }
            .tokenomics-dev {
              top: 442px;
              left: 560px;
              right: -58px;
            }
            .tokenomics-text04 {
              top: -124px;
              left: -250px;
            }
            .tokenomics-text05 {
              top: -126px;
              left: -183px;
            }
            .tokenomics-text06 {
              top: -87px;
              left: -175px;
            }
            .tokenomics-text07 {
              top: -59px;
              left: -176px;
            }
            .tokenomics-cex {
              top: 465px;
              left: 310px;
            }
            .tokenomics-text10 {
              top: 6px;
              left: 70px;
            }
            .tokenomics-text11 {
              top: 34px;
              left: 20px;
            }
            .tokenomics-airdrop {
              top: 610px;
              left: 46px;
              bottom: 101px;
            }
            .tokenomics-ellipse13 {
              top: 3px;
              left: 4px;
            }
            .tokenomics-text12 {
              top: 0px;
              left: 33px;
              width: var(--dl-size-size-xxlarge);
            }
            .tokenomics-text13 {
              top: -1px;
              left: 35px;
              width: var(--dl-size-size-xxlarge);
            }
            .tokenomics-m-arketing {
              top: 650px;
              left: 18px;
              bottom: 63px;
            }
            .tokenomics-ellipse14 {
              top: 5px;
              left: 33px;
              margin: auto;
            }
            .tokenomics-text14 {
              top: 3px;
              left: 0px;
              right: 0px;
              margin: auto;
            }
            .tokenomics-text15 {
              top: 2px;
              left: 2px;
              right: -1px;
              width: 100%;
              margin: auto;
            }
            .tokenomics-game {
              top: 519px;
              left: 12px;
            }
            .tokenomics-ellipse15 {
              top: 40px;
              left: 38px;
              bottom: -15px;
            }
            .tokenomics-text16 {
              top: 38px;
              left: -4px;
              bottom: -21px;
              margin: auto;
            }
            .tokenomics-text17 {
              top: 37px;
              left: -3px;
              bottom: -37px;
              margin: auto;
            }
            .tokenomics-forlp {
              right: -32px;
              width: 167px;
              bottom: -101px;
              padding-left: 0px;
            }
            .tokenomics-text18 {
              top: -118px;
              left: -730px;
            }
            .tokenomics-text19 {
              top: -119px;
              left: -670px;
            }
            .tokenomics-ellipse16 {
              top: -116px;
              left: -706px;
            }
            .tokenomics-text20 {
              top: 95px;
              left: 203px;
            }
          }
          @media (max-width: 767px) {
            .tokenomics-group11 {
              top: -13px;
              left: 0px;
              right: 0px;
              width: 767px;
              margin: auto;
            }
            .tokenomics-rectangle3 {
              top: 37px;
              left: -12px;
              right: -4px;
              width: 724px;
              height: 706px;
            }
            .tokenomics-rectangle4 {
              left: 0px;
              right: 40px;
              width: 700px;
              bottom: 6px;
              height: 700px;
            }
            .tokenomics-tokenmics1 {
              top: 135px;
              left: 63px;
              width: 298px;
              height: 298px;
            }
            .tokenomics-presale {
              top: 169px;
              left: 350px;
              margin: auto;
            }
            .tokenomics-ellipse1 {
              top: 5px;
              left: 3px;
            }
            .tokenomics-text {
              top: 4px;
              left: -28px;
            }
            .tokenomics-text01 {
              top: 2px;
              left: -27px;
            }
            .tokenomics-text02 {
              top: 46px;
              left: 27px;
            }
            .tokenomics-text03 {
              top: 65px;
              left: 32px;
              bottom: 5px;
            }
            .tokenomics-dev {
              top: 250px;
              left: 572px;
              right: -189px;
              margin: auto;
            }
            .tokenomics-text04 {
              top: -127px;
              left: -249px;
            }
            .tokenomics-text06 {
              top: -84px;
              left: -160px;
            }
            .tokenomics-text07 {
              top: -56px;
              left: -160px;
            }
            .tokenomics-cex {
              top: 423px;
              left: 320px;
              right: 53px;
            }
            .tokenomics-text10 {
              top: 6px;
              left: 88px;
            }
            .tokenomics-text11 {
              top: 36px;
              left: 39px;
            }
            .tokenomics-airdrop {
              top: 506px;
              left: 78px;
            }
            .tokenomics-text12 {
              top: 1px;
              left: 37px;
              width: auto;
              text-align: left;
            }
            .tokenomics-text13 {
              top: 0px;
              left: 39px;
              width: auto;
              text-align: left;
            }
            .tokenomics-m-arketing {
              top: 558px;
              left: 79px;
              width: 125px;
              margin-right: 0px;
            }
            .tokenomics-ellipse14 {
              top: 4px;
              left: 4px;
              margin: auto;
            }
            .tokenomics-text14 {
              top: 0px;
              left: 8px;
              width: var(--dl-size-size-xxlarge);
              margin: auto;
            }
            .tokenomics-text15 {
              top: 0px;
              left: 10px;
              width: var(--dl-size-size-xxlarge);
              margin: auto;
            }
            .tokenomics-game {
              top: 648px;
              left: 54px;
            }
            .tokenomics-ellipse15 {
              top: -36px;
              left: 30px;
            }
            .tokenomics-text16 {
              top: -39px;
              left: -21px;
            }
            .tokenomics-text17 {
              top: -115px;
              left: -19px;
            }
            .tokenomics-forlp {
              top: 653px;
              left: 111px;
            }
            .tokenomics-text18 {
              top: 0px;
              left: -56px;
              bottom: 0px;
              margin: auto;
            }
            .tokenomics-text19 {
              top: 0px;
              left: 4px;
              bottom: 0px;
              margin: auto;
            }
            .tokenomics-ellipse16 {
              top: 5px;
              left: -25px;
              margin: auto;
            }
            .tokenomics-text20 {
              top: 67px;
              left: 55px;
            }
          }
          @media (max-width: 479px) {
            .tokenomics-group11 {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 374px;
              bottom: 0px;
              height: 831px;
              margin: auto;
              margin-top: auto;
              padding-top: 0px;
              justify-content: center;
            }
            .tokenomics-rectangle3 {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 385px;
              bottom: 0px;
              height: 1024px;
              margin: auto;
            }
            .tokenomics-rectangle4 {
              top: 0px;
              left: 0px;
              right: 0px;
              width: 379px;
              bottom: 0px;
              height: 1019px;
              margin: auto;
            }
            .tokenomics-tokenmics1 {
              top: 20px;
              left: 41px;
              width: 299px;
              height: 299px;
              margin: auto;
            }
            .tokenomics-presale {
              top: 462px;
              left: 25px;
              right: -22px;
            }
            .tokenomics-ellipse1 {
              top: 10px;
              left: 16px;
              position: absolute;
            }
            .tokenomics-text {
              top: 9px;
              left: -19px;
            }
            .tokenomics-text01 {
              top: 7px;
              left: -18px;
            }
            .tokenomics-text02 {
              top: 51px;
              left: 73px;
              width: auto;
              margin: auto;
            }
            .tokenomics-text03 {
              left: 52px;
              width: 200px;
              bottom: -28px;
              height: var(--dl-size-size-small);
              margin: auto;
            }
            .tokenomics-dev {
              top: 520px;
              left: 35px;
              right: -55px;
            }
            .tokenomics-ellipse11 {
              top: 6px;
              left: 2px;
              margin: auto;
            }
            .tokenomics-text04 {
              top: 5px;
              left: -35px;
            }
            .tokenomics-text05 {
              top: 3px;
              left: 33px;
            }
            .tokenomics-text06 {
              top: 39px;
              left: -65px;
              right: 0px;
              width: auto;
              margin: auto;
              font-size: 15px;
              text-align: center;
            }
            .tokenomics-text07 {
              top: 64px;
              left: 55px;
              font-size: 15px;
              text-align: center;
            }
            .tokenomics-cex {
              top: 384px;
              left: 13px;
            }
            .tokenomics-text11 {
              top: 39px;
              left: 36px;
            }
            .tokenomics-airdrop {
              top: 840px;
              left: 30px;
              right: -2px;
              width: 341px;
              bottom: -42px;
              height: 59px;
            }
            .tokenomics-ellipse13 {
              top: 11px;
              left: 10px;
              margin: auto;
            }
            .tokenomics-text12 {
              top: 8px;
              left: 40px;
              width: auto;
              margin: auto;
            }
            .tokenomics-text13 {
              top: 6px;
              left: 42px;
              margin: auto;
            }
            .tokenomics-m-arketing {
              top: 670px;
              left: 39px;
              right: 6px;
              width: 327px;
              bottom: 85px;
            }
            .tokenomics-ellipse14 {
              top: 4px;
              left: 2px;
              margin: auto;
            }
            .tokenomics-text14 {
              top: -190px;
              left: -13px;
              right: 25px;
              width: 100%;
              bottom: -4px;
              height: 100%;
              margin: auto;
              margin-top: 190px;
            }
            .tokenomics-text15 {
              top: -190px;
              left: -11px;
              right: 50px;
              width: 100%;
              bottom: 50px;
              height: 100%;
              margin: auto;
              position: absolute;
              margin-top: 190px;
            }
            .tokenomics-game {
              top: 700px;
              left: 23px;
              bottom: 34px;
            }
            .tokenomics-ellipse15 {
              top: 2px;
              left: 17px;
              width: 21px;
              height: 20px;
              margin: auto;
            }
            .tokenomics-text16 {
              top: 40px;
              left: -39px;
              width: 100%;
              bottom: 0px;
              height: 100%;
              margin: auto;
            }
            .tokenomics-text17 {
              top: -1px;
              left: -75px;
              right: 0px;
              width: 100%;
              margin: auto;
            }
            .tokenomics-forlp {
              top: 800px;
              left: 16px;
              bottom: -17px;
            }
            .tokenomics-text18 {
              top: 9px;
              left: -3px;
              margin: auto;
            }
            .tokenomics-text19 {
              top: 7px;
              left: 45px;
              right: LEFT;
              width: 100%;
              bottom: -8px;
              height: 100%;
              margin: auto;
            }
            .tokenomics-ellipse16 {
              top: 11px;
              left: 25px;
              margin: auto;
            }
            .tokenomics-text20 {
              top: -56px;
              left: -34px;
              margin: auto;
              font-size: 40px;
            }
          }
        `}
      </style>
    </>
  )
}

TOKENOMICS.defaultProps = {
  text2: '30 % For Presale :',
  text3: '- 5% In Airdrop',
  ellipse1Alt6: 'Ellipse11303',
  rectangle4Alt: 'Rectangle41303',
  text12: '- 5% for Market Making',
  ellipse1Src4: '/images/ellipse11303-qgo-200h.png',
  ellipse1Alt2: 'Ellipse11303',
  text9: '15 % for Exchanges  :',
  tokenmics1Src: '/images/tokenmics11303-415e-600w.png',
  text14: '15 % for Airdrops(P2A)',
  text11: '- 10% for CEX',
  text20: '15 % for LP',
  text7: '- 2% Developer Whisker BETA',
  ellipse1Alt3: 'Ellipse11303',
  text19: '15 % for LP',
  ellipse1Src5: '/images/ellipse11303-dkx-200h.png',
  text4: '- 25% In Airdrop',
  rootClassName: '',
  text13: '15 % for Airdrops(P2A)',
  text10: '15 % for Exchanges :',
  ellipse1Src1: '/images/ellipse11303-3hb7-200h.png',
  text1: '30 % For Presale :',
  ellipse1Src: '/images/ellipse11303-5blc-200h.png',
  ellipse1Alt4: 'Ellipse11303',
  rectangle4Src: '/images/rectangle41303-bzfq-1100h.png',
  ellipse1Alt1: 'Ellipse11303',
  text18: '10 % for Whisker Game',
  text5: '10 % For Developer :',
  text15: '5 % for Marketing',
  text6: '10 % For Developer :',
  text16: '5 % for Marketing',
  text8: '- 8% Developer Whisker GAME',
  rectangle3Src: '/images/rectangle31302-zyqj-1100h.png',
  ellipse1Alt5: 'Ellipse11303',
  tokenmics1Alt: 'tokenmics11303',
  rectangle3Alt: 'Rectangle31302',
  ellipse1Src6: '/images/ellipse11303-bbve.svg',
  ellipse1Alt: 'Ellipse11303',
  text: 'TOKENOMICS : 1B',
  ellipse1Src2: '/images/ellipse11303-jvk-200h.png',
  text17: '10 % for Whisker Game',
  ellipse1Src3: '/images/ellipse11303-2lob-200h.png',
}

TOKENOMICS.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  ellipse1Alt6: PropTypes.string,
  rectangle4Alt: PropTypes.string,
  text12: PropTypes.string,
  ellipse1Src4: PropTypes.string,
  ellipse1Alt2: PropTypes.string,
  text9: PropTypes.string,
  tokenmics1Src: PropTypes.string,
  text14: PropTypes.string,
  text11: PropTypes.string,
  text20: PropTypes.string,
  text7: PropTypes.string,
  ellipse1Alt3: PropTypes.string,
  text19: PropTypes.string,
  ellipse1Src5: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text13: PropTypes.string,
  text10: PropTypes.string,
  ellipse1Src1: PropTypes.string,
  text1: PropTypes.string,
  ellipse1Src: PropTypes.string,
  ellipse1Alt4: PropTypes.string,
  rectangle4Src: PropTypes.string,
  ellipse1Alt1: PropTypes.string,
  text18: PropTypes.string,
  text5: PropTypes.string,
  text15: PropTypes.string,
  text6: PropTypes.string,
  text16: PropTypes.string,
  text8: PropTypes.string,
  rectangle3Src: PropTypes.string,
  ellipse1Alt5: PropTypes.string,
  tokenmics1Alt: PropTypes.string,
  rectangle3Alt: PropTypes.string,
  ellipse1Src6: PropTypes.string,
  ellipse1Alt: PropTypes.string,
  text: PropTypes.string,
  ellipse1Src2: PropTypes.string,
  text17: PropTypes.string,
  ellipse1Src3: PropTypes.string,
}

export default TOKENOMICS
