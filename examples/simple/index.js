var RAMPT = require('react-amp-template').default;
var App = require('./app.jsx');

var rampt = new RAMPT({
  template: {
    head: {
      title: 'react amp template',
      canonical: 'http',
    }
  }
});


rampt
  .renderStatic(App())
  .then(console.log)
  .catch(function(error){
    console.log('Errors founds! Use npm run debug for debug trace.');
    console.log('Document failed '+((error.validation) ? 'at AMP validations.' : 'at internal rendering.'));
    console.log('Markup output: ', error.markup);
    process.exit(1);
  });

