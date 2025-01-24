import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../components/Button/Button';

const HomeScreen = () => {
  const navigation = useNavigation<{ navigate: (routeName: string) => void }>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'red' }}>Home Screen2</Text>
      <Button onPress={() => navigation.navigate('Login')}>go to login</Button>
    </View>
  );
};

export default HomeScreen;
