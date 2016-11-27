<div align="center">
  <h1><strong>react-amp-template</strong></h1>
  <div align="center">Server side rendering with React + ModularCSS/JSCSS + AMP-custom-elements.</div>
  <sub>Another fun library to generate AMP documents.</sub>
</div>

<br />

<div align="center">
  <!-- Build Status -->
  <a href="https://travis-ci.org/Ariel-Rodriguez/react-amp-template">
    <img src="https://travis-ci.org/Ariel-Rodriguez/react-amp-template.svg?branch=master" alt="Build Status" />
  </a>
</div>


## Install

react-amp-template is distributed via npm:
- `(https://yarnpkg.com/en/docs/install)[yarn] add or npm install --save react-amp-template`

## Server Side Rendering


#### Basic sample

```javascript
import http from 'http';
import React from 'react';
import App from './app';
import { renderToStaticMarkup } from '../../lib';
const debug = require('debug')('example:server');
const error = require('debug')('example:server:error');

const startServer = (html) => {
  http.createServer((request, response) => {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
  })
  .listen(8000)
  .on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    error(err);
  });
  debug('Listening on port 8000');
};

/**
* react-amp-template returns a promise which will be fulfilled
* with a string that holds the whole HTML document ready to serve.
* The promise will reject for any internal error.
*/
renderToStaticMarkup(
  <App bannerText="React-AMP-Template" />, App.config
).catch(error).then(startServer);
```

#### (See more examples)[https://github.com/Ariel-Rodriguez/react-amp-template/tree/master/examples]

## Features
<dl>
  <dt>:zap: AMP custom elements</dt>
  <dd>Ready to render AMP components see more https://ampbyexample.com/#components</dd>
  <dt>:nail_care: Modular CSS</dt>
  <dd>Style with the power of (Aphrodite)[https://github.com/Khan/aphrodite]</dd>
  <dt>:suspect: Built-in AMP validation</dt>
  <dd>By default, all content generated will be verified through (AMP validator)[https://github.com/ampproject/amphtml/tree/master/validator] to ensure safety.</dd>
</dl>

## API
:zzz:

## Data flow
:zzz:

## :penguin: Contributing

- `$git clone git@github.com:Ariel-Rodriguez/react-amp-template.git`
- ```$yarn```
- create an issue, create a branch with issue initials
- hack and ensure tests pass. Add unit tests if needed.
- ```npm run build```
- ```npm run test```
- add descriptive commit & push

#### run examples
- `npm run examples` `npm run demo`


## License

This project is licensed under the Apache License, Version 2.0. Copyright (c) 2016 Ariel Fernando Rodriguez. For more information see `LICENSE.md`.
