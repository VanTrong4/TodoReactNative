import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RootNavigation from './src/navigations';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
        <RootNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
