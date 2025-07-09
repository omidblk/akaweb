import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Modal,
  TextField,
} from "@mui/material";
import IntlMessages from "../../lang/components/IntlMessages";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Employment = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //   ------    formik    --------
  // ----- validation schema -------
  const validationSchema = yup.object({
    firstName: yup
      .string("Enter your firstname")
      .required("firstName is required"),
    lastName: yup
      .string("Enter your lastname")
      .required("lastName is required"),
    age: yup.number("age must be integer").required("Enter your age"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
     });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <div className="flex justify-around gap-4 ">
              <div className="flex flex-col items-center justify-around">
                <div className="text-red-800 bg-orange-300 p-3 text-center rounded-3xl">
                  <IntlMessages id="employment-work-with-the-Bests" />
                </div>
                <Button
                  onClick={handleOpen}
                  className="rounded-3xl"
                  variant="contained"
                  startIcon={<SendIcon />}
                >
                  <IntlMessages id="employment-send-resume" />
                </Button>
              </div>
              <img
                className="w-1/2"
                src="/employment/worktogether.png"
                alt="workToGether"
              />
            </div>
          </CardContent>
        </Card>
      </Container>
      {/* -------    Modal    --------- */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-style w-1/2">
          <div className="flex flex-col items-center justify-between">
            <h3>
              <IntlMessages id="employment-form" />
            </h3>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  id="firstName"
                  name="firstName"
                  margin="normal"
                  label={<IntlMessages id="employment-form-firstname" />}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="lastName"
                  name="lastName"
                  margin="normal"
                  label={<IntlMessages id="employment-form-lastname" />}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="age"
                  name="age"
                  margin="normal"
                  label={<IntlMessages id="employment-form-age" />}
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="email"
                  name="email"
                  margin="normal"
                  label={<IntlMessages id="employment-form-email" />}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  variant="outlined"
                  fullWidth
                />

                <div>uploadresume</div>

                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  startIcon={<SendIcon />}
                >
                  <IntlMessages id="employment-form-send" />
                </Button>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Employment;
