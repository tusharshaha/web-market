import Layout from "@/components/Layout";
import BlogCard from "@/components/common/BlogCard";
import { NextPage } from "next";

const Blogs: NextPage = () => {
  const candidates = new Array(9).fill(0);
  return (
    <Layout
      title=""
      keywords=""
      description=""
    >
      <div className="cus-container my-14">
        <div className="grid md:grid-cols-3 gap-6">
          {
            candidates.map((ele, i)=> <BlogCard key={i}/>)
          }
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;