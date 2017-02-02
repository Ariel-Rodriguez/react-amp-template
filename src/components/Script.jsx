import React, { PropTypes } from 'react';

/**
 * Convenience function to render amp scripts into the head of the template.
 * @returns {ReactElement}
 */
const Script = ({ name, version }) => (
  <script
    async
    custom-element={name}
    src={`https://cdn.ampproject.org/v0/${name}-${version}.js`}
  ></script>
);

Script.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

export default Script;
