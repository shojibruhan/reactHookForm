import React from "react";
import { useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    const user = { email: "a@a.com", password: "12345678" };
    const found =
      formData.email === user.email && formData.password === user.password;

    if (!found) {
      setError("root.random", {
        message: `User with email ${formData.email} is not Found`,
        type: "random",
      });
    }
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
        <div className=" italic text-rose-600 text-base rounded-md  px-1 py-1">
          {errors?.root?.random?.message}
        </div>
        <Field>
          <button className="bg-purple-500 border rounded-lg text-base text-white p-1 cursor-pointer m-auto">
            LogIn
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LogInForm;
