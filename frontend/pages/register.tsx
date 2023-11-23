import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaBackwardStep } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import RegForm from '@/components/Register/RegForm';
import LoginForm from '@/components/Register/LoginForm';
import useAuth from '@/hooks/useAuth';

const Register: NextPage = () => {
  const [regPage, setRegPage] = useState(false);
  const router = useRouter();
  const { getProfile, email, isLoading } = useAuth();

  const handleBack = () => router.back();
  const handleGoogleLogin = () => router.push(`${process.env.NEXT_PUBLIC_API}/auth/login/google`)

  useEffect(() => {
    if (!email && !isLoading) {
      getProfile();
    }
    email && router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email])

  return (
    <div className="register flex items-start justify-center px-10">
      <div className='max-w-3xl'>
        <button onClick={handleBack} className="btn glass btn-sm sm:btn-md flex items-center gap-1 text-white mb-5">
          <span><FaBackwardStep /></span>
          Back
        </button>
        <div className="rounded-md shadow-2xl overflow-hidden">
          <div className="register_top">
            <div className='pt-14 text-white space-y-5 w-full px-6 md:px-0 md:w-2/3 mx-auto text-center'>
              <h2 className=''>Welcome to the Website</h2>
              <p className='text-xs md:text-base'>Discover endless opportunities in our vibrant community of developers, job seekers, and professionals. Join us to search for jobs, create profiles, upload resumes, showcase projects, and share your expertise through blogs. Let&apos;s shape your future together!</p>
            </div>
          </div>
          <div className='bg-white flex flex-col items-center justify-center px-4 py-8'>
            <h3 className='text-lg md:text-xl font-semibold text-primary tracking-widest'>
              USER {regPage ? "REGISTER" : "LOGIN"}
            </h3>

            {
              regPage ? <RegForm /> : <LoginForm />
            }

            <p className='text-slate-500 text-sm mt-3'>
              {regPage ? "Already have account? Please " : "Don't have account? please "}
              <span onClick={() => setRegPage(!regPage)} className='text-primary cursor-pointer'>
                {regPage ? "login" : "register"}
              </span>
            </p>

            <div className='w-full px-4 sm:px-0 sm:w-2/4 mx-auto'>
              <div className="divider">OR</div>
              <button onClick={handleGoogleLogin} className="btn glass flex items-center btn-xs md:btn-md gap-3 text-slate-500 mx-auto">
                <span className='text-xl'><FcGoogle /></span>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;