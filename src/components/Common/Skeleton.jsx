import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';

const Skeleton = ({ width, height, style }) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1000, easing: Easing.linear }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [0, 0.5, 1],
      [0.1, 0.3, 0.1]
    );
    return {
      opacity: opacity,
    };
  });

  return (
    <View style={[{ width, height, backgroundColor: '#E0E0E0', borderRadius: 4 }, style]}>
        <Animated.View style={[{ width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.5)'}, animatedStyle]} />
    </View>
  );
};

export default Skeleton;
