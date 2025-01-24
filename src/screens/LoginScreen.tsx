import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button/Button';

const LoginScreen = () => {
  const navigation = useNavigation<{ navigate: (routeName: string) => void }>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'red' }}>login</Text>
      <Button onPress={() => navigation.navigate('Home')}>go to home2</Button>
    </View>
  );
};

export default LoginScreen;
