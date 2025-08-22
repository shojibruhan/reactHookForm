import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import NumberInput from "./NumberInput";

const LogInForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
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
        <FieldSet label={"Enter Your Details"}>
          <Field label={"Picture"} error={errors.picture}>
            <input
              {...register("picture", { required: "Picture  is required." })}
              type="file"
              name="picture"
              id="picture"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.fname ? "border-red-800" : "border-gray-200"
              }`}
            />
          </Field>

          <Field label={"Full Name"} error={errors.fname}>
            <input
              {...register("fname", { required: "Full Name is required." })}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter your Full Name"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.fname ? "border-red-800" : "border-gray-200"
              }`}
            />
          </Field>
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
          <Field label={"Age"} error={errors.age}>
            <Controller
              name="age"
              control={control}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  className={`p-2 border box-border w-[300px] rounded-md ${
                    errors.age ? "border-red-800" : "border-gray-200"
                  }`}
                  {...field}
                />
              )}
              rules={{
                min: {
                  value: 18,
                  message: "Age must be minimum 18",
                },
              }}
            />
            {/* <input
              {...register("age", { required: "Age is required." })}
              type="number"
              name="age"
              id="age"
              placeholder="Enter your Age"
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.age ? "border-red-800" : "border-gray-200"
              }`}
            /> */}
          </Field>
        </FieldSet>
        <FieldSet label="Enter Your Social Handle">
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="flex justify-between items-center">
                <Field
                  label={"Social Name"}
                  //   error={errors.(`socials[${index}].name`)}
                >
                  <input
                    {...register(`socials[${index}].name`)}
                    type="text"
                    name={`socials[${index}].name`}
                    id={`socials[${index}].name`}
                    className={`p-2 border box-border w-full rounded-md}`}
                  />
                </Field>
                <Field
                  label={"Social URL"}
                  //   error={errors.(`socials[${index}].name`)}
                >
                  <input
                    {...register(`socials[${index}].url`)}
                    type="text"
                    url={`socials[${index}].url`}
                    id={`socials[${index}].url`}
                    className={`p-2 border box-border w-full rounded-md}`}
                  />
                </Field>
                <button
                  className="mt-8 mr-2 text-2xl"
                  onClick={() => remove(index)}
                >
                  {/* {"&#8722"} */}
                  {"\u2212"}
                </button>
              </div>
            );
          })}
          <button
            className="mt-8 text-white text-base bg-gray-500 border rounded-lg p-1 m-auto cursor-pointer"
            onClick={() => append({ name: " ", url: " " })}
          >
            Add a Socail Handle
          </button>
        </FieldSet>
        {/* <div className=" italic text-rose-600 text-base rounded-md  px-1 py-1">
          {errors?.root?.random?.message}
        </div> */}
        <Field>
          <button className="bg-purple-500 border rounded-lg text-base text-white p-2 cursor-pointer m-auto">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LogInForm;
