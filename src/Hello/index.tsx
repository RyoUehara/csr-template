import React from 'react';

export default () => (
  <div className="root">
    <div className="title">Hello World!</div>
    <style jsx>
      {`
        .root {
          padding: 16px;
        }

        .root > .title {
          font-weight: 800;
          font-size: 2.8rem;
        }
      `}
    </style>
  </div>
);
