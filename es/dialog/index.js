import React from 'react';
import './index.css';
var prefixCls = 'love-cat';

var Dialog = function Dialog(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: prefixCls,
      onClick: onClick,
    },
    children,
  );
};

export default Dialog;
