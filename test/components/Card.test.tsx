import React from 'react';

import Card from '$components/Card';
import { cleanup, render, getByTestId } from '@testing-library/react';

describe('Card test', () => {
  afterEach(() => {
    cleanup();
  });

  test('can be given className', () => {
    const { container } = render(
      <Card className="test" data-testid="component-card" />,
    );
    const cardElement = getByTestId(container, 'component-card');
    expect(cardElement.classList).toContain('test');
    expect(cardElement.classList[cardElement.classList.length - 1]).toEqual(
      'test',
    );
  });
});
