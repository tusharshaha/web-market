import Layout from '@/components/Layout';
import { NextPage } from 'next';

const Register: NextPage = () => {
  return (
    <div className="register flex items-center justify-center px-10">
      <div className="rounded-md shadow-2xl max-w-3xl overflow-hidden">
        <div className="register_top">
          <div className='pt-14 text-white space-y-5 w-2/3 mx-auto text-center'>
            <h2>Welcome to the Website</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis recusandae non veritatis, laboriosam eius animi odio cum ab nesciunt. Possimus labore architecto eius ex provident nulla repudiandae illo odit rem!</p>
          </div>
        </div>
        <div className='bg-white flex flex-col items-center justify-center px-4 py-8'>
          <h3 className='text-xl font-semibold text-primary tracking-widest'>USER LOGIN</h3>
          <div className='flex flex-col items-center justify-start gap-4 mt-10 w-2/4 mx-auto'>
            <input
              type="email"
              className="w-full border-2 border-primary focus:outline-none focus:caret-primary rounded-full px-6 py-2"
              placeholder='Your email'
            />
            <input
              type="password"
              className='w-full border-2 border-primary focus:outline-none focus:caret-primary rounded-full px-6 py-2'
              placeholder='Your password'
            />
            <div className='flex justify-end w-full'>
              <button className='trans hover:text-primary'>Forgot Password?</button>
            </div>
            <button className="btn btn-primary text-white px-6">Login</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;