import React, { PropTypes } from 'react'
import innerHTML from '../utils/innerHTML'

const boilerplateStyles = 'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}';
const boilerplateStylesNoScript = 'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}';

const Head = ({
  metas,
  scripts,
  styles,
  canonical,
  title,
}) => (
  <head>
    <meta charSet="utf-8"></meta>
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"></meta>
    <title>{title}</title>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <link rel="canonical" href={canonical} />
    {[
      metas,
      scripts
    ]}
    <style amp-boilerplate="">{boilerplateStyles}</style>
    <noscript><style amp-boilerplate="">{boilerplateStylesNoScript}</style></noscript>
    {styles ? <style amp-custom="" {...innerHTML(styles)} /> : null }
  </head>
)

Head.propTypes = {
  metas: PropTypes.array,
  scripts: PropTypes.array,
  styles: PropTypes.string,
  canonical: PropTypes.string.isRequired,
  title: PropTypes.string,
}


export default Head
