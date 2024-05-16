import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'
import TOKENOMICS from '../components/tokenomics'
import TeleportHQFooter from '../components/teleport-hq-footer'

const HomeFuild = (props) => {
  return (
    <>
      <div className="home-fuild-container">
        <Head>
          <title>exported project</title>
          <meta property="og:title" content="exported project" />
        </Head>
        <Navbar></Navbar>
        <div className="home-fuild-hero">
          <img
            alt="image"
            src="/Homepage/back%201%20(2)-1500w.png"
            className="home-fuild-backtele"
          />
          <img
            alt="image"
            src="/Homepage/whisker%20(36)-1500w.png"
            className="home-fuild-back"
          />
          <img
            alt="image"
            src="/Homepage/design%20sans%20titre%20(8)%2021-1500w.png"
            className="home-fuild-herbe"
          />
          <img
            alt="image"
            src="/Homepage/design%20sans%20titre%20(8)%201%20(1)-1500w.png"
            className="home-fuild-herbetele"
          />
          <img
            alt="image"
            src="/whisker-beta-15-05-2024-1500w.png"
            className="home-fuild-whisker-beta"
          />
          <img
            alt="image"
            src="/Homepage/nuage%201-1500w.png"
            className="home-fuild-nuage"
          />
        </div>
        <div className="home-fuild-section1">
          <div className="home-fuild-whiskers">
            <div className="home-fuild-whisker1">
              <h1 className="home-fuild-text">MINT YOUR NFT</h1>
              <span className="home-fuild-text01">
                Whisker plans to create 9  collections for a total  of 13,900
                NFTs at the end of  the game cycle.
              </span>
              <Link href="/marketplace">
                <a className="home-fuild-link">
                  <span className="home-fuild-text02">MINT</span>
                </a>
              </Link>
            </div>
            <div className="home-fuild-whisker2">
              <h1 className="home-fuild-text03">PLAY TO AIRDROP</h1>
              <span className="home-fuild-text04">
                <span>15% of our supply will be distributed</span>
                <br></br>
                <span> to the player.</span>
                <br></br>
                <br></br>
                <span>NFTs are GamePasses.</span>
                <br></br>
                <span>Travel to 9 different eras to</span>
                <br></br>
                <span> reap maximum winnings!</span>
              </span>
              <Link href="/marketplace">
                <a className="home-fuild-link1">
                  <span className="home-fuild-text15">PLAY</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="home-fuild-etager">
            <img
              alt="image"
              src="/Homepage/etager%202-1500w.png"
              className="home-fuild-image"
            />
            <div className="home-fuild-container1">
              <img
                alt="image"
                src="/whisker%20(29)-200h.png"
                className="home-fuild-image1"
              />
              <img
                alt="image"
                src="/whisker%20(29)-200h.png"
                className="home-fuild-image2"
              />
              <img
                alt="image"
                src="/whisker%20(29)-200h.png"
                className="home-fuild-image3"
              />
              <img
                alt="image"
                src="/whisker%20(29)-200h.png"
                className="home-fuild-image4"
              />
              <img
                alt="image"
                src="/whisker%20(29)-200h.png"
                className="home-fuild-image5"
              />
            </div>
          </div>
        </div>
        <div className="home-fuild-section2">
          <div className="home-fuild-container2">
            <img
              alt="image"
              src="/Homepage/what-4600h.png"
              className="home-fuild-image6"
            />
            <img
              alt="image"
              src="/Homepage/old-4600h.png"
              className="home-fuild-image7"
            />
          </div>
          <div className="home-fuild-container3">
            <div className="home-fuild-container4">
              <span className="home-fuild-text16">
                <span>Cat news</span>
              </span>
              <animate-on-reveal
                animation="none"
                duration="300ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <a
                  href="https://medium.com/@witcoinwhisker"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    alt="pancartediught11302"
                    src="/images/pancartediught11302-100g-800w.png"
                    data-thq-animate-on-reveal="true"
                    className="home-fuild-pancartediught1"
                  />
                </a>
              </animate-on-reveal>
            </div>
            <animate-on-reveal
              animation="bounceOutRight"
              duration="500ms"
              delay="0s"
              direction="normal"
              easing="linear"
              iteration="1"
            >
              <a
                href="https://witwhisker.com/FAQ/en/faq.html"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  data-thq-animate-on-reveal="true"
                  className="home-fuild-group10"
                >
                  <img
                    alt="IAMTHEBESTMEMECOIN1511302"
                    src="/images/iamthebestmemecoin1511302-gig-300h.png"
                    className="home-fuild-iamthebestmemecoin151"
                  />
                  <span className="home-fuild-text18">FAQ</span>
                </div>
              </a>
            </animate-on-reveal>
          </div>
          <TOKENOMICS rootClassName="tokenomics-root-class-name1"></TOKENOMICS>
        </div>
        <div id="TOK" className="home-fuild-bar"></div>
        <div className="home-fuild-low-page">
          <div id="RD" className="home-fuild-cards-container">
            <div className="home-fuild-card">
              <span className="home-fuild-text19">Q1</span>
              <div className="home-fuild-content">
                <span className="home-fuild-text20">
                  <span>-Develop our different networks</span>
                </span>
                <span className="home-fuild-text22">
                  <span>-Creation Whisker BETA</span>
                </span>
                <span className="home-fuild-text24">
                  <span>-Release of our first NFT collection</span>
                </span>
                <span className="home-fuild-text26">
                  <span>-Launch our Presale to raise  between1 </span>
                  <span>and 4 Million</span>
                </span>
              </div>
            </div>
            <div className="home-fuild-card1">
              <span className="home-fuild-text29">Q3</span>
              <div className="home-fuild-frame5">
                <span className="home-fuild-text30">
                  <span>-Creation Whisker GAME</span>
                </span>
                <span className="home-fuild-text32">
                  <span>
                    -Strategic partnership with video  game institutions.
                  </span>
                </span>
                <span className="home-fuild-text34">
                  <span>-Growing in the metaverse</span>
                </span>
              </div>
            </div>
            <div className="home-fuild-card2">
              <span className="home-fuild-text36">Q2</span>
              <div className="home-fuild-frame51">
                <span className="home-fuild-text37">
                  <span>- Collect strategic partnerships  with memecoin</span>
                </span>
                <span className="home-fuild-text39">
                  <span>- Complete all 9 Whisker BETA  worlds</span>
                </span>
                <span className="home-fuild-text41">
                  <span>-Finish all 9 3D NFT collections</span>
                </span>
              </div>
            </div>
          </div>
          <div id="SOC" className="home-fuild-low-page1">
            <img
              alt="image"
              src="/whisker%20taupe-1000h.png"
              className="home-fuild-taupe"
            />
            <div className="home-fuild-bigwhisker">
              <span className="home-fuild-text43">
                <span>WHISKER</span>
              </span>
            </div>
            <span className="home-fuild-text45">JOIN THE $WIT COMMUNITY</span>
            <div className="home-fuild-group5">
              <a
                href="https://twitter.com/Whisker_Witcoin"
                target="_blank"
                rel="noreferrer noopener"
                className="home-fuild-link4"
              >
                <div className="home-fuild-x">
                  <img
                    alt="IAMTHEBESTMEMECOIN241347"
                    src="/iamthebestmemecoin241347-zx2g-200h.png"
                    className="home-fuild-iamthebestmemecoin241"
                  />
                </div>
              </a>
              <a
                href="https://discord.com/invite/unjG6yz4T3"
                target="_blank"
                rel="noreferrer noopener"
                className="home-fuild-link5"
              >
                <div className="home-fuild-discord">
                  <img
                    alt="IAMTHEBESTMEMECOIN281343"
                    src="/iamthebestmemecoin281343-np7w-200h.png"
                    className="home-fuild-iamthebestmemecoin281"
                  />
                </div>
              </a>
              <a
                href="https://t.me/+fcFRXCCEWPI0Y2U0"
                target="_blank"
                rel="noreferrer noopener"
                className="home-fuild-link6"
              >
                <div className="home-fuild-telegram">
                  <img
                    alt="IAMTHEBESTMEMECOIN251345"
                    src="/iamthebestmemecoin251345-t6-200h.png"
                    className="home-fuild-iamthebestmemecoin251"
                  />
                </div>
              </a>
            </div>
            <a
              href="mailto:contact@witwhisker.com?subject=For the best GameFi Project On BASE"
              className="home-fuild-text46"
            >
              Contact@WitWhisker.com
            </a>
            <div className="home-fuild-group6">
              <Link href="/privacy-policy">
                <a className="home-fuild-link7">
                  <span>PrivacyPolicy</span>
                </a>
              </Link>
              <a
                href="https://witwhisker.com/PDFWP.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="home-fuild-text49"
              >
                <span>WhitePaper</span>
              </a>
              <span className="home-fuild-text51">
                <span>Terms of Use</span>
              </span>
            </div>
          </div>
        </div>
        <TeleportHQFooter></TeleportHQFooter>
      </div>
      <style jsx>
        {`
          .home-fuild-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #3a1e10;
          }
          .home-fuild-hero {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-fuild-backtele {
            width: var(--dl-size-size-xsmall);
            height: auto;
            opacity: 0;
            object-fit: cover;
            margin-bottom: -1300px;
          }
          .home-fuild-back {
            width: 100%;
            height: auto;
            margin-top: 650px;
            object-fit: cover;
          }
          .home-fuild-herbe {
            width: 100%;
            margin-top: -700px;
            object-fit: cover;
            animation-name: shakeY;
            animation-delay: 0s;
            animation-duration: 20000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-fuild-herbetele {
            width: var(--dl-size-size-xsmall);
            height: auto;
            opacity: 0;
            margin-top: -1550px;
            object-fit: cover;
          }
          .home-fuild-whisker-beta {
            width: 100%;
            margin-top: 300px;
            object-fit: cover;
            padding-top: 100px;
            padding-left: 100px;
            padding-right: 100px;
            animation-name: shakeX;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 2000;
            animation-timing-function: ease;
          }
          .home-fuild-nuage {
            width: 100%;
            height: auto;
            margin-top: -1300px;
            object-fit: cover;
            animation-name: shakeY;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-fuild-section1 {
            width: 100%;
            display: flex;
            margin-top: 500px;
            align-items: flex-start;
            margin-bottom: 0px;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/Homepage/underherobg-1500w.png');
            background-repeat: no-repeat;
            background-position: top;
          }
          .home-fuild-whiskers {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: 100px;
            padding-right: 100px;
            justify-content: space-between;
          }
          .home-fuild-whisker1 {
            flex: 0 0 auto;
            width: 579px;
            display: flex;
            margin-top: 300px;
            align-items: center;
            padding-top: 150px;
            padding-left: 90px;
            padding-right: 90px;
            flex-direction: column;
            padding-bottom: 50px;
            background-size: cover;
            background-image: url('/Homepage/whisker%201-1500w.png');
          }
          .home-fuild-text {
            fill: #402818;
            color: rgb(64, 40, 24);
            font-size: 50px;
            font-family: 'Star Cartoon';
            margin-left: 20px;
          }
          .home-fuild-text01 {
            fill: #754223;
            color: #754223;
            font-size: 30px;
            margin-top: 51px;
            text-align: center;
            font-family: 'Star Cartoon';
            margin-left: 20px;
            margin-bottom: 81px;
          }
          .home-fuild-link {
            fill: #fff;
            color: rgb(255, 255, 255);
            display: flex;
            font-size: 45px;
            transition: 0.3s;
            font-family: 'Star Cartoon';
            line-height: 1;
            flex-direction: row;
            background-size: contain;
            text-decoration: none;
            background-image: url('/Homepage/bouton11-1100h.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-fuild-link:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: linear;
          }
          .home-fuild-text02 {
            margin-top: 20px;
            padding-top: 20px;
            padding-left: 35px;
            padding-right: 35px;
            padding-bottom: 20px;
          }
          .home-fuild-whisker2 {
            flex: 0 0 auto;
            width: 579px;
            display: flex;
            margin-top: 300px;
            align-items: center;
            padding-top: 150px;
            padding-left: 65px;
            padding-right: 65px;
            flex-direction: column;
            padding-bottom: 50px;
            background-size: cover;
            background-image: url('/Homepage/whisker%202-1500w.png');
          }
          .home-fuild-text03 {
            fill: #402818;
            color: rgb(64, 40, 24);
            font-size: 50px;
            font-family: 'Star Cartoon';
            margin-right: 0px;
          }
          .home-fuild-text04 {
            fill: #754223;
            color: rgb(117, 66, 35);
            font-size: 30px;
            margin-top: 25px;
            text-align: center;
            font-family: 'Star Cartoon';
            margin-right: 0px;
            margin-bottom: 5px;
          }
          .home-fuild-link1 {
            fill: #fff;
            color: rgb(255, 255, 255);
            display: flex;
            font-size: 45px;
            transition: 0.3s;
            font-family: 'Star Cartoon';
            line-height: 1;
            flex-direction: row;
            background-size: cover;
            text-decoration: none;
            background-image: url('/Homepage/bouton2-1500w.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-fuild-link1:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-fuild-text15 {
            margin-top: 20px;
            padding-top: 20px;
            padding-left: 35px;
            padding-right: 35px;
            padding-bottom: 20px;
          }
          .home-fuild-etager {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-fuild-image {
            width: 100%;
            object-fit: cover;
          }
          .home-fuild-container1 {
            left: 0px;
            width: 100%;
            bottom: 10px;
            height: 98px;
            display: flex;
            position: absolute;
            align-items: center;
            padding-left: 25px;
            margin-bottom: 20px;
            padding-right: 25px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: center;
          }
          .home-fuild-image1 {
            width: auto;
            height: auto;
            align-self: center;
            object-fit: cover;
            animation-name: shakeX;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-fuild-image2 {
            width: auto;
            height: auto;
            align-self: center;
            object-fit: cover;
            animation-name: shakeX;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-fuild-image3 {
            width: auto;
            height: auto;
            align-self: center;
            object-fit: cover;
            animation-name: shakeX;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-fuild-image4 {
            width: auto;
            height: auto;
            align-self: center;
            object-fit: cover;
            animation-name: shakeX;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-fuild-image5 {
            width: auto;
            height: auto;
            align-self: center;
            object-fit: cover;
            animation-name: shakeX;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-fuild-section2 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            padding-bottom: 200px;
            background-size: cover;
            background-image: url('/Homepage/woodenwall-4600h.png');
            background-position: center;
          }
          .home-fuild-container2 {
            gap: 200px;
            display: flex;
            margin-top: 100px;
            align-items: center;
            margin-bottom: 200px;
            flex-direction: row;
          }
          .home-fuild-image6 {
            width: 830px;
            object-fit: cover;
          }
          .home-fuild-image7 {
            width: 568px;
            object-fit: cover;
            animation-name: swing;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1000;
            animation-timing-function: ease;
          }
          .home-fuild-container3 {
            gap: 100px;
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-left: 100px;
            margin-bottom: 300px;
            flex-direction: row;
          }
          .home-fuild-container4 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-fuild-text16 {
            color: rgba(245, 245, 245, 1);
            height: auto;
            font-size: 70px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-pancartediught1 {
            width: 719px;
            height: 769px;
            text-decoration: none;
          }
          .home-fuild-group10 {
            width: 400px;
            height: 218px;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 1;
            justify-content: center;
            text-decoration: none;
          }
          .home-fuild-group10:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 1000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-fuild-iamthebestmemecoin151 {
            width: 390px;
            height: 220px;
          }
          .home-fuild-text18 {
            top: 75px;
            color: rgb(255, 255, 255);
            right: 50%;
            height: auto;
            position: absolute;
            font-size: 60px;
            transform: translate(50%);
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-bar {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 203px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            background-image: url('/Homepage/bar-300h.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-fuild-low-page {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 221px;
            background-size: cover;
            background-image: url('/footerbg1.png-1500w.png');
            background-repeat: no-repeat;
            background-position: bottom;
          }
          .home-fuild-cards-container {
            flex: 0 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            margin-top: 100px;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-fuild-card {
            flex: 0 0 auto;
            width: 642px;
            height: 396px;
            display: flex;
            padding: 24px;
            transition: 0.3s;
            align-items: flex-start;
            border-color: #402818;
            border-style: solid;
            border-width: 15px;
            margin-right: -50px;
            border-radius: 45px;
            flex-direction: column;
            background-color: #f3b27c;
          }
          .home-fuild-card:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-fuild-text19 {
            color: rgb(255, 255, 255);
            font-size: 100px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
          }
          .home-fuild-content {
            gap: 12px;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-left: 24px;
            flex-direction: column;
          }
          .home-fuild-text20 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 30px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-text22 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 30px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-text24 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 30px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-text26 {
            color: rgb(255, 255, 255);
            width: 532px;
            height: auto;
            font-size: 30px;
            font-style: Regular;
            text-align: left;
            font-family: 'Star Cartoon';
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-card1 {
            flex: 0 0 auto;
            width: 642px;
            height: 396px;
            display: flex;
            padding: 24px;
            margin-top: 550px;
            transition: 0.3s;
            align-items: flex-start;
            border-color: #402818;
            border-style: solid;
            border-width: 15px;
            border-radius: 45px;
            flex-direction: column;
            background-color: #f3b27c;
          }
          .home-fuild-card1:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-fuild-text29 {
            color: rgb(255, 255, 255);
            font-size: 100px;
            font-style: Regular;
            text-align: center;
            font-family: 'Star Cartoon';
          }
          .home-fuild-frame5 {
            gap: 10px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 0 24px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-fuild-text30 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 30px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-text32 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 30px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-text34 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 30px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-card2 {
            flex: 0 0 auto;
            width: 642px;
            height: 396px;
            display: flex;
            padding: 24px;
            transition: 0.3s;
            align-items: flex-start;
            margin-left: -50px;
            border-color: #402818;
            border-style: solid;
            border-width: 15px;
            border-radius: 45px;
            flex-direction: column;
            background-color: #f3b27c;
          }
          .home-fuild-card2:hover {
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-fuild-text36 {
            color: rgb(255, 255, 255);
            font-size: 100px;
            font-style: Regular;
            text-align: center;
            font-family: 'Star Cartoon';
          }
          .home-fuild-frame51 {
            gap: 8px;
            width: 100%;
            height: auto;
            display: flex;
            padding: 0 0 0 24px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-fuild-text37 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 30px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-text39 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 30px;
            font-style: Regular;
            text-align: left;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-text41 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 30px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-low-page1 {
            gap: 24px;
            width: 100%;
            height: 948px;
            display: flex;
            align-self: flex-start;
            margin-top: 300px;
            align-items: flex-end;
            margin-right: 200px;
            margin-bottom: -220px;
            padding-right: 100px;
            flex-direction: column;
          }
          .home-fuild-taupe {
            width: 790px;
            height: 947px;
            align-self: flex-start;
            object-fit: cover;
          }
          .home-fuild-bigwhisker {
            display: flex;
            position: relative;
            margin-top: -800px;
            align-items: flex-start;
          }
          .home-fuild-text43 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 200px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: 1;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-text45 {
            color: rgba(219, 158, 79, 1);
            font-size: 50px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
          }
          .home-fuild-group5 {
            gap: 48px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-fuild-link4 {
            display: contents;
          }
          .home-fuild-x {
            width: 115px;
            height: 115px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 1;
            border-color: #db9e4e;
            border-style: outset;
            border-width: 5px;
            justify-content: center;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-fuild-x:hover {
            border-color: #6b420b;
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-fuild-iamthebestmemecoin241 {
            width: 87px;
            height: 74px;
          }
          .home-fuild-link5 {
            display: contents;
          }
          .home-fuild-discord {
            width: 115px;
            height: 115px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 1;
            border-color: #db9e4e;
            border-style: outset;
            border-width: 5px;
            justify-content: center;
            text-decoration: none;
            background-color: rgba(255, 255, 255, 1);
          }
          .home-fuild-discord:hover {
            border-color: #7f4b07;
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-fuild-iamthebestmemecoin281 {
            width: 95px;
            height: 70px;
          }
          .home-fuild-link6 {
            display: contents;
          }
          .home-fuild-telegram {
            width: 115px;
            height: 115px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            flex-shrink: 1;
            border-color: #db9e4e;
            border-style: outset;
            border-width: 5px;
            justify-content: center;
            text-decoration: none;
            background-color: #fff;
          }
          .home-fuild-telegram:hover {
            border-color: #7f4b07;
            animation-name: pulse;
            animation-delay: 0s;
            animation-duration: 10000ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-fuild-iamthebestmemecoin251 {
            width: 89px;
            height: 83px;
          }
          .home-fuild-text46 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 40px;
            font-style: Regular;
            text-align: center;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-group6 {
            gap: 12px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-fuild-link7 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 40px;
            font-style: Regular;
            text-align: center;
            transition: 0.3s;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-link7:hover {
            color: #8a8a8a;
          }
          .home-fuild-text49 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 40px;
            font-style: Regular;
            text-align: center;
            transition: 0.3s;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-text49:hover {
            color: #8a8a8a;
          }
          .home-fuild-text51 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 40px;
            font-style: Regular;
            text-align: center;
            transition: 0.3s;
            font-family: Star Cartoon;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-fuild-text51:hover {
            color: #8a8a8a;
          }
          @media (max-width: 1600px) {
            .home-fuild-back {
              opacity: 1;
              margin-top: 630px;
            }
            .home-fuild-herbe {
              margin-top: -550px;
              margin-bottom: 0px;
            }
            .home-fuild-whisker-beta {
              margin-top: 600px;
            }
            .home-fuild-nuage {
              margin-top: -1100px;
            }
            .home-fuild-section1 {
              width: 100%;
              margin-top: 450px;
              background-size: cover;
              background-position: top;
            }
            .home-fuild-whisker1 {
              margin-top: 150px;
            }
            .home-fuild-whisker2 {
              margin-top: 150px;
            }
            .home-fuild-text03 {
              align-self: center;
              margin-right: 0px;
            }
            .home-fuild-text04 {
              align-self: center;
              margin-right: 0px;
            }
            .home-fuild-link1 {
              align-self: center;
              margin-right: 0px;
            }
            .home-fuild-container1 {
              height: 74px;
              margin-top: 0px;
            }
            .home-fuild-image1 {
              top: 2912px;
              left: 22px;
              width: 213px;
              height: 119px;
            }
            .home-fuild-image2 {
              top: 2912px;
              left: 22px;
              width: 213px;
              height: 119px;
            }
            .home-fuild-image3 {
              top: 2912px;
              left: 22px;
              width: 213px;
              height: 119px;
            }
            .home-fuild-image4 {
              top: 2912px;
              left: 22px;
              width: 213px;
              height: 119px;
            }
            .home-fuild-image5 {
              top: 2912px;
              left: 22px;
              width: 213px;
              height: 119px;
            }
            .home-fuild-container2 {
              gap: 50px;
            }
            .home-fuild-pancartediught1 {
              left: 165px;
              right: -45px;
              bottom: 9px;
            }
            .home-fuild-low-page {
              padding-left: 0px;
            }
            .home-fuild-cards-container {
              gap: 64px;
              flex-direction: column;
              justify-content: center;
            }
            .home-fuild-card {
              margin-right: 0px;
            }
            .home-fuild-text19 {
              font-size: 35px;
            }
            .home-fuild-card1 {
              order: 3;
              margin-top: 0px;
            }
            .home-fuild-text29 {
              font-size: 35px;
            }
            .home-fuild-card2 {
              margin-left: 0px;
            }
            .home-fuild-text36 {
              font-size: 35px;
            }
            .home-fuild-low-page1 {
              margin-right: 0px;
              padding-right: 0px;
            }
            .home-fuild-bigwhisker {
              margin-right: 150px;
            }
            .home-fuild-text45 {
              padding-right: 150px;
            }
            .home-fuild-group5 {
              padding-right: 150px;
            }
            .home-fuild-text46 {
              padding-right: 150px;
            }
            .home-fuild-group6 {
              padding-right: 150px;
            }
          }
          @media (max-width: 1200px) {
            .home-fuild-back {
              margin-top: 650px;
            }
            .home-fuild-herbe {
              margin-top: -400px;
            }
            .home-fuild-nuage {
              margin-top: -1000px;
            }
            .home-fuild-section1 {
              margin-top: 516px;
              margin-bottom: 0px;
              background-size: cover;
            }
            .home-fuild-whiskers {
              align-items: center;
              flex-direction: column;
              padding-bottom: 50px;
            }
            .home-fuild-whisker2 {
              margin-top: 50px;
            }
            .home-fuild-image {
              margin-top: 100px;
            }
            .home-fuild-container1 {
              height: 54px;
            }
            .home-fuild-image1 {
              top: 2875px;
              left: 53px;
              width: 174px;
              height: 97px;
            }
            .home-fuild-image2 {
              top: 2875px;
              left: 53px;
              width: 174px;
              height: 97px;
            }
            .home-fuild-image3 {
              top: 2875px;
              left: 53px;
              width: 174px;
              height: 97px;
            }
            .home-fuild-image4 {
              top: 2875px;
              left: 53px;
              width: 174px;
              height: 97px;
            }
            .home-fuild-image5 {
              top: 2875px;
              left: 53px;
              width: 174px;
              height: 97px;
            }
            .home-fuild-section2 {
              height: 4586px;
              padding-top: top;
              padding-bottom: 200px;
            }
            .home-fuild-container2 {
              gap: 0;
              flex-direction: column;
            }
            .home-fuild-container3 {
              margin-left: 0px;
              flex-direction: column-reverse;
            }
            .home-fuild-low-page {
              padding-top: 0px;
              padding-bottom: 230px;
            }
            .home-fuild-low-page1 {
              height: 1196px;
              margin-top: 700px;
            }
            .home-fuild-taupe {
              margin-top: 250px;
            }
            .home-fuild-text43 {
              margin-top: -600px;
              margin-right: 50px;
            }
            .home-fuild-text45 {
              color: rgb(219, 158, 79);
              font-size: 50px;
              margin-top: -420px;
              font-family: Star Cartoon;
              font-weight: 400;
              padding-top: -620px;
              padding-right: 300px;
            }
            .home-fuild-group5 {
              padding-right: 392px;
            }
            .home-fuild-text46 {
              padding-right: 360px;
            }
            .home-fuild-group6 {
              padding-top: 664px;
              padding-right: 102px;
            }
          }
          @media (max-width: 991px) {
            .home-fuild-backtele {
              width: 100%;
              opacity: 1;
            }
            .home-fuild-back {
              width: var(--dl-size-size-small);
              opacity: 0;
              margin-top: 640px;
            }
            .home-fuild-herbe {
              width: var(--dl-size-size-small);
              opacity: 0;
            }
            .home-fuild-herbetele {
              width: 100%;
              opacity: 1;
              margin-top: 650px;
              margin-bottom: 650px;
              animation-name: shakeY;
              animation-delay: 0s;
              animation-duration: 300ms;
              animation-direction: normal;
              animation-iteration-count: 1;
              animation-timing-function: ease;
            }
            .home-fuild-whisker-beta {
              margin-top: -800px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-fuild-nuage {
              margin-top: -700px;
            }
            .home-fuild-section1 {
              margin-top: 350px;
            }
            .home-fuild-etager {
              flex-direction: row;
            }
            .home-fuild-container1 {
              height: 68px;
            }
            .home-fuild-image1 {
              top: 2858px;
              left: 29px;
              width: 110px;
              height: 61px;
            }
            .home-fuild-image2 {
              top: 2858px;
              left: 29px;
              width: 110px;
              height: 61px;
            }
            .home-fuild-image3 {
              top: 2858px;
              left: 29px;
              width: 110px;
              height: 61px;
            }
            .home-fuild-image4 {
              top: 2858px;
              left: 29px;
              width: 110px;
              height: 61px;
            }
            .home-fuild-image5 {
              top: 2858px;
              flex: 0;
              left: 29px;
              width: 110px;
              height: 61px;
            }
            .home-fuild-low-page1 {
              align-self: center;
              margin-right: 0px;
            }
            .home-fuild-text43 {
              margin-right: -80px;
            }
            .home-fuild-text45 {
              margin-right: -120px;
            }
            .home-fuild-group5 {
              padding-right: 257px;
            }
            .home-fuild-text46 {
              padding-right: 225px;
            }
          }
          @media (max-width: 767px) {
            .home-fuild-backtele {
              width: 100%;
            }
            .home-fuild-herbetele {
              width: 100%;
              margin-top: 750px;
              margin-bottom: 750px;
            }
            .home-fuild-whisker-beta {
              margin-top: -800px;
            }
            .home-fuild-nuage {
              margin-top: -550px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .home-fuild-section1 {
              margin-top: 300px;
            }
            .home-fuild-whisker1 {
              width: 100%;
            }
            .home-fuild-whisker2 {
              width: 100%;
            }
            .home-fuild-container1 {
              height: 41px;
              padding-top: 0px;
              margin-bottom: 0px;
              padding-bottom: 0px;
            }
            .home-fuild-image1 {
              top: 2781px;
              left: 35px;
            }
            .home-fuild-image2 {
              top: 2781px;
              left: 35px;
            }
            .home-fuild-image3 {
              top: 2781px;
              left: 35px;
            }
            .home-fuild-image4 {
              top: 2781px;
              left: 35px;
            }
            .home-fuild-image5 {
              top: 2781px;
              left: 35px;
            }
            .home-fuild-image6 {
              width: 600px;
              margin-right: 50px;
            }
            .home-fuild-image7 {
              width: 500px;
            }
            .home-fuild-pancartediught1 {
              left: 59px;
              bottom: 18px;
            }
            .home-fuild-cards-container {
              padding-left: 24px;
              padding-right: 24px;
            }
            .home-fuild-card {
              width: 100%;
            }
            .home-fuild-card1 {
              width: 100%;
            }
            .home-fuild-card2 {
              width: 100%;
            }
            .home-fuild-text43 {
              font-size: 150px;
            }
            .home-fuild-text45 {
              color: rgb(219, 158, 79);
              font-size: 35px;
              margin-top: -450px;
              font-family: Star Cartoon;
              font-weight: 400;
              margin-right: -150px;
            }
            .home-fuild-group5 {
              padding-right: 146px;
            }
            .home-fuild-text46 {
              padding-right: 120px;
            }
            .home-fuild-group6 {
              padding-top: 303px;
              padding-right: 20px;
            }
          }
          @media (max-width: 479px) {
            .home-fuild-backtele {
              width: 100%;
            }
            .home-fuild-herbetele {
              width: 100%;
              margin-top: 850px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 850px;
            }
            .home-fuild-whisker-beta {
              margin-top: -850px;
              padding-top: 50px;
              padding-left: 50px;
              padding-right: 50px;
            }
            .home-fuild-nuage {
              margin-top: -350px;
            }
            .home-fuild-section1 {
              margin-top: 176px;
            }
            .home-fuild-whiskers {
              height: 1062px;
              margin-top: 0px;
              padding-top: 0px;
              padding-left: 24px;
              padding-right: 24px;
            }
            .home-fuild-whisker1 {
              margin-top: 40px;
              padding-left: 35px;
              padding-right: 20px;
            }
            .home-fuild-text {
              font-size: 40px;
            }
            .home-fuild-text01 {
              font-size: 25px;
              margin-top: 15px;
              margin-bottom: 15px;
            }
            .home-fuild-whisker2 {
              width: 100%;
              height: auto;
              margin-top: 0px;
              padding-top: 144px;
              margin-bottom: 100px;
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: 0px;
            }
            .home-fuild-text03 {
              color: rgb(64, 40, 24);
              font-size: 40px;
              font-family: Star Cartoon;
              margin-right: 0px;
            }
            .home-fuild-text04 {
              color: rgb(117, 66, 35);
              font-size: 22px;
              font-family: Star Cartoon;
              margin-right: 20px;
            }
            .home-fuild-link1 {
              margin-right: 13px;
              margin-bottom: 10px;
            }
            .home-fuild-image1 {
              top: 2220px;
              left: 40px;
              width: 70px;
              height: 40px;
              margin-top: 20px;
            }
            .home-fuild-image2 {
              top: 2220px;
              left: 40px;
              width: 70px;
              height: 40px;
              margin-top: 20px;
            }
            .home-fuild-image3 {
              top: 2220px;
              left: 40px;
              width: 70px;
              height: 40px;
              margin-top: 20px;
            }
            .home-fuild-image4 {
              top: 2220px;
              left: 40px;
              width: 70px;
              height: 40px;
              margin-top: 20px;
            }
            .home-fuild-image5 {
              top: 2220px;
              left: 40px;
              width: 60px;
              height: 40px;
              margin-top: 20px;
            }
            .home-fuild-container2 {
              width: auto;
            }
            .home-fuild-image6 {
              width: 100%;
            }
            .home-fuild-image7 {
              width: 100%;
            }
            .home-fuild-text16 {
              top: 15px;
              left: 25px;
              font-size: 60px;
            }
            .home-fuild-pancartediught1 {
              top: 135px;
              right: 44px;
              width: 360px;
              height: 384px;
            }
            .home-fuild-card {
              width: 479px;
              height: 299px;
              align-self: center;
            }
            .home-fuild-text19 {
              top: -43px;
              left: 38px;
            }
            .home-fuild-text20 {
              font-size: 20px;
            }
            .home-fuild-text22 {
              font-size: 20px;
            }
            .home-fuild-text24 {
              font-size: 20px;
            }
            .home-fuild-text26 {
              color: rgb(255, 255, 255);
              font-size: 20px;
              font-family: Star Cartoon;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            .home-fuild-card1 {
              width: 479px;
              height: 299px;
              align-self: center;
            }
            .home-fuild-text29 {
              top: -43px;
              left: 38px;
            }
            .home-fuild-text30 {
              font-size: 20px;
              text-align: left;
            }
            .home-fuild-text32 {
              font-size: 20px;
              text-align: left;
            }
            .home-fuild-text34 {
              font-size: 20px;
              text-align: left;
            }
            .home-fuild-card2 {
              width: 479px;
              height: 299px;
              align-self: center;
            }
            .home-fuild-text36 {
              top: -43px;
              left: 38px;
            }
            .home-fuild-text37 {
              font-size: 20px;
              text-align: left;
            }
            .home-fuild-text39 {
              font-size: 20px;
              text-align: left;
            }
            .home-fuild-text41 {
              font-size: 20px;
              text-align: left;
            }
            .home-fuild-low-page1 {
              height: 780px;
              margin-top: 600px;
            }
            .home-fuild-taupe {
              width: 479px;
              height: 574px;
              margin-top: 210px;
            }
            .home-fuild-bigwhisker {
              margin-top: -600px;
            }
            .home-fuild-text43 {
              font-size: 100px;
              margin-top: -600px;
              margin-right: -120px;
            }
            .home-fuild-text45 {
              color: rgb(219, 158, 79);
              font-size: 25px;
              margin-top: -520px;
              font-family: Star Cartoon;
              font-weight: 400;
              margin-right: -220px;
            }
            .home-fuild-group5 {
              padding-right: 51px;
            }
            .home-fuild-x {
              width: 92px;
              height: 92px;
            }
            .home-fuild-iamthebestmemecoin241 {
              width: 71px;
              height: 60px;
            }
            .home-fuild-discord {
              width: 91px;
              height: 91px;
            }
            .home-fuild-iamthebestmemecoin281 {
              width: 69px;
              height: 50px;
            }
            .home-fuild-telegram {
              width: 92px;
              height: 92px;
            }
            .home-fuild-iamthebestmemecoin251 {
              width: 68px;
              height: 63px;
            }
            .home-fuild-text46 {
              color: rgb(255, 255, 255);
              font-size: 20px;
              font-family: Star Cartoon;
              font-weight: 400;
              line-height: normal;
              padding-right: 120px;
              text-decoration: none;
            }
            .home-fuild-group6 {
              padding-top: 128px;
              padding-right: 175px;
            }
            .home-fuild-link7 {
              font-size: 20px;
            }
            .home-fuild-text49 {
              font-size: 20px;
            }
            .home-fuild-text51 {
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default HomeFuild
