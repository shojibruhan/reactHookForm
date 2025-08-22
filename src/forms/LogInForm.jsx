import React from "react";
import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

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
        <FieldSet label={"Enter Your LogIn Details"}>
          <Field label={"Email"} error={errors.email}>
            <input
              {...register("email", { required: "Email is required." })}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your E-mail"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? "border-red-800" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label={"Password"} error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be 8 charecters long.  ",
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-800" : "border-gray-200"
              }`}
            />
          </Field>
        </FieldSet>
        <Field>
          <button className="bg-purple-500 border rounded-lg text-base text-white p-1 cursor-pointer">
            LogIn
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LogInForm;
