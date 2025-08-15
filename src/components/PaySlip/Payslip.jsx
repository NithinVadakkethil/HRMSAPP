import React from 'react';
import { View, ScrollView } from 'react-native';
import PayslipHeader from './PayslipHeader';
import CompanyInfo from './CompanyInfo';
import EmployeeDetails from './EmployeeDetails';
import AttendanceInfo from './AttendanceInfo';
import SalaryBreakdown from './SalaryBreakdown';
import DeductionsTable from './DeductionsTable';
import SalarySummary from './SalarySummary';

const Payslip = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        <PayslipHeader />
        <CompanyInfo />
        <EmployeeDetails />
        <AttendanceInfo />
        <SalaryBreakdown />
        <DeductionsTable />
        <SalarySummary />
      </View>
    </ScrollView>
  );
};

export default Payslip;
