<div align="center">
  <h1><strong>RAMPT 3</strong></h1>
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
import render from 'react-amp-template'

const metaContent = {
  'http-equiv': "origin-trial",
  'data-expires': '2020-01-01',
  'data-feature': "Web Share",
  'content': "Ajcrk411RcpUCQ3ovgC8le4e7Te/1kARZsW5Hd/OCnW6vIHTs5Kcq1PaABs7SzcrtfvT0TIlFh9Vdb5xWi9LiQsAAABSeyJvcmlnaW4iOiJodHRwczovL2FtcGJ5ZXhhbXBsZS5jb206NDQzIiwiZmVhdHVyZSI6IldlYlNoYXJlIiwiZXhwaXJ5IjoxNDkxMzM3MDEwfQ=="
}

const SocialShare = (props, { head }) => {
  head.append('amp-social-share')
  return <amp-social-share {...props} />
}

const Body = (props, { head }) => {
  // Add required meta tags to head at any moment.
  head.append('meta', metaContent)
  head.append('link', {rel: 'amphtml', 'href': "https://www.example.com/url/to/amp/document.html"})
  return(
    <body>
      <h1>Preact for AMP is welcome as well!</h1>
      <SocialShare width="40" height="40" type="email"/>
      <SocialShare width="40" height="40" type="facebook"
        data-param-app_id="254325784911610" />
      <SocialShare width="40" height="40" type="gplus"/>
      <SocialShare width="40" height="40" type="linkedin"/>
      <SocialShare width="40" height="40" type="whatsapp"/>
      <SocialShare width="40" height="40" type="twitter"/>
    </body>
  )
}


render(<Body />, {
  title: 'Rendering AMP with preact',
  canonical: 'https://my-website.com',
})
```

## Styled components

```javascript
import React from 'react'
import render from 'react-amp-template'

const Body = ({ children, ...props }, { head }) =>
  <body {...props}>
    <Button>Normal</Button>
    <ThemeProvider theme={theme}>
      <Button>Themed</Button>
    </ThemeProvider>
    {children}
  </body>


const StyledBody = styled(Body)`
	background: papayawhip;
	@media (max-width: 700px) {
		background: palevioletred;
	}
`

render(<StyledBody />, {
  title: 'Styling AMP with StyledComponents',
  canonical: 'https://canonical.com',
  styleManager: 'styled-components',
})
```

[See more here](https://github.com/Ariel-Rodriguez/react-amp-template/tree/master/examples)


## API

### Template

```javascript
import { Template } from 'react-amp-template'
const template = new Template({ title, canonical, styleManager })
```

### Options

 - *title* | Add meta title with [_title_]
 - *canonical*  | Add link canonical with href to [_canonical_]
 - *styleManager* | {string | function}. Allowed `aphrodite` `styled-components` `undefined` `function` 


### Context

Every children element receives the high order `context`.
It allows components to add custom content to Head.


#### AMP component

Ensure to add the amp-custom script required.
RAMPT prevents duplicated scripts automatically.

```javascript
const Element = (props, context) => {
 context.head.append('amp-sidebar')
 context.head.append('amp-sidebar') // <- it won't be added
 return ...
}
```

`<script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>`

By default every amp-script address to version 0.1. However it can be customized.

```javascript
const Element = (props, context) => {
 context.head.append('amp-sticky-ad', { version: '1.0' })
 return ...
}
```

`<script async custom-element="amp-sticky-ad" src="https://cdn.ampproject.org/v0/amp-sticky-ad-0.1.js"></script>`


#### LD+JSON

```javascript
const Element = (props, context) => {
  context.head.append('ldjson', { id: 'myjson', content: {foo: 'bar' }})
  return ...
}
```

`<script type="application/json" id="myjson">{foo:bar}</script>`


#### Mustache

```javascript
 const Element = (props, { head }) => {
   head.append('amp-list')
   head.append('amp-mustache')

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
- `yarn dev`

### Build examples

- `yarn examples`

## License

This project is licensed under the Apache License, Version 2.0. Copyright (c) 2016 Ariel Fernando Rodriguez. For more information see `LICENSE.md`.
