import { NextPage } from 'next';
import { useState } from "react";
import Layout from '@/components/Layout';
import { QueryClient, useQuery, dehydrate } from "react-query";
import axiosRequest from '@/utils/axios.service';
import SearchSection from '@/components/Job/SearchSection';
import JobCard from '@/components/Job/JobCard';
import JobDetails from '@/components/Job/JobDetails';
import JobCardSkelton from '@/components/Job/JobCardSkelton';
import JobDetailsSkelton from '@/components/Job/JobDetailsSkelton';
import Pagination from '@/components/Shared/Pagination';

interface Response {
  jobs: [
    {
      image: string,
      applicationLink: string
    }
  ],
  total_count: number
}

const getJobList = async (offset: number): Promise<Response> => {
  const res = await axiosRequest.get("/jobs", {
    params: {
      limit: 15,
      offset
    }
  });
  return res
}

const Jobs: NextPage = () => {
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("Front End Developer");
  const [jobId, setJobId] = useState(0);
  const { data, isError } = useQuery(
    'jobs',
    () => getJobList(offset),
    {
      staleTime: 60000,
      cacheTime: 60000,
    }
  );
  const jobDetails = data?.jobs.find((_, i) => i === jobId);
  const handlePageChange = (event: number) => {
    setPage(event)
  };

  return (
    <Layout
      title='Web Market | Jobs'
      description='get you desire remote jobs'
      keywords='jobs, remote jobs'
    >
      <div className='cus-container my-10 relative'>
        {/* search section  */}
        <SearchSection />
        {
          data?.total_count && <p className='text-right mt-14'>Total <span className='font-semibold'>{data?.total_count}</span> jobs available</p>
        }
        <div className='flex items-start gap-4 mt-3 border-t pt-4'>
          {/* job list section  */}
          <div className='space-y-3 w-2/5'>
            {
              data?.jobs.length ?
                data?.jobs.map((ele, i) => (
                  <JobCard
                    key={i}
                    id={i}
                    selectedId={jobId}
                    data={ele}
                    setJobId={setJobId}
                  />
                ))
                :
                Array.from({ length: 15 }, (_, i) => <JobCardSkelton key={i} />)
            }
            <Pagination 
              currentPage={page}
              totalPages={20}
              onPageChange={handlePageChange}
            />
          </div>
          {/* job details section  */}
          <div className='w-3/5 sticky top-0 h-screen overflow-y-auto'>
            {
              data?.jobs.length ?
                <JobDetails jobDetails={jobDetails} />
                :
                <JobDetailsSkelton />
            }

          </div>
        </div>
      </div>
    </Layout>
  );
};

// export async function getServerSideProps() {
//   const queryClient = new QueryClient()

//   await queryClient.prefetchQuery(["jobs", 0], () => getJobList(0))
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient)
//     },
//   };
// }

export default Jobs;