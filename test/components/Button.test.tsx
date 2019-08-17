import React from 'react';

import Button from '$components/Button';
import { cleanup, render, getByTestId } from '@testing-library/react';

describe('Card test', () => {
  afterEach(() => {
    cleanup();
  });

  test('can be given className', () => {
    const { container } = render(
      <Button className="test" data-testid="component-card" />,
    );
    const buttonElement = getByTestId(container, 'component-card');
    expect(buttonElement.classList).toContain('test');
    expect(buttonElement.classList[buttonElement.classList.length - 1]).toEqual(
      'test',
    );
  });
});
