import React, { useEffect, useState } from 'react';
import { LoginFormData, loginFormSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { publicApi } from '@/api/axios.service';
import { useMutation } from 'react-query';
import toast from 'react-hot-toast';

const LoginForm: React.FC = () => {
  const [showPass, setShowPass] = useState(false);
  const handShowPass = () => setShowPass(!showPass);
  const mutation = useMutation({
    mutationFn: async (loginData: LoginFormData) => {
      return await publicApi.post("/auth/login", loginData)
    },
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginFormSchema) });

  const onSubmit = handleSubmit(async (data) => {
    mutation.mutate(data);
  })

  useEffect(() => {
    const apiError = mutation.error as string;
    if (mutation.isError) toast.error(apiError, { id: "login_err" })
    if (mutation.isSuccess) { console.log(mutation.data) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mutation.isError, mutation.isSuccess])
  console.log({ apiError: mutation.error, loading: mutation.isLoading })
  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center justify-start gap-2 mt-5 md:mt-10 w-full px-4 sm:px-0 sm:w-2/4 mx-auto'>
      <input
        type="email"
        className="w-full border-2 border-primary focus:outline-none focus:caret-primary rounded-full px-6 py-2 mb-2"
        placeholder='Your email'
        {...register("email")}
      />
      <div className='w-full relative'>
        <input
          type={showPass ? "text" : "password"}
          className='w-full border-2 border-primary focus:outline-none focus:caret-primary rounded-full px-6 py-2'
          placeholder='Your password'
          {...register("password")}
        />

        <button onClick={handShowPass} className='absolute top-[13px] right-[20px] text-slate-400'>
          {showPass ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>

      <button type='submit' disabled={mutation.isLoading} className="web-btn2 mt-2">
        {mutation.isLoading &&
          <span className='w-[20px] h-[20px] border-4 border-slate-200 border-b-white rounded-full mr-2 animate-spin' />
        }
        Login
      </button>
    </form>
  );
};

export default LoginForm;