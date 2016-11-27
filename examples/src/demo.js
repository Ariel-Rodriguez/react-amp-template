import http from 'http';
import React from 'react';
import {
  StyleSheet,
  css,
} from 'aphrodite/no-important'; // Is very important to import no-important!
import {
  renderToStaticMarkup,
  scripts, // Fancy way to append amp-scripts into document's head
} from '../lib'; // react-amp-template

// --- MODULAR-CSS ---
const style = StyleSheet.create({
  social: { padding: '10px' },
});
// --- CUSTOM-SCRIPTS ---
// Notify to include amp-social-share.
scripts('amp-social-share');

// Minimum settings for the template.
const AMP_CONFIG = {
  head: { title: 'react-amp-sample', canonical: 'http://sample' },
};

// --- REACT + CSUTOM-TAGS ---
const SampleApp = ({ value }) => (
  <div>
    <h1>Hello {value}</h1>
    <p className={css(style.social)}>
      <amp-social-share
        type="email"
        width="45"
        height="33"
      ></amp-social-share>
    </p>
  </div>
);


export const startServer = (html) => {
  http.createServer((request, response) => {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
  })
  .listen(8000)
  .on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });
  console.log('Listening on port 8000');
};

/**
* react-amp-template returns a promise which will be fulfilled
* with a string that holds the whole HTML document ready to serve.
* The promise will reject for any internal error.
* Once done rendering, the promise's result will be served on port 8000.
*/
renderToStaticMarkup(<SampleApp value="World" />, AMP_CONFIG)
.then(startServer).catch(console.error);
