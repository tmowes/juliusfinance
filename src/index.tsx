import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#21222c' }}>
      <StatusBar style='auto' />
      <View style={{ flex: 1, marginTop: 28, backgroundColor: '#21222c' }}>
        <Text style={{ fontSize: 20, color: '#33adff' }}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
