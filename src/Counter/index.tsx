import React, { useState } from 'react';

import Card from '$components/Card';
import Button from '$components/Button';

import { useMount } from '$util/hooks';

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

  /* useMount(() => {
   *   console.log('counter component mounted');
   * }); */

  return (
    <div className="root">
      <Card>
        <Button onClick={handleOnAdd}>Add</Button>
        <Button onClick={handleOnMinus}>Minus</Button>
        <Button onClick={handleOnReset}>Clear</Button>
      </Card>

      <style jsx>
        {`
          .root {
            width: 500px;
            margin: 0px auto;
          }
        `}
      </style>
    </div>
  );
};
