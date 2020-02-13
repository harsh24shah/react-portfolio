/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./app.scss"

import { ParallaxProvider } from 'react-scroll-parallax';


const SmoothScroll = (target, speed, smooth) => {
  if (target === document)
    target = (document.scrollingElement
      || document.documentElement
      || document.body.parentNode
      || document.body) // cross browser support for document scrolling

  var moving = false
  var pos = target.scrollTop
  var frame = target === document.body
    && document.documentElement
    ? document.documentElement
    : target // safari is the new IE

  target.addEventListener('mousewheel', scrolled, { passive: false })
  target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

  function scrolled(e) {
    e.preventDefault(); // disable default scrolling

    var delta = normalizeWheelDelta(e)

    pos += -delta * speed
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

    if (!moving) update()
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
      else
        return -e.detail / 3 // Firefox
    } else
      return e.wheelDelta / 120 // IE,Safari,Chrome
  }

  function update() {
    moving = true

    var delta = (pos - target.scrollTop) / smooth

    target.scrollTop += delta

    if (Math.abs(delta) > 0.5)
      requestFrame(update)
    else
      moving = false
  }

  var requestFrame = function () { // requestAnimationFrame cross browser
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  }()
}

const Layout = ({ children }) => {

  useEffect(() => {
    SmoothScroll(document, 120, 12);

    (function () {
      const link = document.querySelectorAll('a');
      const cursor = document.querySelector('.cursor');
      const animateit = function (e) {
        //  const span = this.querySelector('span');
        // const { offsetX: x, offsetY: y } = e,
        //   { offsetWidth: width, offsetHeight: height } = this,
        // move = 25,
        // xMove = x / width * (move * 2) - move,
        // yMove = y / height * (move * 2) - move;
        cursor.classList.add('active');
        // span.style.transform = `translate(${xMove}px, ${yMove}px)`;
        if (e.type === 'mouseleave') {
          //  span.style.transform = '';
          cursor.classList.remove('active');
        }

      };
      const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
      };

      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);
    })();
  });

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ParallaxProvider>
        <React.Fragment>
          <div className="main">
            <main className='routed'>
              <Header siteTitle={data.site.siteMetadata.title} />
              <div className="cursor"></div>
              <div className="main-content">{children}</div>
              <Footer />
            </main>
          </div>
        </React.Fragment>
      </ParallaxProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
