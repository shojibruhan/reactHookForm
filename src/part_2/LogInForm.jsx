import React from "react";
import { useForm } from "react-hook-form";
import Field from "./components/Field";
import FieldSet from "./components/FieldSet";

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Your Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              className={`border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } box-border p-2 rounded-md w-[300px]`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 charecter long.",
                },
              })}
              className={`border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } box-border p-2 rounded-md w-[300px]`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </Field>
        </FieldSet>
        <Field>
          <button className="text-base text-white p-1 bg-purple-500 border rounded-lg cursor-pointer">
            LogIn
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LogInForm;
