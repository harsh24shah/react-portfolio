import React from "react"
import PropTypes from "prop-types"
import LogoImage from './components/logoimage'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KHQ8RDP');</script>`,
        }}
        />
        {/* End Google Tag Manager */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="canonical" href="https://harshjshah.com/" />
        <link rel="home" href="https://harshjshah.com/" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KHQ8RDP"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
                `,
        }}
        />
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <div
          key={`loader`}
          id="loader"
          className="loader"
          style={{
            alignItems: "center",
            backgroundColor: "#F2F2F2",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <div className="animate-logo">
            <LogoImage />
          </div>
        </div>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
