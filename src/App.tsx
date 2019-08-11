import React, { ReactElement } from 'react';

import Appbar from '$components/Appbar';

import Counter from './Counter';

import GlobalStyle from './GlobalStyle';

export default (): ReactElement => (
  <>
    <Appbar />
    <Counter />
    <GlobalStyle />
  </>
);
