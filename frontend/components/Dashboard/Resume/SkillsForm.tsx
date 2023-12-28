import { skillOptions } from "@/utils/selectOptions";
import React from "react";
import {
  Control,
  Controller,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import Select from "react-select";

interface Props {
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues, any>;
}

const SkillsForm: React.FC<Props> = ({ register, control }) => {
  return (
    <div className="border p-4 w-full">
      <h3 className="font-semibold mb-4">Expertise</h3>
      <div className="">
        <Controller
          name="skills"
          control={control}
          defaultValue={[]} // Set a default value if needed
          rules={{
            required: "This field is required",
          }}
          render={({ field }) => (
            <Select
              isMulti
              required
              placeholder="Select your skills..."
              {...field}
              options={skillOptions}
              onChange={(value) => {
                field.onChange(value);
              }}
              styles={{
                menu: (provided) => ({
                  ...provided,
                  maxWidth: "250px",
                }),
                menuList: (provided) => ({
                  ...provided,
                  maxHeight: "200px",
                }),
                control: (provided, state) => ({
                  ...provided,
                  border: "1px solid lightgray",
                  borderRadius: "0.375rem",
                  paddingLeft: "5px",
                  textTransform: "capitalize",
                  minHeight: "3rem",
                  ":hover": {
                    border: "1px solid lightgray",
                    boxShadow: "lightgray 0px 0px 0px 1px",
                  },
                  boxShadow: state.isFocused
                    ? "lightgray 0px 0px 0px 1px"
                    : "none",
                }),
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default SkillsForm;
