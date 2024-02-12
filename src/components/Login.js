import React, { useState } from "react";
import { Form, Button, FormGroup, FormCheck, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Faqs from "./Faq";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    window.location.href="/way";
  };
  return (
    <div>
      <div className=" mt-5">
        <div className="row mx-md-5 ">
          <div className="form_bg col-12 col-md-5 px-4 px-md-5">
            <Form onSubmit={handleSubmit} className="text-white py-3">
              <span className="Account fs-5 fw-bold"> SIGN IN</span>
              <Form.Group controlId="email">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <FormGroup controlId="rememberMe" className="mb-3 mt-3">
                <FormCheck
                  type="checkbox"
                  label="Remember Me"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
              </FormGroup>
              <Row className="mb-3">
                <Col>
                  <Button variant="link" className="forgot p-2">
                    Forgot Password?
                  </Button>
                </Col>
                <Col>
                  <Link to="v" className="signin py-2 px-5">
                    <Button type="submit" onClick={(e)=>handleSubmit(e)}>
                      Sign In
                    </Button>
                  </Link>
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
            <Button
              variant="primary"
              type="submit"
              className=" p-2 form_bg mt-3"
            >
              Create New Account
            </Button>
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
              <div className="try_1">LOGIN</div>
              <div className="vertical-line"></div>
            </div>
            <div className="d-flex">
              <div className="try_1">SIGN UP</div>
              <div className="vertical-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
