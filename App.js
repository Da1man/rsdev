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
import {BornScreen} from './src/components/Screens/BornScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden={true} barStyle="dark-content" />
      <SafeAreaView>
        {/*<NameScreen />*/}
        <BornScreen/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
