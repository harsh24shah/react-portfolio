/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onInitialClientRender = () => {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none"
    }, 300)
}