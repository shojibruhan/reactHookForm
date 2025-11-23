import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import Field from "./Field";
import FieldSet from "./FieldSet";
import Number from "./Number";

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
            <Controller
              name="age"
              defaultValue={0}
              control={control}
              // eslint-disable-next-line no-unused-vars
              render={({ field: { ref, ...field } }) => (
                <Number
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
                  message: "You must be at least 18 years old",
                },
              }}
              // <input
              //   {...register("age", {
              //     required: "Age is required",
              //     max: {
              //       value: 100,
              //       message: "Age must be between 0 and 100",
              //     },
              //   })}
              //   type="number"
              //   name="age"
              //   id="age"
              //   placeholder="Enter Your Age"
              //   className={`p-2 border box-border w-[300px] rounded-md ${
              //     errors.age ? "border-red-800" : "border-gray-200"
              //   }`}
            />
          </Field>
        </FieldSet>

        <hr />
        <FieldSet label="Enter your social handle">
          {fields.map((field, index) => {
            return (
              <div key={index} className="flex justify-between items-center">
                <Field label="Social Name">
                  <input
                    type="text"
                    id={`socials[${index}].name`}
                    name={`socials[${index}].name`}
                    {...register(`socials[${index}].name`)}
                    className={`p-2 border box-border w-[300px] rounded-md ${
                      errors.name ? "border-red-800" : "border-gray-200"
                    }`}
                  />
                </Field>
                <Field label="Social URL">
                  <input
                    type="text"
                    id={`socials[${index}].url`}
                    name={`socials[${index}].url`}
                    {...register(`socials[${index}].url`)}
                    className={`p-2 border box-border w-[300px] rounded-md ${
                      errors.url ? "border-red-800" : "border-gray-200"
                    }`}
                  />
                </Field>
                <button
                  className="text-2xl  mt-8 mr-2"
                  onClick={() => remove(index)}
                >
                  🗑️
                </button>
              </div>
            );
          })}

          <button
            className="mt-8 text-white text-base bg-gray-500 border rounded-lg p-1 m-auto cursor-pointer"
            onClick={() => append({ name: "", url: "" })}
          >
            Add a Social Handle
          </button>
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
