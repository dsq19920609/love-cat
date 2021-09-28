import React, { useState } from 'react';
import t from 'prop-types';
import classname from 'classnames';
import './style/index.less';

export interface AlertProps {
  kind?: 'info' | 'success' | 'error' | 'warning';
  closable?: boolean;
  onClose?: (e: MouseEvent) => void;
  styles?: React.CSSProperties;
}

export type KindMap = Record<Required<AlertProps>['kind'], string>;

const prefixCls = 'ant-alert';

const kinds: KindMap = {
  info: '#e6f7ff',
  success: '#f6ffed',
  error: '#fff2f0',
  warning: '#fffbe6',
};

const Alert: React.FC<AlertProps> = (props) => {
  const {
    children,
    kind = 'info',
    closable = false,
    onClose,
    styles,
    ...rest
  } = props;

  const [show, setShow] = useState(true);

  const handleCloseAction = (e: any) => {
    setShow(false);
    if (typeof onClose === 'function') {
      onClose(e);
    }
  };

  return (
    <div
      className={classname(prefixCls, `${prefixCls}-${kind}`)}
      style={{
        background: kinds[kind],
        display: show ? 'block' : 'none',
        ...styles,
      }}
      {...rest}
    >
      {closable && (
        <img
          src="http://81.68.185.126/static/close.6668768d.svg"
          onClick={(e) => handleCloseAction(e)}
          className={`${prefixCls}-close`}
          alt=""
        />
      )}
      <div>{children}</div>
    </div>
  );
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'success', 'error', 'warning']),
};

export default Alert;
