import { StyleSheet, TextStyle } from 'react-native';
import { AppTextProps } from './type';

type Styles = {
  text: TextStyle;
};

export default ({ weight, size, alpha }: Pick<AppTextProps, 'weight' | 'size' | 'alpha'>) => {
  const sizes = { sm: 12, md: 16, lg: 20, xl: 32, '2xl': 40 };
  const weights = { normal: 'Lato-Regular', semiBold: 'Lato-Bold', bold: 'Lato-Black' };

  return StyleSheet.create<Styles>({
    text: {
      fontSize: sizes[size || 'md'],
      color: `rgba(255,255,255,${alpha ?? 0.87})`,
      fontFamily: weights[weight || 'normal'],
    },
  });
};
