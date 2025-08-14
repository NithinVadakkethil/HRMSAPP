import { View, Text } from 'react-native'
import React from 'react'
import InboxItem from './InboxItem';

const MessageList = () => {
    const notifications = [
        {
          id: 1,
          iconUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/4f49fb49dcd870066c0c9a7cdb5c2f0b26a94e27?placeholderIfAbsent=true",
          title: "Leave Approval/Denial",
          description: "Your leave request from June 10 to June 12 has been approved",
          timestamp: "3 hours ago"
        },
        {
          id: 2,
          iconUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/b7195e2fd4904989c5de93ac8708d2d68592dc61?placeholderIfAbsent=true",
          title: "Task Assignment",
          description: "You've been assigned a new task: 'Client Proposal Draft' due by June 15.",
          timestamp: "2 day ago"
        },
        {
          id: 3,
          iconUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/91e08ffe86fe130bfbeade5f1513d79d540d5cca?placeholderIfAbsent=true",
          title: "Holiday Announcement",
          description: "Office will be closed on June 17 for Bakrid",
          timestamp: "4 day ago"
        },
        {
          id: 4,
          iconUri: "https://api.builder.io/api/v1/image/assets/05f15ed087014a6a9f74a6d6a78953d9/70cd396910d2f3ce2a38e81447614ffa2f7f86cd?placeholderIfAbsent=true",
          title: "Account suspended",
          description: "Your account has been suspended to a billing issue",
          timestamp: "2 week ago"
        }
      ];
    
      return (
        <View className="bg-white">
          <View className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <InboxItem
                key={notification.id}
                iconUri={notification.iconUri}
                title={notification.title}
                description={notification.description}
                timestamp={notification.timestamp}
              />
            ))}
          </View>
        </View>
      );
}

export default MessageList

