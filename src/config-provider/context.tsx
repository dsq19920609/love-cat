import * as React from 'react';

// 方向
export type DirectionType = 'ltr' | 'rtl' | undefined;

export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  direction?: DirectionType;
}

// 创建ConfigContext 提供统一的配置
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `ant-${suffixCls}` : 'ant';
  },
});

// 导出ConfigContext.Consumer
export const ConfigConsumer = ConfigContext.Consumer;
