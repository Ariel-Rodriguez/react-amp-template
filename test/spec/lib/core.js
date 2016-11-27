import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { core, renderToStaticMarkup } from '../../../lib';
import { App, MOCK_DATA } from '../../mocks/core';

const setupResults = {
  AppHTML: '',
  errors: 'none',
};

describe('Core', sinon.test(() => {
  describe('Render Static Markup - defaults', () => {
    before('setup', (done) => {
      sinon.spy(core, 'getValidator');
      sinon.spy(core, 'validateMarkup');
      renderToStaticMarkup(<App />, MOCK_DATA.config).then((html) => {
        setupResults.html = html;
        done();
      }).catch((err) => {
        setupResults.errors = err;
        done();
      });
    });
    after(() => {
      core.getValidator.restore();
      core.validateMarkup.restore();
    });
    it('Should call getValidator once.', () => {
      expect(core.getValidator.calledOnce).to.equal(true);
    });
    it('Should call validateMarkup once.', () => {
      expect(core.getValidator.calledOnce).to.equal(true);
    });
    it('Should not throw errors.', () => {
      expect(setupResults.errors).to.equal('none');
    });
    it(`HTML rendered should contain '${MOCK_DATA.content.data}' string.`, () => {
      expect(setupResults.html).to.contain(MOCK_DATA.content.data);
    });
    it('HTML rendered should contain lang="en" string.', () => {
      expect(setupResults.html).to.contain(MOCK_DATA.content.data);
    });
  });
}));
