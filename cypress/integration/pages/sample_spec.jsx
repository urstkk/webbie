import 'mocha';

import { mount } from '@cypress/react';
import React from 'react';

import Index from '../../../src/pages/index';

describe('Hello function', function () {
  it('Renders page component', function () {
    mount(<Index />);
    cy.contains('Welcome to Next.js');
  });
});
