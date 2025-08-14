import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Bell, Search, Comment, BrandLogo } from '../../assets';

const CustomHeader = ({
  logo = true,
  title,
  onBackPress,
}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const handleNotificationPress = () => {
    navigation.navigate('Notification');
  };
  const handleCommentPress = () => {
    navigation.navigate('Inbox');
  };

  return (
    <>
      {/* Safe area to avoid notch overlap */}
      <SafeAreaView edges={['top']} style={{ backgroundColor: '#FFFFFF' }}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      </SafeAreaView>

      {/* Actual Header */}
      <View className="flex-row items-center justify-between px-4 py-3 min-h-[56px] bg-[#FFFFFF]">
        <View className="flex-row items-center">
            {logo ? <BrandLogo  /> :  <TouchableOpacity
              className="mr-4 p-1"
              onPress={handleBackPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              {/* <Icon name={ICONS.BACK} size={24} color="white" /> */}
            </TouchableOpacity>}
        </View>
        <Text className="text-[#22012F] text-xl font-inter-bold">{title}</Text>
        <View className="flex-row items-center">
        <TouchableOpacity
              className="p-1"
              // onPress={handleNotificationPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Search/>
            </TouchableOpacity>
        <TouchableOpacity
              className="p-1"
              onPress={handleCommentPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Comment/>
            </TouchableOpacity>
        <TouchableOpacity
              className="p-1"
              onPress={handleNotificationPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Bell />
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CustomHeader;
