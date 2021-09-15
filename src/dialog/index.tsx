import React, { FC } from 'react';
import t from 'prop-types';
import './index.less';

const prefixCls = 'love-cat';

interface DialogProps {
  /**
   * @description 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * @description 类型
   */
  type?: 'default' | 'primary' | 'secondary';
  /**
   * @description 是否处于禁用状态
   */
  disabled?: boolean;
}

const Dialog: FC<DialogProps> = ({ children, onClick }) => {
  return (
    <div className={prefixCls} onClick={onClick}>
      {children}
    </div>
  );
};

export default Dialog;
