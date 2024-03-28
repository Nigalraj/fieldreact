import React from "react";
import { Button, Form, Tab, Tabs } from "react-bootstrap";

const Addcustomer = () => {
  return (
    <div className="">
      <div className="col-lg-9 bg-light border">
        <div className="d-md-flex p-3 align-items-center justify-content-between">
          <div className="my-2 my-md-0">
            <span>New Customer</span>
          </div>
          <div className="d-flex flex-column flex-md-row">
            <Button variant="light" className="my-2 my-md-0">
              Statement
            </Button>
            <Button className="mx-md-2 apply border-0 my-md-0">
              Apply Payment
            </Button>
            <Button className="my-2 start border-0 my-md-0">
              Start New Opportunity
            </Button>
          </div>
        </div>
      </div>
      <div className="col-lg-9 p-3 border ">
        <div>
          <span>Customers</span>
          <span className="mx-2 ">&gt;</span>
          <span>New Customer</span>
        </div>
      </div>
      <div className="col-lg-9 bg-light text-white p-2">
        <div className="row mx-0 ">
          <div className="col-lg-2 col-md-6 bg_1 border p-2">
            <div className="d-flex flex-column">
              <span>Amount Owed</span>
              <span className="fw-bold fs-5">Rs 0.00</span>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 bg_2 border p-2">
            <div className="d-flex flex-column">
              <span>YTD Revenue</span>
              <span className="fw-bold fs-5">Rs 0.00</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 bg_2 border p-2">
            <div className="d-flex flex-column">
              <span>Lifetime Revenue</span>
              <span className="fw-bold fs-5">Rs 0.00</span>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 bg_2  border p-2">
            <div className="d-flex flex-column">
              <span>Unpaid Invoices</span>
              <span className="fw-bold fs-5">0 Open Invoices</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <Tabs
          defaultActiveKey="lead"
          id="uncontrolled-tab-example"
          className="mb-3 "
        >
          <Tab eventKey="lead" className=" ms-3" title="Lead Information">
            <div className="row mx-0">
              <div className="col-lg-4 d-flex  flex-column flex-md-row">
                <Form.Label className="text-nowrap">House Account</Form.Label>
                <Form.Check className="ms-md-3"></Form.Check>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap">
                  Commercial Account
                </Form.Label>
                <Form.Check className="ms-md-3"></Form.Check>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap">
                  Same as physical
                </Form.Label>
                <Form.Check className="ms-md-3"></Form.Check>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">Customer Type</Form.Label>
                </div>
                <div className="col">
                <Form.Select
                  aria-label="Default select example"
                  className="w-100"
                >
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                </div>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Physical Address 1
                </Form.Label>
                </div>
                <div className="col ">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Billing Address 1
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">Customer Type</Form.Label>
                </div>
                <div className="col">
                <Form.Select
                  aria-label="Default select example"
                  className="w-100"
                >
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                </div>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Physical Address 1
                </Form.Label>
                </div>
                <div className="col ">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Billing Address 1
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-4 d-flex flex-column flex-md-row">
              <div className="col">
                <Form.Label className="text-nowrap">
                  Billing Address 1
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Physical Address 1
                </Form.Label>
                </div>
                <div className="col ">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Billing Address 1
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            {/* <div className="row mx-0">
              <div className="col-lg-4 d-flex flex-column justify-content-between  flex-md-row">
                <Form.Label className="text-nowrap me-4">First Name</Form.Label>
                <Form.Control className="ms-lg-4 ms-md-3"></Form.Control>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap me-lg-4 pe-lg-3">Physical City </Form.Label>
                <Form.Control className="ms-md-3 "></Form.Control>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap">Billing City</Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-4  d-flex flex-column justify-content-between flex-md-row">
                <Form.Label className="text-nowrap">Last Name</Form.Label>
                <Form.Control className=""></Form.Control>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap">Physical State</Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap">Billing State</Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-4 d-flex flex-column  justify-content-between  flex-md-row">
                <Form.Label className="text-nowrap">Phone</Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap">Physical Zip </Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap">Billing Zip</Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-4 d-flex flex-column justify-content-between  flex-md-row">
                <Form.Label className="text-nowrap">Fax</Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap">
                  Physical Country
                </Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-4 d-flex flex-column justify-content-between  flex-md-row">
                <Form.Label className="text-nowrap">Mobile</Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap">Work Phone</Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
            </div>
            <div className="row mx-0">
              <div className="col-lg-4 d-flex flex-column flex-md-row">
                <Form.Label className="text-nowrap">Email</Form.Label>
                <Form.Control className="ms-md-3"></Form.Control>
              </div>
            </div> */}
          </Tab>
          <Tab eventKey="profile" title="Contacts(0)">
            Tab content for Contacts
          </Tab>
          <Tab eventKey="contact" title="Documents(0)">
            Tab content for Documents
          </Tab>
          <Tab eventKey="photos" title="Photos(0)">
            Tab content for Photos
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Addcustomer;
