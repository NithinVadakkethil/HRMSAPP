import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const CustomTable = ({
    title = "Table",
    columns,
    data,
    containerStyle = "",
    onRowPress = null
}) => {
    return (
        <View className={`bg-white rounded-lg shadow-sm border border-gray-200 mx-4 my-2 ${containerStyle}`}>
            {/* Table Header */}
            <View className="px-6 py-4 border-b border-gray-200 flex-row justify-between items-center">
                <Text className="text-base font-bold text-gray-900">{title}</Text>
                <TouchableOpacity>
                    <Text className="text-sm font-medium text-blue-600">See all</Text>
                </TouchableOpacity>
            </View>

            {/* Scrollable Table Container */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    {/* Table Headers */}
                    <View className="bg-gray-50 flex-row">
                        {columns.map((column, index) => (
                            <View
                                key={index}
                                className="px-6 py-3 justify-center"
                                style={{ minWidth: column.width || 120 }}
                            >
                                <Text className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {column.header}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Table Body */}
                    <View>
                        {data.map((row, rowIndex) => (
                            <TouchableOpacity
                                key={rowIndex}
                                onPress={() => onRowPress && onRowPress(row)}
                                activeOpacity={onRowPress ? 0.7 : 1}
                                className="bg-white border-b border-gray-200"
                            >
                                <View className="flex-row">
                                    {columns.map((column, colIndex) => (
                                        <View
                                            key={colIndex}
                                            className="px-6 py-4 justify-center"
                                            style={{ minWidth: column.width || 120 }}
                                        >
                                            {column.render ? (
                                                column.render(row)
                                            ) : (
                                                <Text className="text-sm text-gray-900">
                                                    {row[column.key]}
                                                </Text>
                                            )}
                                        </View>
                                    ))}
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default CustomTable