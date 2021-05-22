import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20,
           fontWeight: 'bold',
           color: 'black',
           justifyContent: 'center',
           alignSelf: 'center',
           alignContent: 'center',
           marginTop: '80%' }}>
             Read Story
        </Text>
      </View>
    );
  }
}