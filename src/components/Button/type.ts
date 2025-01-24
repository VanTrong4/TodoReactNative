import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren & {
  variant?: 'text' | 'solid' | 'outlined' | 'transparent';
  isFullWidth?: boolean;
  onPress?: () => void;
};
