import { Button, Card, TextField } from "@mui/material";
import IntlMessages from "../../lang/components/IntlMessages";
import { useFormik } from "formik";
import * as yup from "yup";

const Register = () => {
  const validationSchema = yup.object({
    fName: yup
    .string("Enter your first name")
    .required("Email is required"),
    lName: yup
    .string("Enter your last name")
    .required("Email is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      fName:"",
      lNmae:"",
      email: "",
      password: "",
      passwordConfirm:""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className="flex justify-center">
        <Card className="w-1/2 p-8">
          {/* <h1 className="text-center">
            <IntlMessages id="register-title" />
          </h1> */}
          <div className="flex justify-between">
            <img className="w-1/2" src="/userImages/signUp.png" alt="login" />
            <form onSubmit={formik.handleSubmit} className="w-1/2 flex flex-col gap-8 justify-center">
              <TextField
                id="fName"
                name="fName"
                label={<IntlMessages id="register-firstName" />}
                value={formik.values.fName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fName && Boolean(formik.errors.fName)}
                helperText={formik.touched.fName && formik.errors.fName}
                variant="outlined"
                fullWidth
              />
              <TextField
                id="email"
                name="email"
                label={<IntlMessages id="register-lastName" />}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
                fullWidth
              />
              <TextField
                id="email"
                name="email"
                label={<IntlMessages id="register-ٍemail" />}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
                fullWidth
              />
              <TextField
                id="password"
                name="password"
                label={<IntlMessages id="register-password" />}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                variant="outlined"
                fullWidth
              />
              <TextField
                id="passwordConfirm"
                name="passwordConfirm"
                label={<IntlMessages id="register-passwordConfirm" />}
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)
                }
                helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                variant="outlined"
                fullWidth
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                <IntlMessages id="register-title" />
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Register;
