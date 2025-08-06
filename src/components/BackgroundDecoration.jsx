import React from 'react';
import { View } from 'react-native';
import Svg, { Mask, Rect, G, Path } from 'react-native-svg';

const BackgroundDecoration = () => {
  return (
    <View className="absolute right-0 top-0" style={{ width: 195, height: 168 }}>
      <Svg
        width="195"
        height="169"
        viewBox="0 0 169 169"
        fill="none"
        style={{ width: 195, height: 168 }}
      >
        <Mask
          id="mask0_89_79"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="195"
          height="169"
        >
          <Rect width="195" height="168.118" fill="#D9D9D9" />
        </Mask>
        <G mask="url(#mask0_89_79)">
          <Path
            d="M15.7165 58.3599L205.489 -51.1961L205.489 -16.199L15.7165 93.6701L15.7165 58.3599Z"
            fill="#E9F3F4"
          />
          <Path
            d="M110.668 50.8466L198.006 0.421955L198.006 28.4764L110.667 80.0929L110.668 50.8466Z"
            fill="#E9F3F4"
          />
          <Path
            d="M23.387 130.243L110.725 79.8184L110.725 107.873L23.387 159.489L23.387 130.243Z"
            fill="#E9F3F4"
          />
        </G>
      </Svg>
    </View>
  );
};

export default BackgroundDecoration;
