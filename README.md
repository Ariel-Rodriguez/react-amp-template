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
- [yarn](https://yarnpkg.com/en/docs/install) add react-amp-template or `$npm install --save react-amp-template`


```javascript
var React = require('react');
var RAMPT = require('react-amp-template').default;

var rampt = new RAMPT({
  template: {
    head: {
      title: 'react amp template',
      canonical: 'http',
    }
  }
});

var element = React.createElement('div', null, 'Hello World');

// add meta tag single mode.
addMeta({
  type: 'application/ld+json',
  content: "{'@context': 'http://schema.org', '@type': 'NewsArticle'}"
});

// register any amp-script. just an example.
addScript('amp-social-share');

rampt
  .renderStatic(element)
  .then(console.log)
  .catch(function(error){
    console.log('Errors founds! Use npm run debug for debug trace.');
    console.log('Document failed '+((error.validation) ? 'at AMP validations.' : 'at internal rendering.'));
    console.log('Markup output: ', error.markup);
    process.exit(1);
  });
```
<br />
<div align="left">
<strong>PREVIEW:</strong>
</div>
<img src="https://raw.githubusercontent.com/Ariel-Rodriguez/react-amp-template/master/docs/images/demo-output.png" alt="react-amp-template demo output" align="center" />
<br />

#### [See more examples](https://github.com/Ariel-Rodriguez/react-amp-template/tree/master/examples)

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



## :penguin: Contributing

- `$git clone git@github.com:Ariel-Rodriguez/react-amp-template.git`
- ```$yarn```
- create an issue, create a branch with issue initials
- hack and ensure tests pass. Add unit tests if needed.
- ```npm run build```
- ```npm run test```
- add descriptive commit & push

#### run examples
- Build examples and github demo `npm run dist`
- `npm run demo` or `npm run examples`

- Complete example using npm:
  - `cd examples/simple && npm i && npm start`


## License

This project is licensed under the Apache License, Version 2.0. Copyright (c) 2016 Ariel Fernando Rodriguez. For more information see `LICENSE.md`.
