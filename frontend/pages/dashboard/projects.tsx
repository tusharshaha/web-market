import DashBoardLayout from '@/components/DashBoardLayout';
import BreadCrumb from '@/components/common/BreadCrumb';
import { NextPage } from 'next';
import React from 'react';

const Projects: NextPage = () => {
  return (
    <DashBoardLayout>
      <BreadCrumb pathName='Projects'/>
    </DashBoardLayout>
  );
};

export default Projects;