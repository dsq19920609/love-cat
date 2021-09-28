import React, { Fragment } from 'react';
import Divider from '../index';

export default () => (
  <Fragment>
    <Divider type="vertical" />
    home
    <Divider type="vertical" />
    about
    <Divider type="vertical" dashed />
    my
    <Divider type="vertical" />
    center
    <Divider type="vertical" />
  </Fragment>
);
