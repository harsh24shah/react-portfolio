import React from 'react'
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Logoimage = () => {
  return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 1024 1024">
    <title>Harsh logo</title>
    <path fill="#f87f64" d="M1023.999 1023.916h-473.618l82.441-111.812h279.365v-800.375h-800.375v906.347h-111.812v-1017.993h1024v1023.834z"></path>
    <path fill="#f87f64" d="M346.948 599.362v418.713h-110.978v-157.539h-124.495v157.539h-110.978v-418.713h110.978v157.203h124.329v-157.203z"></path>
    <path fill="#f87f64" d="M397.848 947.149l66.754-66.754c18.849 25.156 48.592 41.261 82.093 41.261 1.001 0 2.001-0.013 2.995-0.042l-0.147 0.003c23.696 0 46.894-8.51 46.894-25.701 0-21.529-42.888-40.385-83.442-58.576-53.070-22.862-98.462-57.741-98.462-120.825 0-72.428 68.755-124.162 148.361-124.162 63.918 0 113.647 30.205 130.003 71.428l-64.084 61.747c-14.586-19.25-37.464-31.555-63.217-31.555-0.538 0-1.076 0.007-1.613 0.016h0.081c-22.862 0-39.218 11.682-39.218 25.867 0 19.192 29.707 25.535 74.932 44.391 65.417 27.536 108.807 66.754 108.807 129.335 0 79.772-74.263 129.501-158.207 129.501-68.755 0.834-131.506-29.707-152.533-75.932z"></path>
  </svg>
}

export default Logoimage
