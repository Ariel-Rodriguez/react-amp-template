import Validator from '../../../lib/utils/ampvalidator';
import { expect } from 'chai';
import sinon from 'sinon';
import AppStatic from '../../mocks/appStatic';

const sx = sinon.sandbox.create();
let validator;
let AppHTML;

describe('AMP Validation', sinon.test(() => {
  before('setup', (done) => {
    Validator.getInstance().then((instance) => {
      validator = instance;
      // warm up validator
      validator.validateMarkup('', true);
    })
    .then(AppStatic.render)
    .then((html) => {
      AppHTML = html;
      done();
    });
  });

  after(() => {
    sx.restore();
  });

  it('Simple html should FAIL', () => {
    // validateMarkup with true to skip console errors
    expect(validator.validateMarkup('<html amp></html>', true).status).to.equal('FAIL');
  });

  it('Sample App should PASS', () => {
    const validation = validator.validateMarkup(AppHTML);
    expect(validation.status).to.equal('PASS');
  })
}));
