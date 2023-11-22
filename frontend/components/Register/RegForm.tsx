import React, { useEffect, useState } from 'react';
import { RegFormData, regFormSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { publicApi } from '@/api/axios.service';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

const RegForm: React.FC = () => {
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const handShowPass = () => setShowPass(!showPass);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegFormData>({ resolver: zodResolver(regFormSchema) });
  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    publicApi.post<RegFormData, { message: string }>(
      "/auth/signup",
      data,
      { withCredentials: true }
    ).then((res) => {
      reset()
      toast.success(res.message, { id: "signup_success" });
      router.push("/");
    }).catch((err) => {
      toast.error(err, { id: "signup_err" })
    }).finally(() => { setLoading(false) })
  })

  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center justify-start gap-2 mt-5 md:mt-10 w-full px-4 sm:px-0 sm:w-2/4 mx-auto'>
      <input
        type="text"
        className={`w-full border-2 ${errors.name ? "border-error" : "border-primary"} focus:outline-none focus:caret-primary rounded-full px-6 py-2 mb-2`}
        placeholder='Your name'
        {...register("name")}
      />
      {errors.name?.message && <p className='text-sm text-error mt-[-15px] mb-2 text-left'>{errors.name.message}</p>}
      <input
        type="email"
        className={`w-full border-2 ${errors.email ? "border-error" : "border-primary"} focus:outline-none focus:caret-primary rounded-full px-6 py-2 mb-2`}
        placeholder='Your email'
        {...register("email")}
      />
      {errors.email?.message && <p className='text-sm text-error mt-[-15px] mb-2 text-left'>{errors.email.message}</p>}
      <div className='w-full relative'>
        <input
          type={showPass ? "text" : "password"}
          className={`w-full border-2 ${errors.password ? "border-error" : "border-primary"} focus:outline-none focus:caret-primary rounded-full px-6 py-2`}
          placeholder='Your password'
          {...register("password")}
        />

        <span onClick={handShowPass} className='absolute top-[13px] right-[20px] text-slate-400 cursor-pointer'>
          {showPass ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>
      {errors.password?.message && <p className='text-sm text-error mt-[-6px]'>{errors.password.message}</p>}

      <button type='submit' disabled={loading} className="web-btn2 mt-2">
        {loading &&
          <span className='w-[20px] h-[20px] border-4 border-slate-200 border-b-white rounded-full mr-2 animate-spin' />
        }
        Register
      </button>
    </form>
  );
};

export default RegForm;