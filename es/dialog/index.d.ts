import React, { FC } from 'react';
import './style/index.less';
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
declare const Dialog: FC<DialogProps>;
export default Dialog;
