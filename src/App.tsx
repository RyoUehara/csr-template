import React, { ReactElement } from 'react';

import Router from './Router';

import GlobalStyle from './GlobalStyle';

export default (): ReactElement => (
  <>
    <Router />
    <GlobalStyle />
  </>
);
