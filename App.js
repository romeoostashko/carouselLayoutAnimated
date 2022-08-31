import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Home} from './src/screens/Home';
import {FoodDetails} from './src/screens/FoodDetails';

const Stack = createSharedElementStackNavigator();

const App = () => {
  return <MyStack />;
};
const config = {
  animation: 'timing',
  config: {
    duration: 400,
  },
};

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
            transitionSpec: {open: config, close: config},
          }}
        />
        <Stack.Screen
          name="Details"
          component={FoodDetails}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
            transitionSpec: {open: config, close: config},
          }}
          sharedElements={(route, otherRoute, showing) => {
            const {item} = route.params;
            return [
              {
                id: `item.${item.key}.text`,
                animation: 'fade-out',
                resize: 'auto',
                align: 'auto',
              },

              {
                id: `item.${item.key}.price`,
                animation: 'fade-in',
                resize: 'clip',
                align: 'auto',
              },

              {
                id: `item.${item.key}.bg`,
                animation: 'auto',
                resize: 'clip',

                align: 'auto',
              },
              {
                id: `item.${item.key}.image`,
                animation: 'move',
                resize: 'stretch',
                align: 'center-center',
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
