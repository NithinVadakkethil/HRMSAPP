import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackgroundDecoration, Logo, WelcomeSection, InputField, PasswordInput, CustomButton } from '../../components';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login pressed with:', { username, password });
    navigation.replace('MainTabs');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password pressed');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 relative">
          {/* Background Decoration */}
          <BackgroundDecoration />

          {/* Main Content */}
          <View className="flex-1 px-8 pt-28">
            {/* Logo */}
            <View className="items-start mb-12">
              <Logo />
            </View>

            {/* Login Form */}
            <View className="flex-1">
              {/* Welcome Section */}
              <WelcomeSection />

              {/* Form Fields */}
              <View className="mb-6">
                <InputField
                  label="Login"
                  placeholder="Enter your user name"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                  autoCorrect={false}
                />

                <PasswordInput
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                />

                {/* Forgot Password Link */}
                <TouchableOpacity
                  onPress={handleForgotPassword}
                  className="self-end mb-8"
                >
                  <Text className="text-sm text-teal-600 font-medium">
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Login Button */}
              <CustomButton onPress={handleLogin} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
