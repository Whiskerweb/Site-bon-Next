import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Logos1 from '../components/logos1'
import FAQ11 from '../components/faq11'

const MARKETPLACE = (props) => {
  return (
    <>
      <div className="marketplace-container">
        <Head>
          <title>MARKETPLACE - exported project</title>
          <meta property="og:title" content="MARKETPLACE - exported project" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name1"></Navbar>
        <div className="marketplace-logos3">
          <Logos1 rootClassName="logos1-root-class-name"></Logos1>
        </div>
        <div className="marketplace-faq5">
          <FAQ11
            content1="The MINT NFT platform as well as the gaming platform will be found on this page, it is currently under construction."
            rootClassName="faq11-root-class-name"
          ></FAQ11>
        </div>
        <div className="marketplace-footer6"></div>
      </div>
      <style jsx>
        {`
          .marketplace-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .marketplace-logos3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .marketplace-faq5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: 287px;
            justify-content: center;
          }
          .marketplace-footer6 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default MARKETPLACE
