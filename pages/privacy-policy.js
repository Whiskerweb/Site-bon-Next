import React from 'react'
import Head from 'next/head'

import CTA1 from '../components/cta1'
import ContentList1 from '../components/content-list1'
import Baspage from '../components/baspage'

const PrivacyPolicy = (props) => {
  return (
    <>
      <div className="privacy-policy-container">
        <Head>
          <title>PrivacyPolicy - exported project</title>
          <meta
            property="og:title"
            content="PrivacyPolicy - exported project"
          />
        </Head>
        <div className="privacy-policy-cta2">
          <CTA1 rootClassName="cta1-root-class-name"></CTA1>
        </div>
        <div className="privacy-policy-contentlist3">
          <ContentList1 rootClassName="content-list1-root-class-name"></ContentList1>
        </div>
        <Baspage rootClassName="baspage-root-class-name2"></Baspage>
        <div className="privacy-policy-footer4"></div>
      </div>
      <style jsx>
        {`
          .privacy-policy-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #e8d6c6;
          }
          .privacy-policy-cta2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .privacy-policy-contentlist3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .privacy-policy-footer4 {
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

export default PrivacyPolicy
