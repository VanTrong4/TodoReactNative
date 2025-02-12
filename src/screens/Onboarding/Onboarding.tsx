import React from 'react';
import { FlatList, View } from 'react-native';
import { OnboardingItem } from './Children/OnboardingItem';
import slides from './slides';

const Onboarding = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList data={slides} renderItem={({ item }) => <OnboardingItem item={item} />} />
    </View>
  );
};

export { Onboarding };
