import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

class Home extends React.Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'lightblue'
    }
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}>
            Home screen
        </Text>
      </View>
    );
  }
}

class Dashboard extends React.Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'lightblue'
    }
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text}>
            Dashboard screen
        </Text>
      </View>
    );
  }
}

//app container for stack navigator 
// const AppStackNavigator = createStackNavigator(
// {
//   Home: Home
// },
// {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: 'orange',
//     }
//   }
// }
// );

const AppDrawerNavigator = createDrawerNavigator(
{
  Home: Home,
  Dashboard: Dashboard
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'orange',
    }
  }
}
);

const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  }
})