import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { AnniversaryImage, Close } from '../../assets'

const Anniversary = ({ visible, onClose }) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
            statusBarTranslucent={true}
        >
            <View className='flex-1 flex-col items-center justify-center bg-black/75'>
                <View className='items-center relative'>
                    <AnniversaryImage />
                    <TouchableOpacity
                        onPress={onClose}
                        className='absolute bottom-20 flex-row items-center gap-1' // Positions it at the bottom edge
                        style={{ alignSelf: 'center' }}
                    >
                        <Close width={20} height={20} />
                        <Text className='text-[#FFF] font-inter-medium text-base'>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default Anniversary