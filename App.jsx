import './global.css'
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, TextInput, StatusBar} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  useEffect(() => {
    const defaultFont = {
      style: {
        fontFamily: 'Inter-Regular',
      },
    };

    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.style = [defaultFont.style];

    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.style = [defaultFont.style];
  }, []);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#A92323" barStyle="dark-content" />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;