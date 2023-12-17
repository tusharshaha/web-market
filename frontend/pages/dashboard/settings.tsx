import DashBoardLayout from '@/components/DashBoardLayout';
import BreadCrumb from '@/components/common/BreadCrumb';
import { NextPage } from 'next';
import React from 'react';

const Settings: NextPage = () => {
  return (
    <DashBoardLayout>
      <BreadCrumb pathName='Settings'/>
    </DashBoardLayout>
  );
};

export default Settings;