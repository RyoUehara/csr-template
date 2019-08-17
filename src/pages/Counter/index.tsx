import React, { useState } from 'react';

import Card from '$components/Card';
import Button from '$components/Button';

import { useMount } from '$util/hooks';

const Count: React.FC<{
  count: number;
}> = ({ count }) => (
  <div className="root" data-testid="count">
    {count}
    <style jsx>
      {`
        .root {
          text-align: center;
          margin-bottom: 16px;
        }
      `}
    </style>
  </div>
);

const Actions: React.FC<{
  add: () => void;
  minus: () => void;
  reset: () => void;
}> = ({ add, minus, reset }) => (
  <div className="root">
    <Button onClick={add} data-testid="add-button">
      Add
    </Button>
    <Button onClick={minus} data-testid="minus-button">
      Minus
    </Button>
    <Button onClick={reset} data-testid="reset-button">
      Reset
    </Button>
    <style jsx>
      {`
        .root {
          display: flex;
          justify-content: space-between;
        }
      `}
    </style>
  </div>
);

export default () => {
  const [count, setCount] = useState(0);

  const handleOnAdd = () => {
    setCount(count + 1);
  };

  const handleOnMinus = () => {
    setCount(count - 1);
  };

  const handleOnReset = () => {
    setCount(0);
  };

  useMount(() => {
    console.log('counter component mounted');
  });

  return (
    <div className="root">
      <Card>
        <Count count={count} />
        <Actions
          add={handleOnAdd}
          minus={handleOnMinus}
          reset={handleOnReset}
        />
      </Card>
      <style jsx>
        {`
          .root {
            width: 300px;
          }
        `}
      </style>
    </div>
  );
};
