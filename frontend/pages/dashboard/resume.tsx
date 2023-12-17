import DashBoardLayout from '@/components/DashBoardLayout';
import BreadCrumb from '@/components/common/BreadCrumb';
import { NextPage } from 'next';
import React from 'react';

const Resume: NextPage = () => {
  return (
    <DashBoardLayout>
      <BreadCrumb pathName='Resume'/>
    </DashBoardLayout>
  );
};

export default Resume;