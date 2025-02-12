import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { ButtonProps } from './type';

type Styles = {
  button: ViewStyle;
  text: TextStyle;
};

export default ({ variant, isFullWidth }: Pick<ButtonProps, 'variant' | 'isFullWidth'>) =>
  StyleSheet.create<Styles>({
    button: {
      backgroundColor: variant === 'solid' ? '#8875FF' : 'transparent',
      width: isFullWidth ? '100%' : 'auto',
      borderRadius: 4,
      ...(variant === 'outlined' && { borderWidth: 2, borderColor: '#8875FF' }),
      ...(variant !== 'text' && { paddingBlock: 12, paddingInline: 24 }),
    },
    text: {
      color: variant === 'text' ? 'rgba(255,255,255,0.44)' : variant === 'transparent' ? '#8875FF' : 'white',
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'Lato-Regular',
    },
  });
