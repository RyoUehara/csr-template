import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Appbar from '$components/Appbar';

import Hello from './pages/Hello';
import Counter from './pages/Counter';

export default () => (
  <BrowserRouter>
    <Appbar />
    <Route path="/" exact component={Hello} />
    <Route path="/counter" exact component={Counter} />
  </BrowserRouter>
);
