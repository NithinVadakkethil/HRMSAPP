import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Back, Search, Comment, BrandLogo, Logout } from '../../assets';
import { logout } from '../../api/auth';

const CustomHeader = ({
  logo = true,
  title,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLogoutPress = async () => {
    await logout()
    navigation.replace('Login');
  };
  const handleCommentPress = () => {
    navigation.navigate('Inbox');
  };

  return (
    <>
      {/* Safe area to avoid notch overlap */}
      <SafeAreaView edges={['top']} style={{ backgroundColor: '#F9F9F9' }}>
        <StatusBar backgroundColor="#F9F9F9" barStyle="dark-content" />
      </SafeAreaView>

      {/* Actual Header */}
      <View className="flex-row items-center justify-between px-4 py-3 min-h-[56px] bg-[#F9F9F9]">
        <View className="flex-row items-center">
          {logo ? <BrandLogo /> : <TouchableOpacity
            className="mr-4 p-1"
            onPress={handleBackPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Back />
          </TouchableOpacity>}
        </View>
        <Text className="text-[#22012F] text-xl font-inter-bold">{title}</Text>
        <View className="flex-row items-center gap-1.5">
          <TouchableOpacity
            className="p-1"
            // onPress={}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Search />
          </TouchableOpacity>
          <TouchableOpacity
            className="p-1"
            onPress={handleCommentPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Comment />
          </TouchableOpacity>
          <TouchableOpacity
            className="p-1"
            onPress={handleLogoutPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Logout />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CustomHeader;
