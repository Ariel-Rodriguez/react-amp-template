import Validator from '../../../lib/utils/ampvalidator';
import { expect } from 'chai';
import sinon from 'sinon';
import AppStatic from '../../mocks/appStatic';
import path from 'path';

const sx = sinon.sandbox.create();
let validator;
let AppHTML;

describe('AMP Validation', sinon.test(() => {
  before('setup', (done) => {
    // warm up validator
    Validator.getInstance().then((instance) => {
      validator = instance;
      validator.validateMarkup('');
      done();
    });
    AppStatic.render().then((html) => {
      AppHTML = html;
    });
  });

  after(() => {
    sx.restore();
  });

  it('Simple html should FAIL', () => {
    expect(validator.validateMarkup('<html amp></html>').status).to.equal('FAIL');
  });

  it('Sample App should PASS', () => {
    expect(validator.validateMarkup(AppHTML).status).to.equal('PASS');
  })
}));
