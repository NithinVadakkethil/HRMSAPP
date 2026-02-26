import { View, Text } from 'react-native'
import React from 'react'
import {CustomHeader} from '../../../components'
import InboxTopTabs from '../../inbox/Employee/InboxTopTabs'

const JnrInboxScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader 
        title="Inbox" 
        logo={false} 
      />
      <InboxTopTabs />
    </View>
  )
}

export default JnrInboxScreen

// import React from 'react';
// import { View } from 'react-native';
// import { CustomHeader } from '../../../components';
// import InboxTopTabs from '../../inbox/Employee/InboxTopTabs';

// const InboxScreen = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <CustomHeader 
//         title="Inbox" 
//         logo={false} 
//       />
//       <InboxTopTabs />
//     </View>
//   );
// };

// export default InboxScreen;