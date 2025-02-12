import { TextProps, TextStyle } from 'react-native';

export type AppTextProps = Omit<TextProps, 'style'> & {
  style?: TextStyle;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'semiBold' | 'bold';
  alpha?: number;
};
