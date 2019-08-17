import React, { useState } from 'react';

import {
  cleanup,
  render,
  getByTestId,
  fireEvent,
} from '@testing-library/react';

import * as hooks from '$util/hooks';

describe('hooks test', () => {
  afterEach(() => {
    cleanup();
  });

  describe('useMount test', () => {
    const getTestComponent = (mockFn: jest.Mock<any, any>) => () => {
      const [toggle, setToggle] = useState(false);
      hooks.useMount(mockFn);

      const handleOnToggle = () => {
        setToggle(!toggle);
      };

      return (
        <div>
          {toggle}
          <div onClick={handleOnToggle} data-testid="toggle-button">
            toggle
          </div>
        </div>
      );
    };

    test('would be only called at mounted', async () => {
      const mockFn = jest.fn();
      const TestComponent = getTestComponent(mockFn);
      const { container } = await render(<TestComponent />);
      const toggleButton = getByTestId(container, 'toggle-button');
      fireEvent.click(toggleButton);

      expect(mockFn).toBeCalledTimes(1);
    });
  });
});
