import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Routes } from './Routes';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default RootNavigation;
