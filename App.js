import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './src/screens/Home';
import {FoodDetails} from './src/screens/FoodDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={FoodDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App;
