/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import Header from './header'
import Footer from './footer'
import '../assets/scss/app.scss'

const dark = {
  '--primary': 'white',
  '--secondary': 'black',
  '--morphBg': 'rgba(248, 127, 100, 0.16)',
  '--morphNav': 'rgba(248, 127, 100, 0.16)',
  '--fontWeight': '200',
  '--acent': '#f87f64',
}

const light = {
  '--primary': 'black',
  '--secondary': 'white',
  '--morphBg': 'rgba(248, 127, 100, 0.16)',
  '--morphNav': 'rgba(248, 127, 100, 0.16)',
  '--fontWeight': '400',
  '--acent': '#fa5f1a',
}

const applyTheme = (nextTheme) => {
  nextTheme = JSON.parse(nextTheme);
  const theme = nextTheme ? light : dark;
  Object.keys(theme).map(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
};

export default class Layout extends Component {

  constructor(props) {
    super(props)
    this.state = { lightTheme: true }
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount() {
    const localStorageLayout = localStorage.getItem('lightTheme')
    if (localStorageLayout) {
      this.setState({ lightTheme: JSON.parse(localStorageLayout) })
      applyTheme(localStorageLayout);
    }
  }

  changeTheme() {
    this.setState({
      lightTheme: !this.state.lightTheme,
    })
    localStorage.setItem('lightTheme', !this.state.lightTheme);
    applyTheme(localStorage.getItem('lightTheme'));
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <StaticQuery
          query={graphql`
                  query SiteTitleQuery {
                    site {
                      siteMetadata {
                        title
                      } 
                    }
                  }
                    `}
          render={data => (
            <ThemeProvider theme={this.state}>
                <React.Fragment>
                  <div className='main'>
                    <main className='routed'>
                      <Header siteTitle={data.site.siteMetadata.title} />
                      <div className='main-content'>{children}</div>
                      <Footer changeTheme={this.changeTheme} lightTheme={this.state.lightTheme} />
                    </main>
                  </div>
                </React.Fragment>
            </ThemeProvider>
          )}
        />
      </>
    )
  }
}
