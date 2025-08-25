import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackgroundDecoration, Logo, WelcomeSection, InputField, PasswordInput, CustomButton } from '../../components';
import { login } from '../../api/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      username: '',
      password: ''
    };

    if (!username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }
    // Removed password length validation as requested

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async () => {
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    try {
      const response = await login(username, password);
      if (response.results.token) {
        navigation.replace('MainTabs');
      } else {
        Alert.alert('Error', response.message || 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password pressed');
  };

  // Helper function to clear specific error when user starts typing
  const clearError = (field) => {
    setErrors(prev => ({...prev, [field]: ''}));
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
                  onChangeText={(text) => {
                    setUsername(text);
                    clearError('username');
                  }}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                {errors.username ? (
                  <Text className="text-red-500 text-xs mt-1 ml-1">{errors.username}</Text>
                ) : null}

                <PasswordInput
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    clearError('password');
                  }}
                />
                {errors.password ? (
                  <Text className="text-red-500 text-xs mt-1 ml-1">{errors.password}</Text>
                ) : null}

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

              {/* Login Button with loading state */}
              <TouchableOpacity
                onPress={handleLogin}
                disabled={loading}
                className={`py-4 px-6 rounded-lg items-center ${loading ? 'bg-teal-400' : 'bg-teal-600'}`}
              >
                {loading ? (
                  <View className="flex-row items-center">
                    <ActivityIndicator size="small" color="white" />
                    <Text className="text-white font-semibold ml-2">Logging in...</Text>
                  </View>
                ) : (
                  <Text className="text-white font-semibold">Login</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;