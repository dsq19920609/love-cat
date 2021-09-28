import React, { Fragment } from 'react';
import Divider from '../index';

export default () => (
  <Fragment>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
    merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo
    modo.
    <Divider>text</Divider>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
    merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo
    modo.
    <Divider orientation="left">text</Divider>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
    merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo
    modo.
    <Divider orientation="right" plain>
      text
    </Divider>
  </Fragment>
);
