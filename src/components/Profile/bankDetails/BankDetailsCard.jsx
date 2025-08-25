import { View } from 'react-native'
import React from 'react'
import DetailsSection from '../../Common/DetailsSection'

const BankDetailsCard = ({bankDetails}) => {
    return (
        <View className="bg-white shadow-sm border border-gray-200 mt-4">
            <DetailsSection
                title="Bank Details"
                details={[
                    { label: "Account Holder Name", value: bankDetails?.account_holdername },
                    { label: "Account Number", value: bankDetails?.account_number },
                    { label: "Bank Name", value: bankDetails?.bank_name },
                    { label: "Branch", value: bankDetails?.branch_name },
                    { label: "IFSC Code", value: bankDetails?.ifsccode },
                    { label: "Payment_Mode", value: bankDetails?.payment_mode },
                    { label: "PF No", value: bankDetails?.pf_no },
                    { label: "ESI No", value: bankDetails?.esi_no },
                ]}
            />
        </View>
    )
}

export default BankDetailsCard