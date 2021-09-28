import React from 'react';
import Alert from '../index';

export default () => {
  const handleClose = () => {
    alert('i am closing');
  };

  return (
    <div>
      <Alert kind="info">info</Alert>
      <br />
      <Alert kind="success">success</Alert>
      <br />
      <Alert kind="error" closable onClose={handleClose}>
        error
      </Alert>
      <br />
      <Alert kind="warning">warning</Alert>
      <br />
    </div>
  );
};
