module.exports = {
  siteMetadata: {
    title: `Harsh Portfolio`,
    description: `Harsh Shah, UI designer(developer sometimes), works with every thing in front end`,
    author: `@Harsh`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `react-scroll-parallax`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harsh Shah`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `standalone`,
        icon: `src/images/harsh-logo-icon.svg`, // This path is relative to the root of the site.
      }, 
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout.js`)
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '10% 10%', // Corresponds to root's bounding box margin
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
} 
