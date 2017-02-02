import React from 'react';
import { addScript } from '../../../../lib';


const Heading = () => {
  // amp-social-share script
  addScript('amp-social-share');

  return (
    <div className="heading">
      <h1>Server Side Rendering with React + Modular CSS + AMP-custom-elements</h1>
      <p id="summary">This is a sample of AMP article using react-amp-template library.</p>
      <p>
        <small>By Ariel Rodriguez</small>
      </p>
      <p className="heading">
        <amp-social-share
          type="twitter"
          data-param-text="react-amp-template. SSR with React+JSCSS+AMP-elements."
          width="45"
          height="33"
        ></amp-social-share>
        <amp-social-share
          type="facebook"
          width="45"
          height="33"
          data-attribution={1185042588239232}
        ></amp-social-share>
        <amp-social-share
          type="gplus"
          width="45"
          height="33"
        ></amp-social-share>
        <amp-social-share
          type="email"
          width="45"
          height="33"
        ></amp-social-share>
      </p>
    </div>
  );
};

export default Heading;
