import React, { FC } from 'react';
import { View } from 'react-native';
import { AppText } from '../../../components';
import styles from './styles';
import { OnboardingItemProps } from './type';

const OnboardingItem: FC<OnboardingItemProps> = ({ item }) => {
  const { icon: IconComponent, title, description } = item ?? {};
  return (
    <View style={styles['container']}>
      {IconComponent && <IconComponent />}
      <AppText size="xl" weight="semiBold" style={styles['title']}>
        {title}
      </AppText>
      <AppText style={styles['description']}>{description}</AppText>
    </View>
  );
};

export { OnboardingItem };
