import Layout from '@/components/Layout';
import ProjectCard from '@/components/Project/ProjectCard';
import SearchSection from '@/components/Project/SearchSection';
import { NextPage } from 'next';

const Projects: NextPage = () => {
  const projects = new Array(15).fill(0);
  return (
    <Layout
      title=''
      keywords=''
      description=''
    >
      <div className='cus-container my-14'>
        <SearchSection />
        <div className='flex gap-3 items-start mt-14 relative'>
          {/* project filter section  */}
          <div className='w-1/4 p-3 h-screen border sticky top-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus harum voluptatem deserunt quisquam adipisci quibusdam dignissimos similique repellendus numquam ratione atque deleniti optio, cum et fugiat labore consequatur quos error illo. Sequi iste inventore fugit! Esse, provident ipsum incidunt nisi cumque sed, doloremque, consequatur odio veritatis dolore repudiandae sapiente?
          </div>
          {/* project list section  */}
          <div className='w-3/4 space-y-4'>
            {
              projects.map((ele, i) => <ProjectCard key={i} />)
            }
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default Projects;