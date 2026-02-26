// LeaveDataTable.js
import { View } from 'react-native'
import React from 'react'
import { CustomTable } from '../../components';

const LeaveDataTable = (props) => {

    const handleRowPress = (row) => {
        console.log('Row pressed:', row);
    };

    return (
        <View className="flex-1 bg-[#FFFFFF] rounded-lg mb-4">
            <CustomTable
                title={props.tableTitle}
                columns={props.columns || []}
                data={props.data || []} // Use passed data
                loading={props.loading} // Add loading state
                onRowPress={handleRowPress}
                RightSection={props.RightSection}
                scroll={props.scroll}
            />
        </View>
    );
};

export default LeaveDataTable;