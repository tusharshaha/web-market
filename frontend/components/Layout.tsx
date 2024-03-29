import Head from "next/head";
import NavBar from "./Shared/NavBar";
import Footer from "./Shared/Footer";
import HeroSection from "./Home/HeroSection";
import { useRouter } from "next/router";
import Link from "next/link";

type props = {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
};

const Layout: React.FC<props> = ({
  title,
  keywords,
  description,
  children,
}) => {
  const router = useRouter();
  const path = router.pathname;
  const pathnames = [
    { path: "/jobs", pathName: "Jobs" },
    { path: "/candidate", pathName: "Cadidate" },
    { path: "/candidate/[id]", pathName: "Cadidate Details" },
    { path: "/projects", pathName: "Projects" },
    { path: "/blogs", pathName: "Blog" },
  ];
  const pathname = pathnames.find((ele) => ele.path === path);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[url('/images/hero-bg.webp')] bg-cover w-full h-full text-white">
        <NavBar />
        {path === "/" ? (
          <HeroSection />
        ) : (
          <div className="h-[250px] flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold tracking-widest">
              {pathname?.pathName}
            </h2>
            <div className="mt-3 text-lg">
              <Link
                href="/"
                className="transition duration-500 hover:text-green-600 mr-2"
              >
                Home
              </Link>
              <span className="capitalize text-green-600">
                &#47;&#47; {pathname?.pathName}
              </span>
            </div>
          </div>
        )}
      </div>
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Web Market | Get Best Web Services",
  description: "choose your desire developers and get fantastic web services",
  keywords:
    "web design, web development, unit testing, bug fixing, responsive website, responsiveness",
};

export default Layout;
