import React, { FC, memo } from 'react';
import { Text as RNText } from 'react-native';
import createStyles from './style';
import { TextProps } from './type';

const TextComponent: FC<TextProps> = ({ children, size, color, weight }) => {
  const styles = createStyles({ size, color, weight });
  return <RNText style={styles['text']}>{children}</RNText>;
};

const Text = memo(TextComponent);
export { Text };
