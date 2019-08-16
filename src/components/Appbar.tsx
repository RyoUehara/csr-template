import React, { ReactElement } from 'react';

import { resolve } from 'styled-jsx/css';

import { Link } from 'react-router-dom';

const link = resolve`
  a {
    margin-right: 32px;
  }

  a:last-child {
    margin-right: 0px;
  }
`;

const Tabs = () => (
  <div className="root">
    <Link className={link.className} to="/">
      Index
    </Link>
    <Link className={link.className} to="/counter">
      Counter
    </Link>
    {link.styles}
    <style jsx>
      {`
        .root {
          flex: 1;
          margin: 0 0 0 48px;
        }
      `}
    </style>
  </div>
);

export default (): ReactElement => (
  <div className="root">
    <div className="title">CSR TEMPLATE</div>
    <Tabs />
    <style jsx>
      {`
        .root {
          height: 64px;
          padding: 8px 24px;
          line-height: 48px;
          display: flex;
        }

        .root > .title {
          font-size: 1rem;
        }
      `}
    </style>
  </div>
);
