import React from 'react';
import { scripts } from '../../lib';

scripts('amp-form');
export default () => (
  <form
    method="GET"
    action="https://ampbyexample.com/components/amp-form/submit-form"
    target="_top"
  >
    <input
      type="search"
      className="data-input"
      placeholder="Search..."
      name="googlesearch"
    />
    <input
      type="submit"
      value="OK"
      className="button button-primary other-input"
    />
  </form>
);
