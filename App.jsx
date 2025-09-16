import './global.css';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TextInput, StatusBar, View, ActivityIndicator } from 'react-native';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';

function AppContent() {
  const { isLoading } = useAuth();

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

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#A92323" />
        <StatusBar backgroundColor="#A92323" barStyle="dark-content" />
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#A92323" barStyle="dark-content" />
      <RootNavigator />
    </>
  );
}

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;