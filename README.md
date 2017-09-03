<div align="center">
  <h1><strong>RAMPT 3-rc.0</strong></h1>
  <div align="center">Server side rendering using Preact + ModularCSS/JSCSS + AMP-custom-elements.</div>
</div>

<br />

<div align="center">
  <!-- Build Status -->
  <a href="https://travis-ci.org/Ariel-Rodriguez/react-amp-template">
    <img src="https://travis-ci.org/Ariel-Rodriguez/react-amp-template.svg?branch=master" alt="Build Status" />
  </a>
  <!-- npm ver -->
  <a href="https://badge.fury.io/js/react-amp-template"><img src="https://badge.fury.io/js/react-amp-template.svg" alt="npm version" height="18"></a>
</div>


Write AMP pages using React syntaxt right the way and style with your preferred style manager

<dl>
  <dt>:zap: AMP elements</dt>
  <dd>Ready to render any <a href="https://ampbyexample.com/#components">AMP component</a></dd>
  <dt>:nail_care: Modular CSS</dt>
  <dd>Style with the power of <a href="https://github.com/styled-components/styled-components">Styled Components</a> or <a href="https://github.com/Khan/aphrodite">Aphrodite</a> or Your Own custom StyleManager!</dd>
</dl>




## Contents

- [Usage](#usage)
- [API](#api)
- [Configuration](#configuration)
- [Contribute](#contributing)


## Usage

### Install from NPM

- `yarn add react-amp-template`

### Static Render

```javascript
import { h } from 'preact'
import RAMPT from 'react-amp-template'

const AMPTemplate = new RAMPT({
  title: 'Creating AMP Page with React',
  canonical: 'https://my-website.com',
})

const SocialShare = (props, { template }) => {
  template.register('amp-social-share')
  return <amp-social-share {...props} />
}

const Body = (props, context) => {
  // Add required meta tags to head at any moment.
  context.template.register('meta', {'http-equiv': "origin-trial", 'data-feature': "Web Share"})

  return(
    <body>
      <h1>Preact for AMP is welcome as well!</h1>
      <SocialShare width="40" height="40" type="email"/>
    </body>
  )
}

// Full HTML in plain text AMP ready.
AMPTemplate.renderToString(<Body />)

```
[See more here](https://github.com/Ariel-Rodriguez/react-amp-template/tree/master/examples)


## API

### Template

```javascript
import RAMPT from 'react-amp-template'
const template = new RAMPT({ title, canonical, styleManager })
```

### Options

 - *title* | Add meta title with [_title_]
 - *canonical*  | Add link canonical with href to [_canonical_]
 - *styleManager* | {string | function}. Allowed `aphrodite` `styled-components` `undefined` `function` 

### Styling

- Add styling using Style Components

```javascript
import React from 'react'
import styled from 'style-components'

const Body = props => <body {...props}/>

const StyledBody = styled(Body)`
  background: papayawhip;
  height: 3em;
  width: 3em;

  @media (max-width: 700px) {
    background: palevioletred;
  }
`

renderToString(<StyledBody />)
```


### Context

Every children element receives the high order context.
It allows components to add custom content to Head.
Ensure to add the amp-custom script required. RAMPT prevents duplicated scripts by self.

#### AMP component

Ensure to add the amp-custom script required.
RAMPT prevents duplicated scripts automatically.

```javascript
const Element = (props, context) => {
 context.template.register('amp-sidebar')
 context.template.register('amp-sidebar') // <- it won't be added
 return ...
}
```

By default every amp-script address to version 0.1. However it can be customized.

```javascript
const Element = (props, context) => {
 context.template.register('amp-sidebar', { version: '0.2' })
 return ...
}
```

#### LD+JSON

```javascript
 const Element = (props, context) => {
   context.template.register('json', null, JSON.stringify({ foo: 'bar' }))
   return ...
 }
```

#### Mustache (in development)

```javascript
 const Element = (props, {template}) => {
   template.register('amp-list')
   template.register('mustache')

   return (
    <amp-list src="https://ampbyexample.com/json/cart.json"
      layout="fixed-height"
      height="56">
      <template type="amp-mustache"
        dangerousllySetInnerHTML={{ __html: "Hi {{fullname}}!" }}>
      </template>
    </amp-list>
   )
 }
```

## Configuration

RAMPT renders to string thanks to [preact-render-to-string](https://github.com/developit/preact-render-to-string)

A system bundler is recommended in order to make it work with React and Styled components.
Take a look for [this webpack configuration for RAMPT examples](https://github.com/Ariel-Rodriguez/react-amp-template/blob/master/config/webpack.config.babel.js)

### Babel & Webpack

#### React | Styled Components

`yarn add --dev babel-plugin-styled-components babel-preset-react babel-plugin-module-resolver`

```json
{
  "presets": [
    "stage-0",
    "react"
  ],
  "plugins": [
    ["babel-plugin-styled-components", { "ssr": true }]
    ["module-resolver", {
      "root": ["."],
      "alias": {
        "react": "preact-compat",
        "react-dom": "preact-compat"
      }
    }]
  ]
}
```

- Add Webpack alias

```javascript
resolve: {
  extensions: ['.jsx', '.js'],
  modules: [
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, 'node_modules')
  ],
  alias: {
    'react': 'preact-compat',
    'react-dom': 'preact-compat',
  }
}
  ...
```

- Include styled-component in the bundle in order to bypass React alias into Preact

```javascript
externals: [ nodeExternals({
  whitelist: ['styled-components']
})]
```

## Preact

```json
{
  "presets": [
    "stage-0",
    "preact"
  ]
}
```

## Contributing

- `$git clone git@github.com:Ariel-Rodriguez/react-amp-template.git`
- `yarn`
- create an issue, create a branch with issue initials
- `yarn dev`

### Build examples

- `yarn examples`

## License

This project is licensed under the Apache License, Version 2.0. Copyright (c) 2016 Ariel Fernando Rodriguez. For more information see `LICENSE.md`.
