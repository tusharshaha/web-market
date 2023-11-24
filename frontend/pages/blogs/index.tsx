import Layout from "@/components/Layout";
import BlogCard from "@/components/Blog/BlogCard";
import { NextPage } from "next";

const Blogs: NextPage = () => {
  const candidates = new Array(9).fill(0);
  return (
    <Layout title="" keywords="" description="">
      <div className="cus-container my-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((ele, i) => (
            <BlogCard key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
