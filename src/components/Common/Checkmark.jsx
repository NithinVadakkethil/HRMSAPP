import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Checkmark = ({ size = 10, color = '#2AB57D' }) => {
  return (
    <View className="absolute" style={{ left: 5, top: 6 }}>
      <Svg width={size} height={size * 0.8} viewBox="0 0 11 9" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0249023 5.59047L3.99717 8.62222L10.3756 1.33262L9.11429 0.230469L3.76769 6.34087L1.03995 4.25884L0.0249023 5.59047Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default Checkmark;
