import { NextPage } from 'next';
import { useState } from "react";
import Layout from '@/components/Layout';
import { QueryClient, useQuery, dehydrate } from "react-query";
import axiosRequest from '@/utils/axios.service';

const getJobList = async (offset: number) => {
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
  useQuery('jobs', ()=> getJobList(offset))
  return (
    <Layout
      title='Web Market | Jobs'
      description='get you desire remote jobs'
      keywords='jobs, remote jobs'
    >
      
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