import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const CustomTable = ({
    title = "Table",
    columns,
    data,
    containerStyle = "",
    onRowPress = null,
    RightSection = null,
    scroll = false
}) => {
    return (
        <View className={`${containerStyle} mx-4`}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={scroll}
                contentContainerStyle={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 16,
                    minWidth: '100%' // This ensures full width
                }}
            >
                <Text className="text-base font-bold text-gray-900">{title}</Text>
                {RightSection && <RightSection />}
            </ScrollView>
            {/* Table Header */}

            {/* Scrollable Table Container */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    {/* Table Headers */}
                    <View className="flex-row rounded-t-[2px] border border-[#E2E4E9] bg-[#F6F8FA]">
                        {columns?.map((column, index) => (
                            <View
                                key={index}
                                className="px-3 py-3 justify-center border-r border-[#E2E4E9] last:border-r-0"
                                style={{ width: column.width || 120 }}
                            >
                                <Text className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {column.header}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Table Body */}
                    <View className="">
                        {data.map((row, rowIndex) => (
                            <TouchableOpacity
                                key={rowIndex}
                                onPress={() => onRowPress && onRowPress(row)}
                                activeOpacity={onRowPress ? 0.7 : 1}
                            >
                                <View className="flex-row bg-[#FFF] border-b border-[#E2E4E9]">
                                    {columns.map((column, colIndex) => (
                                        <View
                                            key={colIndex}
                                            className="px-3 py-4 justify-center border-r border-[#E2E4E9] last:border-r-0"
                                            style={{ width: column.width || 120 }}
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