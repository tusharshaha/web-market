import Layout from "@/components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <h1>This is homepage</h1>
      <form action="http://localhost:5000/api/auth/login/google" method="GET">
        <input type="submit" value="Press to log in" />
      </form>
    </Layout>
  );
};

export default Home;