import React, { FC, memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import createStyles from './style';
import { ButtonProps } from './type';

const ButtonComponent: FC<ButtonProps> = ({ variant = 'solid', isFullWidth = false, children, onPress }) => {
  const styles = createStyles({ variant, isFullWidth });
  return (
    <TouchableOpacity style={styles['button']} onPress={onPress}>
      <Text style={styles['text']}>{children}</Text>
    </TouchableOpacity>
  );
};

const Button = memo(ButtonComponent);
export { Button };
