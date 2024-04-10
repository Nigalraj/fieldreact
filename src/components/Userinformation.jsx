import React from "react";
import { Button, Form } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ApiServices from "../Constants/ApiService";
import Swal from "sweetalert2";

const Userinformation = () => {
  // console.log("gi");
  const formik = useFormik({
    initialValues:{
      Firstname:"",
      Lastname:"",
      Email:"",
      Password:"",
      PhoneNumber:"",
      Companyname:"IDC"
    },
    validationSchema:Yup.object({
      Firstname:Yup.string().required("Require the First Name"),
      Lastname:Yup.string().required("Require the Last Name"),
      Email: Yup.string().email("Invalid email address").required("Require the Email"),
      Password: Yup.string().required("Require the Password"),
      PhoneNumber:Yup.string().required("Require the Phone Number")
    }),
    onSubmit:async(values)=>{
      try{
        const response = await ApiServices.RegisterData(values);
        console.log(response,"dsd");
       
          await Swal.fire({
            icon: "success",
            title: "Success",
            text: "Create Add User Successfully",
            confirmButtonText: "Ok",
          });
          window.location.href = "/dashboard/user";
      }
      catch(err)
      {
        await Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Check the field correctly",
          confirmButtonText: "Ok",
        });
        console.error("Register failed");
      }
    },
  })

  return (
    <div className="mx-3 ">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Default Location</Form.Label>
          </div>
          <div className="col-md-5">
            <Form.Select>
              <option>New York (NY)</option>
              <option>Chennai</option>
              <option>Salem</option>
            </Form.Select>
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">First Name</Form.Label>
          </div>
          <div className="col-md-5">
            <Form.Control className="bg-light" 
            type="name"
            name="Firstname"
            values={formik.values.Firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.Firstname && formik.errors.Firstname ? (
              <div className=" text-danger">{formik.errors.Firstname}</div>
            ): null}
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Last Name</Form.Label>
          </div>
          <div className="col-md-5">
            <Form.Control className="bg-light"
            type="name"
            name="Lastname"
            values={formik.values.Lastname}
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}/>
            {formik.touched.Lastname && formik.errors.Lastname ? (
              <div className="text-danger">{formik.errors.Lastname}</div>
            ):null }
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Email/User Name</Form.Label>
          </div>
          <div className="col-md-5">
            <Form.Control className="bg-light"
            type="email"
            name="Email"
            values={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

            {formik.touched.Email && formik.errors.Email ? (
              <div className="text-danger">{formik.errors.Email}</div>
            ):null}
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Password</Form.Label>
          </div>
          <div className="col-md-5">
            <Form.Control className="bg-light" 
            type="password"
            name="Password"
            values={formik.values.Password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.Password && formik.errors.Password ? (
              <div className="text-danger">{formik.errors.Password}</div>
            ):null}
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Phone</Form.Label>
          </div>
          <div className="col-md-5">
            <Form.Control className="bg-light"
            type="number"
            name="PhoneNumber"
            value={formik.values.PhoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
             {formik.touched.PhoneNumber && formik.errors.PhoneNumber ? (
              <div className="text-danger">{formik.errors.PhoneNumber}</div>
            ):null}
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Default Crew</Form.Label>
          </div>
          <div className="col-md-5">
            <Form.Select>
              <option>Select a Crew...</option>
              <option>Chennai</option>
              <option>Salem</option>
            </Form.Select>
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Capacity</Form.Label>
          </div>
          <div className="col-md-9">
            <div className="row mx-0">
              <div className="col-md-6 border px-0 ">
                <div className="d-flex flex-column">
                  <div className="bg-light px-3 py-2">Money($)</div>
                  <div className="px-3 py-2">
                    <Form.Control placeholder="0"></Form.Control>
                  </div>
                </div>
              </div>
              <div className="col-md-6 border px-0 ">
                <div className="d-flex flex-column">
                  <div className="bg-light px-3 py-2">
                    Square Footage (Sq Feet)
                  </div>
                  <div className="px-3 py-2">
                    <Form.Control placeholder="0"></Form.Control>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Goals</Form.Label>
          </div>
          <div className="col-md-9">
            <div className="row mx-0">
              <div className="col-md-6 border px-0 ">
                <div className="d-flex flex-column">
                  <div className="bg-light px-3 py-2">
                    Monthly Break Even($)
                  </div>
                  <div className="px-3 py-2">
                    <Form.Control placeholder="0"></Form.Control>
                  </div>
                </div>
              </div>
              <div className="col-md-6 border px-0 ">
                <div className="d-flex flex-column">
                  <div className="bg-light px-3 py-2">Monthly Sales($)</div>
                  <div className="px-3 py-2">
                    <Form.Control placeholder="0"></Form.Control>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Task Event Style</Form.Label>
          </div>
          <div className="col-md-9">
            <div className="row mx-0">
              <div className="col-md-4 border px-0 ">
                <div className="d-flex flex-column">
                  <div className="bg-light px-3 py-2">
                    Monthly Break Even($)
                  </div>
                  <div className="px-3 py-2">
                    <Form.Control placeholder="0"></Form.Control>
                  </div>
                </div>
              </div>
              <div className="col-md-4 border px-0 ">
                <div className="d-flex flex-column">
                  <div className="bg-light px-3 py-2">Monthly Sales($)</div>
                  <div className="px-3 py-2">
                    <Form.Control placeholder="0"></Form.Control>
                  </div>
                </div>
              </div>
              <div className="col-md-4 border px-0 ">
                <div className="d-flex flex-column">
                  <div className="bg-light px-3 py-2">Monthly Sales($)</div>
                  <div className="px-3 py-2">
                    <Form.Control placeholder="0"></Form.Control>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Email Signature</Form.Label>
          </div>
          <div className="col-md-9 ">
            <div className="border d-flex p-2 align-items-center pb-5">
              <div>
                <span className="bg-grey_1 px-2 py-1 border  fw-5">A</span>
                <span className="bg-grey_1 py-1 border">
                  <Icon
                    icon="gridicons:dropdown"
                    width="1.2rem"
                    height="1.2rem"
                  />
                </span>
                <span className="bg-grey_1 fw-bold px-2 py-1 border  fw-5 ms-2">
                  B
                </span>
                <span className="bg-grey_1 py-1  px-2 border">
                  <Icon icon="fa:underline" width="1rem" height="1rem" />
                </span>
                <span className="bg-grey_1 py-1  px-2 border">
                  <Icon icon="mdi:eraser" width="1.2rem" height="1.2rem" />
                </span>
              </div>
              <div className="">
                <span className="bg-grey_1  px-2 py-1   ms-2">Open Sans</span>
                <span className="bg-grey_1 py-1 ">
                  <Icon
                    icon="gridicons:dropdown"
                    width="1.2rem"
                    height="1.2rem"
                  />
                </span>
              </div>
              <div className="ms-2 bg-grey_1">
                <span className="ps-2 ">
                  <Icon icon="f7:menu" width="1.5rem" height="1.5rem" />
                </span>
                <span className="ps-2 ">
                  <Icon
                    icon="foundation:list-number"
                    width="1.2rem"
                    height="1.2rem"
                  />
                </span>
                <span className="ps-2 ">
                  <Icon
                    icon="heroicons-solid:menu-alt-1"
                    width="1.2rem"
                    height="1.2rem"
                  />
                </span>
                <span className=" pe-2">
                  <Icon
                    icon="gridicons:dropdown"
                    width="1.2rem"
                    height="1.2rem"
                  />
                </span>
              </div>
              <div>
                <span className="px-2 py-1 ms-2 bg-grey_1 ">
                  <Icon icon="mi:link" width="1.2rem" height="1.2rem" />
                </span>
              </div>
            </div>
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Hourly Rate</Form.Label>
          </div>
          <div className="col-md-5 d-flex aling-items-center">
            <div className="p-2 bg-grey_1">
              <span>$</span>
            </div>
            <div>
              <Form.Control className="bg-light" />
            </div>
          </div>
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Options</Form.Label>
          </div>
          <div className="col-md-9 d-flex flex-column aling-items-center">
            <div className="d-flex">
              <span>
                <Form.Check />
              </span>
              <span className="ms-2">Active</span>
            </div>
            <div className="d-flex">
              <span>
                <Form.Check />
              </span>
              <span className="ms-2">Restricted Access</span>
            </div>
            <div className="d-flex">
              <span>
                <Form.Check />
              </span>
              <span className="ms-2">
                Enable Daily Task / Opportunity Notifications
              </span>
            </div>
            <div className="d-flex">
              <span>
                <Form.Check />
              </span>
              <span className="ms-2">Enable Daily Jobs Notifications</span>
            </div>
            <div className="d-flex">
              <span>
                <Form.Check />
              </span>
              <span className="ms-2">Truck Driver</span>
            </div>
            <div className="d-flex">
              <span>
                <Form.Check />
              </span>
              <span className="ms-2">Show Work Area First (when adding line item to an estimate)</span>
            </div>
            <div className="d-flex">
              <span>
                <Form.Check />
              </span>
              <span className="ms-2">Exclude From Reports</span>
            </div>
            <div className="d-flex">
              <span>
                <Form.Check />
              </span>
              <span className="ms-2">Allow User to Change Unit Price on Estimate (For Limoited Sales Only)</span>
            </div>
            <div className="d-flex">
              <span>
                <Form.Check />
              </span>
              <span className="ms-2">Read Only Calendar</span>
            </div>
          </div>     
        </Form.Group>
        <Form.Group
          controlId="formDefaultLocation"
          className="row align-items-center mt-md-3"
        >
          <div className="col-md-3">
            <Form.Label className="pt-3">Available Work  Locations</Form.Label>
          </div>
          <div className="col-md-5 d-flex aling-items-center">
            <div className="p-2 bg-grey_1 rounded-4">
               <span>New York(NY),</span>
            </div>
          </div>
        </Form.Group>
        <div className="col-12 bg-sky my-3">
          <div className="col-8 p-3">
          <span>Please remember each new regular user is an additional Rs 120.00 per month and field user is Rs 0.00. Are you sure you want to create a new user?</span>
          <div className="my-2 d-flex">
          <span><Form.Check/></span>
          <span className="ms-2">Yes, I would still like to add this user</span>
          </div>
          </div>
        </div>
        <hr/>
        <div className="d-flex justify-content-end">
          <Button type="submit">Save</Button>
          <Button variant="light" className="ms-2">Cancel</Button>
        </div>
      </Form>
    </div>
  );
};

export default Userinformation;
