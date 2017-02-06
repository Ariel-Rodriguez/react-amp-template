var React = require('react');
var addMeta = require('react-amp-template').addMeta;
var addScript = require('react-amp-template').addScript;

var App = function App(props) {

  // Add meta bulk mode.
  addMeta([{
    type: 'meta',
    content: {
      name:'og:image',
      content:'http://image.png',
    }
  },{
    type: 'link',
    content: {
      rel:'logo', href:'http://logo.png',
    }
  }]);
  // add meta tag single mode.
  addMeta({
    type: 'application/ld+json',
    content: "{'@context': 'http://schema.org', '@type': 'NewsArticle'}"
  });
  // register any amp-script. just an example.
  addScript('amp-social-share');

  return React.createElement('div', null, 'Hello World');
};

module.exports = App;
