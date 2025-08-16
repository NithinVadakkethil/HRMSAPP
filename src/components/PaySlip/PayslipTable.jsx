import React from 'react';
import { View, Text } from 'react-native';

const PayslipTable = ({ headers, data, footer, columnStyles }) => {
  return (
    <View className="p-4 bg-white">
      {/* Table Header */}
      <View className="flex-row border-b-2 border-gray-300 pb-2 mb-2">
        {headers.map((header, index) => (
          <Text key={index} className={`font-bold text-gray-700 ${columnStyles[index]}`}>
            {header}
          </Text>
        ))}
      </View>

      {/* Table Body */}
      {data.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row py-2 border-b border-gray-200">
          {row.map((cell, cellIndex) => (
            <Text key={cellIndex} className={`text-gray-800 ${columnStyles[cellIndex]}`}>
              {cell}
            </Text>
          ))}
        </View>
      ))}

      {/* Table Footer */}
      {footer && (
        <View className="flex-row pt-2">
          {footer.map((cell, cellIndex) => (
            <Text key={cellIndex} className={`font-bold text-gray-800 ${columnStyles[cellIndex]}`}>
              {cell}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default PayslipTable;
