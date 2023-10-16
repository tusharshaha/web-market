import { NextPage } from 'next';
import Layout from '@/components/Layout';
import { QueryClient, useQuery, dehydrate } from "react-query";
import axiosRequest from '@/utils/axios.service';

const getJobList = async (offset: string) => {
  const res = await axiosRequest.get("/api/jobs", {
    params: {
      limit: 20,
      offset
    }
  });
  return res
}

const Jobs: NextPage = () => {
  const [offset, setOffset] = useState(string)
  useQuery('jobs', ())
  return (
    <Layout
      title='Web Market | Jobs'
      description='get you desire remote jobs'
      keywords='jobs, remote jobs'
    >

    </Layout>
  );
};

export async function getServerSideProps(context: { query: { offset: string } }) {
  const { offset } = context.query;
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["jobs", offset], () => getJobList(offset))
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    },
  };
}

export default Jobs;