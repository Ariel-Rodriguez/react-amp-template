<div align="center">
  <h1><strong>RAMPT v4</strong></h1>
  <div align="center"><p>AMP components aliases and shims for React SSR 16+ & styled-components v3</p></div>
</div>

<br />

<div align="center">
  <!-- maintainability -->
  <a href="https://codeclimate.com/github/Ariel-Rodriguez/react-amp-template/maintainability"><img src="https://api.codeclimate.com/v1/badges/ff07a1f7148b05304caf/maintainability" /></a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/Ariel-Rodriguez/react-amp-template">
    <img src="https://travis-ci.org/Ariel-Rodriguez/react-amp-template.svg?branch=master" alt="Build Status" />
  </a>
  <!-- npm ver -->
  <a href="https://badge.fury.io/js/react-amp-template"><img src="https://badge.fury.io/js/react-amp-template.svg" alt="npm version" height="18"></a>
  <!-- cover -->
  <a href="https://codecov.io/gh/Ariel-Rodriguez/react-amp-template"><img src="https://codecov.io/gh/Ariel-Rodriguez/react-amp-template/branch/master/graph/badge.svg" /></a>
</div>


Write AMP pages using React syntax right the way and style with your preferred style manager

<dl>
  <dt>:zap: AMP elements</dt>
  <dd>Ready to render any <a href="https://ampbyexample.com/#components">AMP component</a></dd>
  <dt>:nail_care: Modular CSS</dt>
  <dd>Style with the power of <a href="https://github.com/styled-components/styled-components">Styled Components</a> or <a href="https://github.com/Khan/aphrodite">Aphrodite</a> or Your Own custom StyleManager!</dd>
</dl>




## Contents

- [Usage](#usage)
- [Demo](#demo)
- [API](#api)
- [Configuration](#configuration)
- [Contribute](#contributing)


## Usage

### Install

- `npm i react-amp-template`

### Static Render

```javascript
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { renderToString, AMP } from 'react-amp-template'

const { Title, Link, Carousel } = AMP

const Body = styled.body`
  margin: 0 1rem;
`

const App = ({ title }) => (
  <Fragment>
    <Title>{title}</Title>
    <Link rel="canonical" href="http://localhost" />
    <Body>
      <h1>Hello World</h1>
      <Carousel lightbox width="400" height="300" layout="responsive" type="slides">
        <amp-img src="/img/image1.jpg" width="400" height="300" layout="responsive"></amp-img>
        <amp-img src="/img/image2.jpg" width="400" height="300" layout="responsive"></amp-img>
        <amp-img src="/img/image3.jpg" width="400" height="300" layout="responsive"></amp-img>
      </Carousel>
    </Body>
  </Fragment>
)

export default props => renderToString(<App title="AMP demo" />)
```


## Demo
[See complete example here](https://github.com/Ariel-Rodriguez/react-amp-template/tree/master/examples/simple-server)


## API

### renderToString

```javascript
/**
 * Transform React component into HTML AMP format.
 *
 * @returns {String} html
 * @param {Class|Object} body React component to render
 * @param {Object} options Settings
 * @property {string} options.cdnURI absolute URL to AMP CDN
 * @property {string} options.boilerplate HTML string which contains AMP boilerplate styles
 * @property {object} options.extensions Key map of references to specify an extension version
 * @property {object} options.extensions.default default version for all amp-extensions e.g '0.1'
 * @property {object} options.extensions.extension [extension-name]
 ** specify custom version for derived extension e.g: 'amp-sticky-ad': '1.0'
import { renderToString } from 'react-amp-template'
```

#### AMP components

```javascript
import { AMP } from 'react-amp-template'

const AdUnit = () => <AMP.AdUnit />
```
- RAMPT provides shorthands for amp-custom-elements. A \[ get \] operation on { AMP } module returns Node element and automatically registers the `<script />` tag required by AMP.

- The following components could be used in case of need to ad elements into `<head>` element

```javascript
  <Link /> <Meta /> <Title /> <Script /> <Tag _name="custom-tag" />
```

- By default every amp-script address to version 0.1. However it can be customized.

```javascript
renderToString(<App />, {
  extensions: {
   default: 0.2,
   'amp-sticky-unit': 1.0,
  }
})
```

#### LD+JSON

```javascript
<AMP.Script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
/>
```


## Configuration

### Babel
- Setup the environment as recomends React and Styled-Components server rendering.

#### React | Styled Components

`npm i -D babel-plugin-styled-components babel-preset-react`

```json
{
  "presets": [
    "stage-0",
    "react"
  ],
  "plugins": [
    ["babel-plugin-styled-components", { "ssr": true }]
  ]
}
```


## Contributing

- Fork the repository
- `npm install`
- `npm run dev`
- Create pull request

### Build examples

- `cd examples/simple-server`
- `npm install && npm start`

## License

This project is licensed under the Apache License, Version 2.0. Copyright (c) 2016 Ariel Fernando Rodriguez. For more information see `LICENSE.md`.
