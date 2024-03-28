import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import axios from "axios";
import Faqs from "./Faq";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "./Footer";
import Header from "./Header";
import Swal from "sweetalert2";

function Register() {
  const validationSchema = Yup.object().shape({
    Firstname: Yup.string().required("First Name is required"),
    Lastname: Yup.string().required("Last Name is required"),
    Email: Yup.string().email("Invalid email").required("Email is required"),
    Companyname: Yup.string().required("Company Name is required"),
    PhoneNumber: Yup.string().required("Phone Number is required"),
    Password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("Password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    timeZone: Yup.string(),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
  });

  const formik = useFormik({
    initialValues: {
      Firstname: "",
      Lastname: "",
      Email: "",
      Companyname: "",
      PhoneNumber: "",
      Password: "",
      confirmPassword: "",
      timeZone: "",
      address: "",
      state: "",
      country: "",
      showAdditionalFields: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post(
          "http://localhost:3002/api/users",
          values
        );
        console.log(response, "hi");
        await Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "Registered Successfully",
          confirmButtonText: "Click login Page",
        });
        window.location.href = "/";
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <>
      <Header />
      <Container>
        <div>
          <div className="text-center mt-5">
            <div>
              <span className="try">Try FieldGroove Free for 7 Days!</span>
            </div>
          </div>
          <div className=" mt-5">
            <div className="row mx-md-5">
              <div className="form_bg col-12 col-md-5 px-4 px-md-5">
                <Form
                  onSubmit={formik.handleSubmit}
                  className="text-white py-3"
                >
                  <span className="Account fs-5 fw-bold"> Account Info</span>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="Firstname"
                      value={formik.values.Firstname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.Firstname && formik.errors.Firstname ? (
                      <div className="error text-danger my-2">
                        {formik.errors.Firstname}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="Lastname"
                      value={formik.values.Lastname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.Lastname && formik.errors.Lastname ? (
                      <div className="error text-danger my-2">
                        {formik.errors.Lastname}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="companyName">
                    <Form.Label>Company Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="Companyname"
                      value={formik.values.Companyname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.Companyname && formik.errors.Companyname ? (
                      <div className="error text-danger my-2">
                        {formik.errors.Companyname}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                      type="email"
                      name="Email"
                      value={formik.values.Email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.Email && formik.errors.Email ? (
                      <div className="error text-danger my-2">
                        {formik.errors.Email}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone number*</Form.Label>
                    <Form.Control
                      type="tel"
                      name="PhoneNumber"
                      value={formik.values.PhoneNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
                      <div className="error text-danger my-2">
                        {formik.errors.PhoneNumber}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="Password"
                      value={formik.values.Password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.Password && formik.errors.Password ? (
                      <div className="error text-danger my-2">
                        {formik.errors.Password}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm your password"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className="error text-danger my-2">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}

                    <Form.Group controlId="jobTitle">
                      <Form.Label>How did you hear about us?*</Form.Label>
                      <Form.Control
                        as="select"
                        name="jobTitle"
                        value={formik.values.jobTitle}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="" disabled>
                          Please Select
                        </option>
                        <option value="referrel">Central Standard Time</option>
                        <option value="web search">
                          Eastern Standard Time
                        </option>
                        <option value="web search">
                          Mountain Standard Time
                        </option>
                        <option value="web search">
                          Pacific Standard Time
                        </option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Group>
                  <Form.Group controlId="showAdditionalFields">
                    <Form.Check
                      type="checkbox"
                      label="Show Additional Fields"
                      name="showAdditionalFields"
                      checked={formik.values.showAdditionalFields}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Form.Group>
                  {formik.values.showAdditionalFields && (
                    <>
                      <Form.Group controlId="address">
                        <Form.Label>Address*</Form.Label>
                        <Form.Control
                          type="text"
                          name="address"
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.address && formik.errors.address ? (
                          <div className="error text-danger my-2">
                            {formik.errors.address}
                          </div>
                        ) : null}
                      </Form.Group>
                      <Form.Group controlId="state">
                        <Form.Label>State*</Form.Label>
                        <Form.Control
                          type="text"
                          name="state"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.state && formik.errors.state ? (
                          <div className="error text-danger my-2">
                            {formik.errors.state}
                          </div>
                        ) : null}
                      </Form.Group>
                      <Form.Group controlId="country">
                        <Form.Label>Country*</Form.Label>
                        <Form.Control
                          type="text"
                          name="country"
                          value={formik.values.country}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.country && formik.errors.country ? (
                          <div className="error text-danger my-2">
                            {formik.errors.country}
                          </div>
                        ) : null}
                      </Form.Group>
                    </>
                  )}
                  <div className="d-flex justify-content-end mt-4 mb-3">
                    <Button variant="primary" type="submit" className="">
                      {formik.values.showAdditionalFields ? "Submit" : "Next"}
                    </Button>
                  </div>
                </Form>
              </div>
              <div className="form_bg_1 col-12 col-md-7 px-4 px-md-4 mt-4 mt-md-0 pt-4 ">
                <div>
                  <span className="signup fw-semibold ">
                    SIGN UP NOW TO START YOUR FREE TRAIL
                  </span>
                </div>
                <br />
                <div>
                  <span className="try_1 mt-4 ">
                    FieldGroove empowers you to manage every aspect of your
                    contracting business anytime, anywhere, and from any device.
                    Enjoy a free trial where you can experience everything
                    FieldGroove has to offer,
                  </span>
                </div>
                <span className="try_1 "> including;</span>
                <div className="d-flex flex-column my-2  try_2 ">
                  <div className="row my-3 ">
                    <div className="col-1  ">
                      <Icon
                        icon="mdi:tick-decagram"
                        className="mt-1"
                        style={{ color: "#E36157", width: "20px" }}
                      />
                    </div>
                    <div className="col-11">
                      <span>
                        Managing the entire job cycle from lead crearion to
                        post-job reporting
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-1  ">
                      <Icon
                        icon="mdi:tick-decagram"
                        className="mt-1"
                        style={{ color: "#E36157", width: "20px" }}
                      />
                    </div>
                    <div className="col-11">
                      <span>
                        Monitoring in pipeline and backlg numbers, in real time
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-1  ">
                      <Icon
                        icon="mdi:tick-decagram"
                        className="mt-1"
                        style={{ color: "#E36157", width: "20px" }}
                      />
                    </div>
                    <div className="col-11">
                      <span>
                        Building estimates for your prospects to review and
                        accept via email or on the job site
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-1  ">
                      <Icon
                        icon="mdi:tick-decagram"
                        className="mt-1"
                        style={{ color: "#E36157", width: "20px" }}
                      />
                    </div>
                    <div className="col-11">
                      <span>
                        Keeping close track of your team, equipment, inventory,
                        and jobs
                      </span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-1  ">
                      <Icon
                        icon="mdi:tick-decagram"
                        className="mt-1"
                        style={{ color: "#E36157", width: "20px" }}
                      />
                    </div>
                    <div className="col-11">
                      <span>Automating scheduling and dispatching</span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-1  ">
                      <Icon
                        icon="mdi:tick-decagram"
                        className="mt-1"
                        style={{ color: "#E36157", width: "20px" }}
                      />
                    </div>
                    <div className="col-11">
                      <span>
                        Preparing work orders and load tickets with one click
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5 ">
            <div>
              <span className="try_3">Frequently Asked Questions</span>
            </div>
          </div>
          <Faqs />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
