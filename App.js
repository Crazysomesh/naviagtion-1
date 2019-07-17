import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class SignUp extends Component {

  static navigationOptions = {
    title: 'SignUp'
  }

  
  constructor(props) {
    super(props) 

    this.state = {
      UserName : "",
      UserEmail : "",
      UserPassword : ""
    }
  }

  UserRegistrationFunction = () => {
    const { UserName } = this.state;
    const { UserEmail } = this.state;
    const { UserPassword } = this.state;

    fetch('http://192.168.1.7/test/user_registration.php', {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name: UserName,
        email: UserEmail,
        password: UserPassword
      })
    }).then((response) => response.json())
        .then((responseJson) => {
          Alert.alert(responseJson);
        }).catch((error) => {
          console.log(error);
        });
  }
  
  render() {
    return (
      <View style = {styles.MainContainer}>
        <TextInput
            placeholder = "Enter user name"
            onChangeText = { UserName => this.setState({UserName}) }
            underlineColorAndroid = 'transparent'
            style = {styles.TextInputStyleClass}
        />
        <TextInput
            placeholder = "Enter user email"
            onChangeText = { UserEmail => this.setState({UserEmail}) }
            underlineColorAndroid = 'transparent'
            style = {styles.TextInputStyleClass}
        />
        <TextInput
            placeholder = "Enter user password"
            onChangeText = { UserPassword => this.setState({UserPassword}) }
            underlineColorAndroid = 'transparent'
            style = {styles.TextInputStyleClass}
            secureTextEntry = {true}
        />
        <Button title="SignUp" onPress = {this.UserRegistrationFunction} color="#2196F3" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
MainContainer :{
  
justifyContent: 'center',
flex:1,
margin: 10
},
  
TextInputStyleClass: { 
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
borderColor: '#2196F3',
borderRadius: 5 , 
},

text: {
  fontSize: 20,
  color: "#000",
  textAlign: 'center',
  marginBottom: 15,
}
  
});

const AppNavigator = createStackNavigator({
  SignUp: {
    screen: SignUp
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}