/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';

import NavBar from '../components/nav-bar/NavBar';

describe('NavBar', function () {
  it('renders a Name', function () {
    render(<NavBar />);

    const heading = screen.getByRole('heading', {
      name: /Krishna Kishore/i
    });

    expect(heading).toBeInTheDocument();
  });
});
