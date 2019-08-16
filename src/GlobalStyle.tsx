import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <style jsx global>
    {`
      * {
        box-sizing: border-box;
      }
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
