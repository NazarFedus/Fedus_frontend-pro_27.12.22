import React from "react";
import { useForm, Resolver } from "react-hook-form";
import styles from "./styles.module.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type FormValues = {
  firstName: string;
  email: string;
  phone: number;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => {
     reset()
     console.log(data)
});

  return (
    <div className={styles.form_wrapper}>
      <Box
        onSubmit={onSubmit}
        className={styles.form}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-password-input"
          label="FirstName"
          type="text"
          {...register("firstName")}
        />
        {errors?.firstName && <p>{errors.firstName.message}</p>}

        <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          {...register("email")}
        />
        {errors?.email && <p>{errors.email.message}</p>}

        <TextField
          id="outlined-password-input"
          label="Phone"
          type="phone"
          {...register("phone")}
        />
        {errors?.phone && <p>{errors.phone.message}</p>}

        <input type="submit" />
      </Box>
    </div>
  );
};

export default Register;
