import { userSettingData } from '@/types';
import React from 'react';
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<userSettingData>;
  errors: FieldErrors<userSettingData>;
}

const SettingForm:React.FC<Props> = ({errors, register}) => {
  return (
    <>
      <div className="w-full">
            <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
              Your name
            </p>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Type your name"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="text-sm text-error mb-2 text-left">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <p className="label after:content-['*'] after:ml-0.5 after:text-red-500 block">
              Your email
            </p>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Type your email"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-sm text-error mb-2 text-left">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <p className="label">Your number</p>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Type your number"
              {...register("contactNumber")}
            />
            {errors.contactNumber?.message && (
              <p className="text-sm text-error mb-2 text-left">
                {errors.contactNumber.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <p className="label">Your password</p>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Type your password"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="text-sm text-error mb-2 text-left">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="w-full mb-2">
            <p className="label">Confirm password</p>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Type your password"
              {...register("confirmPass")}
            />
            {errors.confirmPass?.message && (
              <p className="text-sm text-error mb-2 text-left">
                {errors.confirmPass.message}
              </p>
            )}
          </div>
    </>
  );
};

export default SettingForm;