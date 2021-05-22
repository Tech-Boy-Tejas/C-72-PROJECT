import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadStoryScreen from './screens/readStoryScreen';
import WriteStoryScreen from './screens/writeStoryScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  READSTORY: { screen: ReadStoryScreen },
  WRITESTORY: { screen: WriteStoryScreen },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;

        if (routeName === 'READSTORY') {
          return (
            <Image
              style={{ width: 40, height: 40 }}
              source={require('./assets/read.png')} />
          )
        }

        else if (routeName === 'WRITESTORY') {
          return (
            <Image
              style={{ width: 40, height: 40 }}
              source={require('./assets/write.png')} />
          )
        }
      }
    })
  })

const AppContainer = createAppContainer(TabNavigator);


