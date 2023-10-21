import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaBackwardStep, FaEye, FaEyeSlash } from 'react-icons/fa6';

const Register: NextPage = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const handleBack = () => router.back();
  const handShowPass = ()=> setShowPass(!showPass);
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
              <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis recusandae non veritatis, laboriosam eius animi odio cum ab nesciunt. Possimus labore architecto eius ex provident nulla repudiandae illo odit rem!</p>
            </div>
          </div>
          <div className='bg-white flex flex-col items-center justify-center px-4 py-8'>
            <h3 className='text-lg md:text-xl font-semibold text-primary tracking-widest'>USER LOGIN</h3>
            <div className='flex flex-col items-center justify-start gap-4 mt-5 md:mt-10 w-3/4 md:w-2/4 mx-auto'>
              <input
                type="email"
                className="w-full border-2 border-primary focus:outline-none focus:caret-primary rounded-full px-6 py-2"
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
              <div className='flex justify-end w-full'>
                <button className='trans hover:text-primary text-sm md:text-base'>Forgot Password?</button>
              </div>
              <button className="btn btn-primary text-white px-6 btn-sm md:btn-md">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;