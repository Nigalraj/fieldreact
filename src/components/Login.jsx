import React,{useEffect} from "react";
import { Form, Button, FormGroup, FormCheck, Row, Col, Container } from "react-bootstrap";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";
import Footer from "./Footer";
import Swal from "sweetalert2";

function Login() {
  
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      Email: Yup.string().email("Invalid email address").required("Required"),
      Password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {

      try {
        const response = await axios.post('http://localhost:3002/api/users/login', values);
        if(response.status === 200)
        {
          const { accessToken, referenceToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', referenceToken);
          // setIsSignedIn(true)
          window.location.href="/dashboard"
        }
      } catch (error) {
        
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Invalid Email or Password",
        });
        console.error('Login failed:', error.response.data.error);
      }
    },
  });
  useEffect(() => {
    localStorage.removeItem("accessToken");
  }, []);

  return (
    <>
    <Header />
    <Container>
    <div>
      <div className=" mt-5">
        <div className="row mx-md-5 ">
          <div className="form_bg col-12 col-md-5 px-4 px-md-5">
          <Form onSubmit={formik.handleSubmit} className="text-white py-3">
              <span className="Account fs-5 fw-bold"> SIGN IN</span>
              <Form.Group controlId="Email">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Email && formik.errors.Email ? (
                  <div className="error text-danger my-2">{formik.errors.Email}</div>
                ) : null}
              </Form.Group>
              <Form.Group controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="Password"
                  value={formik.values.Password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.Password && formik.errors.Password ? (
                  <div className="error text-danger my-2">{formik.errors.Password}</div>
                ) : null}
              </Form.Group>
              <FormGroup controlId="rememberMe" className="mb-3 mt-3">
                <FormCheck
                  type="checkbox"
                  label="Remember Me"
                  name="rememberMe"
                  checked={formik.values.rememberMe}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </FormGroup>
              <Row className="mb-3">
                <Col>
                  <Button variant="link" className="forgot p-2">
                    Forgot Password?
                  </Button>
                </Col>
                <Col>
                  <Button type="submit" className="signin py-2 px-5">
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="form_bg_1 col-12 col-md-7  px-md-4 mt-4 mt-md-0 pt-4 ">
            <div>
              <span className="signup fw-semibold ">NEED AN ACCOUNT?</span>
            </div>
            <br />
            <div className="pe-5 ">
              <span
                className=" mt-4 "
                style={{ color: "#1B3365", fontSize: "16px" }}
              >
                Create an Account to start managing your company. Click the
                "Create New Account" button below to get started
              </span>
            </div>
            <Link to="/register">
            <Button
              variant="primary"
              type="submit"
              className=" p-2 form_bg mt-3"
            >
              Create New Account
            </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="d-flex flex-lg-row flex-column ">
          <div className="d-flex">
            <div className="d-flex">
              <div className="try_1">FEATURES</div>
              <div className="vertical-line"></div>
            </div>
            <div className="d-flex">
              <div className="try_1">FAQS</div>
              <div className="vertical-line"></div>
            </div>
          </div>
          <div className="d-flex">
            <div className="d-flex">
              <div className="try_1">CONTACT US</div>
              <div className="vertical-line"></div>
            </div>
            <div className="d-flex">
              <Link to="/" className="text-decoration-none">
                <div className="try_1 text-decoration-none">LOGIN</div>
              </Link>
              <div className="vertical-line"></div>
            </div>
            <div className="d-flex">
              <Link to="/register" className="text-decoration-none">
                <div className="try_1 ">REGISTER</div>
              </Link>
              <div className="vertical-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
    <Footer/> 
    </>
  );
}

export default Login;
