import { View } from 'react-native'
import React from 'react'
import DetailsSection from '../../Common/DetailsSection'

const BankDetailsCard = () => {
    return (
        <View className="bg-white p-4 shadow-sm border border-gray-200 mt-4">
            <DetailsSection
                title="Bank Details"
                details={[
                    { label: "Account Holder Name", value: "Mohammed Inshad" },
                    { label: "Account Number", value: "3456 6787 6789" },
                    { label: "Bank Name", value: "Axis Bank" },
                    { label: "Branch", value: "Calicut" },
                    { label: "IFSC Code", value: "UTIB4456" },
                    { label: "Payment_Mode", value: "G-Pay" },
                    { label: "PF No", value: "7654 7656 765" },
                    { label: "ESI No", value: "HG56786" },
                ]}
            />
        </View>
    )
}

export default BankDetailsCard