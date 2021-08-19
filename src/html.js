import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Web Fonts */}
    		<link id="googleFonts" href="https://fonts.googleapis.com/css?family=Space+Grotesk:300,400,500,600,700,800%7CShadows+Into+Light&display=swap" rel="stylesheet" type="text/css"></link>

        {/* Vendor CSS */}
        <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="vendor/fontawesome-free/css/all.min.css"></link>
        <link rel="stylesheet" href="vendor/animate/animate.compat.css"></link>
        <link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.min.css"></link>
        <link rel="stylesheet" href="vendor/owl.carousel/assets/owl.carousel.min.css"></link>
        <link rel="stylesheet" href="vendor/owl.carousel/assets/owl.theme.default.min.css"></link>
        <link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.min.css"></link>

        {/* Theme CSS */}
        <link rel="stylesheet" href="css/theme.css"></link>
        <link rel="stylesheet" href="css/theme-elements.css"></link>
        <link rel="stylesheet" href="css/theme-blog.css"></link>
        <link rel="stylesheet" href="css/theme-shop.css"></link>

        {/* Demo CSS */}
        <link rel="stylesheet" href="css/demos/systemiphus.css"></link>

        {/* Skin CSS */}
        <link id="skinCSS" rel="stylesheet" href="css/skins/systemiphus.css"></link>


        {/* Theme Custom CSS */}
        <link rel="stylesheet" href="css/custom.css"></link>

        {/* Head Libs */}
        <script src="vendor/modernizr/modernizr.min.js"></script>

        {props.headComponents}
      </head>
      <body data-plugin-page-transition {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        {/* Vendor */}
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/jquery.appear/jquery.appear.min.js"></script>
        <script src="vendor/jquery.easing/jquery.easing.min.js"></script>
        <script src="vendor/jquery.cookie/jquery.cookie.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="vendor/jquery.validation/jquery.validate.min.js"></script>
        <script src="vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js"></script>
        <script src="vendor/jquery.gmap/jquery.gmap.min.js"></script>
        <script src="vendor/lazysizes/lazysizes.min.js"></script>
        <script src="vendor/isotope/jquery.isotope.min.js"></script>
        <script src="vendor/owl.carousel/owl.carousel.min.js"></script>
        <script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
        <script src="vendor/vide/jquery.vide.min.js"></script>
        <script src="vendor/vivus/vivus.min.js"></script>

        {/* Theme Base, Components and Settings */}
        <script src="js/theme.js"></script>

        {/* Theme Custom */}
        <script src="js/custom.js"></script>

        {/* Theme Initialization Files */}
        <script src="js/theme.init.js"></script>

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
