import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { PayslipHeader, PayslipSection, PayslipTable, PayslipFooter } from '../../../components';

const PaySlip = () => {
  const employeeDetails = [
    { label: 'Employee Name', value: 'Binshad k' },
    { label: 'Employee Code', value: 'SWA034' },
    { label: 'Designation', value: 'Sales Manager' },
    { label: 'Location', value: 'Calicut' },
    { label: 'Date of Joining', value: 'Binshad k' },
    { label: 'UAN No.', value: 'SWA034' },
    { label: 'PF No.', value: 'Sales Manager' },
    { label: 'ESI No.', value: 'Calicut' },
    { label: 'Bank Account Number', value: 'Calicut' },
  ];

  const workingDays = [
    { label: 'Total Working Days', value: '31 Days' },
    { label: 'Total Leave', value: '6 Days' },
    { label: 'LOP Days', value: '2 Days' },
    { label: 'Off Days', value: '6 Days' },
    { label: 'Paid Days', value: '29 Days' },
  ];

  const allowancesHeaders = ['Allowances', 'Gross Amount', 'Earning Amount'];
  const allowancesData = [
    ['Basic', '₹9120', '₹8532'],
    ['Dearness Allowance', '₹5200', '₹4865'],
    ['Hardship Allowance', '₹5728', '₹5358'],
    ['Food Allowance', '₹3000', '₹2806'],
    ['Accomodation Allowance', '₹9000', '₹8419'],
    ['Relocation Allowance', '₹952', '₹891'],
    ['Special Allowance', '₹2000', '₹1872'],
    ['Leave Surrender', '₹1129', '₹1129'],
  ];
  const allowancesFooter = ['Gross Allowances :', '₹ 36129', '₹ 33871'];
  const allowanceColumnStyles = ['w-1/2', 'w-1/4 text-right', 'w-1/4 text-right'];

  const deductionsHeaders = ['Deductions', 'Amount'];
  const deductionsData = [
    ['EPF', '₹1800'],
    ['Professional Tax', '₹200'],
    ['Labour Welfare', '₹50'],
    ['Salary Advance', '₹100'],
    ['LOP', '₹2258'],
  ];
  const deductionsFooter = ['Gross Deduction', '₹ 4408'];
  const deductionColumnStyles = ['w-3/4', 'w-1/4 text-right'];

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="m-4 bg-white rounded-lg shadow-sm">
        <PayslipHeader />
        
        <View className="p-4">
            <Text className="text-lg font-bold text-center my-4">
                Payslip for the month of July 2025
            </Text>
        </View>

        <PayslipSection data={employeeDetails} />
        <PayslipSection data={workingDays} />

        <PayslipTable 
          headers={allowancesHeaders} 
          data={allowancesData} 
          footer={allowancesFooter}
          columnStyles={allowanceColumnStyles} 
        />
        
        <PayslipTable 
          headers={deductionsHeaders} 
          data={deductionsData} 
          footer={deductionsFooter}
          columnStyles={deductionColumnStyles} 
        />

        <PayslipFooter 
          grossDeduction="₹ 4408"
          netSalary="₹ 31721"
          amountInWords="Thirty One Thousand Seven Hundred Twenty One"
        />
      </View>
    </ScrollView>
  );
};

export default PaySlip;