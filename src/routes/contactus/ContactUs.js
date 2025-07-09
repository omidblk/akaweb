import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import IntlMessages from "../../lang/components/IntlMessages";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as yup from "yup";

const ContactUs = () => {
  // ----- validation schema -------
  const validationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    subject: yup.string("enter your subject").required("subject is required"),
    message: yup.string("enter your subject").required("subject is required"),
  });
  // ----------   formik   ----------
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      file: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <Container maxWidth="lg">
        {/* ---------  title  ---------- */}
        <div>
          <p className="font-bold text-3xl bg-secodary p-4 border-r-2 border-r-black rounded-lg">
            <IntlMessages id="contactUs" />
          </p>
        </div>
        {/* ----------   cards   ----------- */}
        <div className="flex justify-between gap-2 mt-3">
          <Card className="w-1/2">
            <CardContent>
              <div className=" flex justify-around items-center">
                <div className="flex flex-col items-center gap-20">
                  <div>
                    <IntlMessages id="contactus-phonenumber" />
                  </div>
                  <div>
                    <IntlMessages id="contactus-emailcompany" />
                  </div>
                  <div>
                    <IntlMessages id="contactus-addresscompany-title" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-20">
                  <div>09017026364</div>
                  <div>omidmokhtari@gmail.com</div>
                  <div>
                    <IntlMessages id="contactus-addresscompany" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-1/2">
            <CardContent>
              <h2>
                <IntlMessages id="contactus-company-location-title" />
              </h2>
              loacation !!!!!!!!!!!!!!!
            </CardContent>
          </Card>
        </div>
        {/* -----------   send messages  --------- */}
        <div>
          <Card className="mt-3">
            <CardContent>
              <p className="font-bold my-3">
                <IntlMessages id="contactUs" />
              </p>
              <form onSubmit={formik.handleSubmit} className="w-1/2">
                <TextField
                  id="name"
                  name="name"
                  margin="normal"
                  label={<IntlMessages id="contactus-form-name-label" />}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="email"
                  name="email"
                  margin="normal"
                  label={<IntlMessages id="contactus-form-email-label" />}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="subject"
                  name="subject"
                  margin="normal"
                  label={<IntlMessages id="contactus-form-subject-label" />}
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={formik.touched.subject && formik.errors.subject}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="message"
                  name="message"
                  margin="normal"
                  label={<IntlMessages id="contactus-form-message-label" />}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                  variant="outlined"
                  fullWidth
                />
                <div> file upload</div>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  startIcon={<SendIcon />}
                >
                  <IntlMessages id="contactus-form-send-label" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
