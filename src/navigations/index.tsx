import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from '../libs';
import { Routes } from './Routes';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
    </NavigationContainer>
  );
};

export default RootNavigation;
