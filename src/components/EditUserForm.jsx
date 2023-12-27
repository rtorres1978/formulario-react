import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  // console.log(props.currentUser)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: props.currentUser,
  });

  setValue("name", props.currentUser.name);
  setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    // console.log(data);
    data.id = props.currentUser.id;
    props.updateUser(props.currentUser.id, data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register("name", {
          required: { value: true, message: "El título es obligatorio" },
        })}
      />
      {errors.name && (
        <span className="text-danger text-small d-block mb-2">
          {errors.name.message}
        </span>
      )}

      <label>Username</label>
      <input
        type="text"
        name="username"
        {...register("username", {
          required: { value: true, message: "El título es obligatorio" },
        })}
      />
      {errors.username && (
        <span className="text-danger text-small d-block mb-2">
          {errors.username.message}
        </span>
      )}

      <button>Edit new user</button>
    </form>
  );
};

export default EditUserForm;
