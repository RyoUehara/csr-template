import React, { ReactElement } from 'react';

export default (): ReactElement => (
  <div className="root">
    CSR Template
    <style jsx>
      {`
        .root {
          height: 64px;
          padding: 8px 24px;
        }
      `}
    </style>
  </div>
);
