/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Navigation from './Component/Navigation/Navigation';


const App = () => {
 

  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{flex:1}}>
      <StatusBar  />
      <Navigation/>
      </View>
    </SafeAreaView>
  );
};


export default App;
