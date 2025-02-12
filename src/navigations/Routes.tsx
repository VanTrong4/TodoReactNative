import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Path } from '../configs';
import { Login, Onboarding, Splash } from '../screens';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ contentStyle: { backgroundColor: '#121212' } }}
    >
      <Stack.Screen name={Path.Splash} component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name={Path.Onboarding} component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name={Path.Login} component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
