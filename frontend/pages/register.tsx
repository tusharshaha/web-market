import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaBackwardStep, FaEye, FaEyeSlash } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

interface InputError {
  email: string,
  pass: string
}

const Register: NextPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [regPage, setRegPage] = useState(false);
  const [inputError, setInputError] = useState({} as InputError);
  const router = useRouter();
  const handleBack = () => router.back();
  const handShowPass = () => setShowPass(!showPass);
  const handleSubmit = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@(?:gmail|yahoo|hotmail|outlook)\.com$/;
    const passRegex = /^(?=.*[a-z])(?=.*\d).{8,}$/;
  }
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
            <div className='flex flex-col items-center justify-start gap-2 mt-5 md:mt-10 w-full px-4 sm:px-0 sm:w-2/4 mx-auto'>
              {
                regPage &&
                <input
                  type="text"
                  className="w-full border-2 border-primary focus:outline-none focus:caret-primary rounded-full px-6 py-2 mb-2"
                  placeholder='Your name'
                />
              }
              <input
                type="email"
                className="w-full border-2 border-primary focus:outline-none focus:caret-primary rounded-full px-6 py-2 mb-2"
                placeholder='Your email'
              />
              <div className='w-full relative'>
                <input
                  type={showPass ? "text" : "password"}
                  className='w-full border-2 border-primary focus:outline-none focus:caret-primary rounded-full px-6 py-2'
                  placeholder='Your password'
                />
                <button onClick={handShowPass} className='absolute top-[13px] right-[20px] text-slate-400'>
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {
                !regPage &&
                <div className='flex justify-end w-full'>
                  <button className='trans hover:text-primary text-sm md:text-base'>Forgot Password?</button>
                </div>
              }
              {regPage ?
                <button className="web-btn2 mt-2">Register</button>
                :
                <button className="web-btn2">Login</button>
              }
              <p className='text-slate-500 text-sm mt-2'>
                {regPage ? "Already have account? Please " : "Don't have account? please "}
                <button onClick={() => setRegPage(!regPage)} className='text-primary'>
                  {regPage ? "login" : "register"}
                </button>
              </p>
              <div className="divider">OR</div>
              <button className="btn glass flex items-center btn-xs md:btn-md gap-3 text-slate-500">
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