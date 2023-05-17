import { useForm } from "react-hook-form";
import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./styles.module.scss";
import { useSubmit } from "../../../hooks/useSubmit";

type FormValues = {
  firstName: string;
  email: string;
  phone: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required").min(2),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^[0-9+]+$/,
      "Phone number should only contain digits and '+' symbol"
    )
    .matches(
      /^\+(?:[0-9] ?){11,14}[0-9]$/,
      "Phone number should have at least 12 numbers"
    )
    .required("A phone number is required"),
});

const Register = () => {
  const { submit, response } = useSubmit();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    reset();
    submit(data, "GET");
  });

  return (
    <div className={styles.form_wrapper}>
      <Typography>Register:</Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
        className={styles.form}
      >
        <TextField
          id="firstName"
          label="First Name"
          type="text"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />

        <TextField
          id="email"
          label="Email"
          type="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />

        <TextField
          id="phone"
          label="Phone"
          type="text"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors?.phone?.message}
        />

        <Button
          sx={{ width: "100%" }}
          type="submit"
          variant={!!Object.keys(errors).length ? "outlined" : "contained"}
          color={!!Object.keys(errors).length ? "error" : "success"}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Register;
