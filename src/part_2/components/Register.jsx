import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Field from "./Field";
import FieldSet from "./FieldSet";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Register: Enter Your Details">
          <Field label="First Name" error={errors.fname}>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter Your First Name"
              {...register("fname", { required: "Full name is required" })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.fname ? "border-red-800" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label="Last Name" error={errors.fname}>
            <input
              {...register("lname", { required: "Full name is required" })}
              type="text"
              name="lname"
              id="lname"
              placeholder="Enter Your Last Name"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.lname ? "border-red-800" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              name="email"
              id="email"
              placeholder="firstname@example.com"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? "border-red-800" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be minimum 6 charecters long",
                },
              })}
              type="password"
              name="password"
              id="password"
              placeholder="******"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-800" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label="Age" error={errors.age}>
            <input
              {...register("age", {
                required: "Age is required",
                max: {
                  value: 100,
                  message: "Age must be between 0 and 100",
                },
              })}
              type="number"
              name="age"
              id="age"
              placeholder="Enter Your Age"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.age ? "border-red-800" : "border-gray-200"
              }`}
            />
          </Field>
        </FieldSet>

        <hr />
        <FieldSet label="Enter your social handle">
          <Field label="Social Name">
            <input
              type="text"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.fname ? "border-red-800" : "border-gray-200"
              }`}
            />
          </Field>
        </FieldSet>
        <FieldSet>
          <button className="bg-purple-500 border rounded-lg text-base text-white p-2 cursor-pointer m-auto">
            Register
          </button>
        </FieldSet>
      </form>
    </div>
  );
};

export default Register;
