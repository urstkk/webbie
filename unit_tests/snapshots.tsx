import { shallow } from 'enzyme';
import * as React from 'react';

import Index from '../src/pages/index';

describe('With Enzyme', function () {
  it('App shows "A simple example repo" in a <p> tag', function () {
    const app = shallow(<Index />);
    expect(app.find('p').text()).toEqual('A simple example repo');
  });
});
