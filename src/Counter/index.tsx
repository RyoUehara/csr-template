import React, { useState } from 'react';
import { resolve } from 'styled-jsx/css';

import Card from '$components/Card';
import Button from '$components/Button';

import { useMount } from '$util/hooks';

const Count: React.FC<{
  count: number;
}> = ({ count }) => (
  <div className="root">
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

const button = resolve`
  div.root {
    margin-right: 16px;
  }

  div.root:last-child {
    margin-right: 0px;
  }
`;

const Actions: React.FC<{
  add: () => void;
  minus: () => void;
  reset: () => void;
}> = ({ add, minus, reset }) => (
  <div className="root">
    <Button className={button.className} onClick={add}>
      Add
    </Button>
    <Button className={button.className} onClick={minus}>
      Minus
    </Button>
    <Button className={button.className} onClick={reset}>
      Clear
    </Button>
    {button.styles}
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
            margin: 0px auto;
          }
        `}
      </style>
    </div>
  );
};
