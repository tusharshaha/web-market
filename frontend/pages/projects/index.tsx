import Layout from '@/components/Layout';
import SearchSection from '@/components/Project/SearchSection';
import { NextPage } from 'next';

const Projects: NextPage = () => {
  return (
    <Layout
      title=''
      keywords=''
      description=''
    >
      <div className='cus-container my-14'>
        <SearchSection />
        <div className='flex gap-3 items-start mt-14'>
          {/* project filter section  */}
            <div className='w-1/4 border'>
            </div>
            {/* project list section  */}
            <div className='w-3/4 border'>

            </div>
        </div>
      </div>
    </Layout >
  );
};

export default Projects;