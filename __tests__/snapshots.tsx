import { expect } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../src/pages/index';

// eslint-disable-next-line mocha/no-global-tests
it('renders homepage unchanged', function () {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});
