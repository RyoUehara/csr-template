import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <style jsx global>
    {`
      html {
        font-family: -apple-system, BlinkMacSystemFont, Roboto, '游ゴシック体',
          YuGothic, 'Yu Gothic Medium', sans-serif;
      }
      body {
        margin: 0;
      }
    `}
  </style>
);
