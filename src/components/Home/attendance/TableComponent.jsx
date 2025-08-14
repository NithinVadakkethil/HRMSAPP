// TableComponent.js
import React from "react";
import { FlatList, View, Text } from "react-native";

const TableComponent = ({ tableHead, tableData }) => {
  const renderItem = ({ item }) => (
    <View className="flex-row h-12 items-center border-b border-gray-200 px-3">
      {/* Date */}
      <Text className="flex-[2] text-left text-sm text-gray-800">
        {item.date}
      </Text>

      {/* Check-in */}
      <Text className="flex-[1.5] text-center text-sm text-gray-800">
        {item.checkIn || "-"}
      </Text>

      {/* Check-out */}
      <Text className="flex-[1.5] text-center text-sm text-gray-800">
        {item.checkOut || "-"}
      </Text>

      {/* Worked Hours */}
      <Text className="flex-[1.5] text-center text-sm text-gray-800">
        {item.worked}
      </Text>

      {/* Difference */}
      <Text className={`flex-[1] text-center text-sm ${
        item.difference?.startsWith('+') ? 'text-red-500' : 
        item.difference?.startsWith('-') ? 'text-green-500' : 
        'text-gray-800'
      }`}>
        {item.difference}
      </Text>

      {/* Status */}
      <Text className={`flex-[1] text-center text-sm ${
        item.status === 'Late' ? 'text-red-500' :
        item.status === 'On Time' ? 'text-green-500' :
        'text-gray-800'
      }`}>
        {item.status}
      </Text>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      {/* Table Header */}
      <View className="bg-gray-100 px-3 py-3 border-b border-gray-300">
        <View className="flex-row">
          {tableHead.map((head, index) => (
            <Text 
              key={index}
              className={`${
                index === 0 ? 'flex-[2] text-left' : 
                index === 4 || index === 5 ? 'flex-[1] text-center' : 
                'flex-[1.5] text-center'
              } font-medium text-gray-700 text-sm`}
            >
              {head}
            </Text>
          ))}
        </View>
      </View>

      {/* Table Body */}
      <FlatList
        data={tableData}
        renderItem={renderItem}
        keyExtractor={(item) => item.employeeId + item.date}
      />
    </View>
  );
};

export default TableComponent;