import React from 'react';

import {
  cleanup,
  getByTestId,
  render,
  fireEvent,
} from '@testing-library/react';

import Counter from 'src/pages/Counter';

describe('Counter component test', () => {
  afterEach(() => {
    cleanup();
  });

  test('initialize state', async () => {
    const { container } = await render(<Counter />);
    const counterDisplayElement = getByTestId(container, 'count');
    expect(counterDisplayElement.textContent).toEqual('0');
  });

  test('add should be increment count', async () => {
    const { container } = await render(<Counter />);
    const counterDisplayElement = getByTestId(container, 'count');
    const addButton = getByTestId(container, 'add-button');
    fireEvent.click(addButton);

    expect(counterDisplayElement.textContent).toEqual('1');
  });

  test('minus should be decrement count', async () => {
    const { container } = await render(<Counter />);
    const counterDisplayElement = getByTestId(container, 'count');
    const minusButton = getByTestId(container, 'minus-button');
    fireEvent.click(minusButton);

    expect(counterDisplayElement.textContent).toEqual('-1');
  });

  test('reset should be reset count', async () => {
    const { container } = await render(<Counter />);
    const counterDisplayElement = getByTestId(container, 'count');
    const addButton = getByTestId(container, 'add-button');
    const resetButton = getByTestId(container, 'reset-button');
    fireEvent.click(addButton);
    fireEvent.click(resetButton);

    expect(counterDisplayElement.textContent).toEqual('0');
  });
});
