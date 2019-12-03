/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{margin: 10}}>
            <Button
              ButtonText="Button1"
              buttoncolor="rgb(0, 122, 98)"
              textcolor="#fff"
              fontWeight="500"
              fontSize={17}
              height={44}
            />
          </View>

          <View style={{margin: 10}}>
            <Button
              ButtonText="Button 2"
              bordercolorstyle="rgb(128, 188, 95)"
              textcolor="#000"
              fontWeight="500"
              borderWidth={10}
              fontSize={17}
              height={44}
            />
          </View>

          <View style={{margin: 10}}>
            <Button
              ButtonText="Button 3"
              bordercolorstyle="rgb(128, 188, 95)"
              borderWidth={5}
              textcolor="#000"
              fontWeight="500"
              borderRadius={10}
              fontSize={17}
              height={44}
            />
          </View>
          <View style={{margin: 10}}>
            <Button
              ButtonText="Button4"
              bordercolorstyle="rgb(122, 50, 10)"
              textcolor="#000"
              fontWeight="500"
              borderRadius={50}
              borderWidth={10}
              fontSize={17}
              height={50}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}



export default App;
