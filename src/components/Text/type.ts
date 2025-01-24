import { PropsWithChildren } from 'react';

export type TextProps = PropsWithChildren & {
  size?: number;
  color?: string;
  weight?: 'regular' | 'bold';
};
