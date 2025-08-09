import React from 'react';
import { View } from 'react-native';
import LeaveStatCard from './LeaveStatCard';

const LeaveStatsGrid = () => {
  const leaveData = [
    {
      id: 1,
      iconUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/8a595d250e05b2a7264afe0b5269b03321ed72ab?placeholderIfAbsent=true",
      label: "Total Leave",
      value: "12"
    },
    {
      id: 2,
      iconUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/eaa6f60879daac30ce176fc4936569dfd3dec785?placeholderIfAbsent=true",
      label: "Taken",
      value: "02"
    },
    {
      id: 3,
      iconUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/9a7d438544e19e48f3e8b84085648209009c711d?placeholderIfAbsent=true",
      label: "Casual Leave",
      value: "05"
    },
    {
      id: 4,
      iconUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/3b708a5bcfbb854f02d9f11f28ec11daa4915886?placeholderIfAbsent=true",
      label: "Sick Leave",
      value: "03"
    },
    {
      id: 5,
      iconUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/f1f0aee98eab1048a6d3bc500daf78595bc02a4c?placeholderIfAbsent=true",
      label: "Unpaid Leave",
      value: "04"
    },
    {
      id: 6,
      iconUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/aa6ffd3f00f62947476cb2da045c14e96b94cc05?placeholderIfAbsent=true",
      label: "Balance",
      value: "05"
    }
  ];

  const renderRow = (startIndex, endIndex) => (
    <View className="flex-row" key={`row-${startIndex}`}>
      {leaveData.slice(startIndex, endIndex).map((item) => (
        <LeaveStatCard
          key={item.id}
          iconUri={item.iconUri}
          label={item.label}
          value={item.value}
        />
      ))}
    </View>
  );

  return (
    <View className="flex-1">
      {renderRow(0, 3)}
      {renderRow(3, 6)}
    </View>
  );
};

export default LeaveStatsGrid;
