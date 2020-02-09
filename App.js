import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NameScreen} from './src/components/Screens/NameScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} barStyle="dark-content" />
      <SafeAreaView>
        <NameScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
