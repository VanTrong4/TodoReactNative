import React, { FC, memo } from 'react';
import { Text } from 'react-native';
import createStyles from './styles';
import { AppTextProps } from './type';

const AppTextComponent: FC<AppTextProps> = ({ children, style, alpha, size, weight, ...props }) => {
  const styles = createStyles({ size, weight, alpha });
  return (
    <Text allowFontScaling={false} style={[styles['text'], style]} {...props}>
      {children}
    </Text>
  );
};

const AppText = memo(AppTextComponent);
export { AppText };
