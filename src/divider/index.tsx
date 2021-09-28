import * as React from 'react';
import classNames from 'classnames';
import './style/index.less';

export interface DividerProps {
  prefixCls?: string;
  type?: 'horizontal' | 'vertical';
  orientation?: 'left' | 'right' | 'center';
  classname?: string;
  children?: React.ReactNode;
  dashed?: boolean;
  style?: React.CSSProperties;
  plain?: boolean;
}

const prefixCls = 'ant-divider';

const Divider: React.FC<DividerProps> = (props) => {
  const {
    type = 'horizontal',
    orientation = 'center',
    classname,
    children,
    dashed,
    plain,
    ...restProps
  } = props;
  const orientationPrefix =
    orientation.length > 0 ? `-${orientation}` : orientation;
  const hasChildren = !!children;
  const classString = classNames(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-text`]: hasChildren,
      [`${prefixCls}-with-text${orientationPrefix}`]: hasChildren,
      [`${prefixCls}-dashed`]: !!dashed,
      [`${prefixCls}-plain`]: !!plain,
    },
    classname,
  );
  return (
    <div className={classString} {...restProps} role="separator">
      {children && (
        <span className={`${prefixCls}-inner-text`}>{children}</span>
      )}
    </div>
  );
};

export default Divider;
