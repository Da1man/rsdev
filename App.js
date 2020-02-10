import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';

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
import {SkillsSceen} from './src/components/Screens/SkillsScreen';


const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const App: () => React$Node = () => {
  return (
        <NavigationContainer>
          <StatusBar hidden={true} barStyle="dark-content"/>
          <Stack.Navigator initialRouteName="NameScreen">
            <Stack.Screen
              name="NameScreen"
              component={NameScreen}
              options={{headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <Stack.Screen
              name="BornScreen"
              component={BornScreen}
              options={{headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              }}
            />
            <Stack.Screen
              name="SkillsSceen"
              component={SkillsSceen}
              options={{headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
