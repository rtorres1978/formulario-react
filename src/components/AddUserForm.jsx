import React from "react";

import { useForm } from "react-hook-form";
const AddUserForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
//     console.log(data);
    props.addUser(data)
    e.target.reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register("name", {
          required: { value: true, message: "El título es obligatorio" },
        })}
      />
      {errors.name && <span className="text-danger text-small d-block mb-2">{errors.name.message}</span>}
      </div>
      <div>
      <label>Username</label>
      <input
        type="text"
        name="username"
        {...register("username", {
          required: { value: true, message: "El título es obligatorio" },
        })}
      />
      {errors.username && <span className="text-danger text-small d-block mb-2">{errors.username.message}</span>}
      </div>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
