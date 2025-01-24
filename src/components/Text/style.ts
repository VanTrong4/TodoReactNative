import { StyleSheet, TextStyle } from 'react-native';
import { TextProps } from './type';

type Styles = {
  text: TextStyle;
};

export default ({ size, color, weight }: Pick<TextProps, 'size' | 'color' | 'weight'>) =>
  StyleSheet.create<Styles>({
    text: {
      fontSize: size ?? 16,
      color: color ?? 'rgba(255,255,255,0.87)',
      fontFamily: 'Lato-Regular',
      fontWeight: weight ?? 'regular',
    },
  });
