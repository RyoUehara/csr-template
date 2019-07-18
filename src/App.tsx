import React, { ReactElement, Fragment } from 'react';

import Appbar from '$components/Appbar';
import Style from './Style';

export default (): ReactElement => (
  <Fragment>
    <Appbar />
    <Style />
  </Fragment>
);
