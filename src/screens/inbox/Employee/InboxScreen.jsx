import React from 'react';
import { View } from 'react-native';
import { CustomHeader } from '../../../components';
import InboxTopTabs from './InboxTopTabs';

const InboxScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader 
        title="Inbox" 
        logo={false} 
      />
      <InboxTopTabs />
    </View>
  );
};

export default InboxScreen;