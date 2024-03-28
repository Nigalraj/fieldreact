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
      <div className="col-lg-9 p-2">
        <Tabs
          defaultActiveKey="lead"
          id="uncontrolled-tab-example"
          className=""
        >
          <Tab eventKey="lead" className=" pt-3 border" title="Lead Information">
            <div className="row mx-0 ">
              <div className="col-lg-4 d-flex  flex-column flex-md-row">
                <div className="col ">
                <Form.Label className="text-nowrap">House Account</Form.Label>
                </div>
                <div className="col ">
                <Form.Check className=""></Form.Check>
                </div>
              </div>
              <div className="col-lg-4 d-flex mt-2 mt-lg-0 flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Commercial Account
                </Form.Label>
                </div>
                <div className="col">
                <Form.Check className=""></Form.Check>
                </div>
              </div>
              <div className="col-lg-4 d-flex  mt-2 mt-lg-0 flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Same as physical
                </Form.Label>
                </div>
                <div className="col">
                <Form.Check className=""></Form.Check>
                </div>
              </div>
            </div>
            <div className="row mx-0 ">
              <div className="col-lg-4  mt-2 mt-lg-0 d-flex flex-column align-md-items-center flex-md-row">
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
              <div className="col-lg-4 mt-2 mt-lg-0 d-flex flex-column align-md-items-center  flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Physical Address 1
                </Form.Label>
                </div>
                <div className="col ">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 mt-2 mt-lg-0 d-flex flex-column align-md-items-center  flex-md-row">
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
            <div className="row mx-0 mt-lg-3">
              <div className="col-lg-4 mt-2 mt-lg-0 align-md-items-center d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">Account Type</Form.Label>
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
              <div className="col-lg-4 mt-2 mt-lg-0 d-flex align-md-items-center flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Physical Address 2
                </Form.Label>
                </div>
                <div className="col ">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 mt-2 mt-lg-0 d-flex align-md-items-center  flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Billing Address 2
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0  mt-lg-3">
              <div className="col-lg-4 mt-2 mt-lg-0 d-flex align-md-items-center  flex-column flex-md-row">
              <div className="col">
                <Form.Label className="text-nowrap">
                 First Name 
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 mt-2 mt-lg-0 d-flex align-md-items-center flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Physical City
                </Form.Label>
                </div>
                <div className="col ">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 mt-2 mt-lg-0 d-flex align-md-items-center  flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Billing City
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0  mt-lg-3">
              <div className="col-lg-4 mt-2 align-md-items-center  mt-lg-0 d-flex flex-column flex-md-row">
              <div className="col">
                <Form.Label className="text-nowrap">
                  Last Name
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 mt-2 mt-lg-0 align-md-items-center  d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Physical State
                </Form.Label>
                </div>
                <div className="col ">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 mt-2 mt-lg-0 d-flex align-md-items-center  flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Billing State
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0  mt-lg-3">
              <div className="col-lg-4 mt-2 align-md-items-center mt-lg-0 d-flex flex-column flex-md-row">
              <div className="col">
                <Form.Label className="text-nowrap">
                  Phone
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 mt-2 align-md-items-center  mt-lg-0 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Physical Zip
                </Form.Label>
                </div>
                <div className="col ">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 mt-2 align-md-items-center  mt-lg-0 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Billing Zip
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0 mt-lg-3">
              <div className="col-lg-4 mt-2 align-md-items-center  mt-lg-0 d-flex flex-column flex-md-row">
              <div className="col">
                <Form.Label className="text-nowrap">
                 Fax
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
              <div className="col-lg-4 mt-2 align-md-items-center  mt-lg-0 d-flex flex-column flex-md-row">
                <div className="col">
                <Form.Label className="text-nowrap">
                  Physical Country
                </Form.Label>
                </div>
                <div className="col ">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0 mt-lg-3">
              <div className="col-lg-4 align-md-items-center   mt-2 mt-lg-0 d-flex flex-column flex-md-row">
              <div className="col">
                <Form.Label className="text-nowrap">
                  Mobile
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0 mt-lg-3">
              <div className="col-lg-4 align-md-items-center  mt-2 mt-lg-0 d-flex flex-column flex-md-row">
              <div className="col">
                <Form.Label className="text-nowrap">
                  Work Phone
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0 mt-lg-3">
              <div className="col-lg-4 mt-2 align-md-items-center  mt-lg-0 d-flex flex-column flex-md-row">
              <div className="col">
                <Form.Label className="text-nowrap">
                  Email
                </Form.Label>
                </div>
                <div className="col">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0 mt-lg-3">
              <div className="col-lg-4 mt-2 align-md-items-center  mt-lg-0 d-flex flex-column flex-md-row">
              <div className="col">
                <Form.Label className="text-nowrap">
                  Discount
                </Form.Label>
                </div>
                <div className="col d-flex align-items-center ">
                <span><Form.Control className="w-100 rounded-end-0"></Form.Control></span>
                <span className="bg-grey p-2 rounded-end">%</span>  
                </div>
              </div>
            </div>
           <hr className="mx-3 my-5"/>
           <div className="row mx-0 mt-3">
              <div className="col-lg-8 col-md-12  mt-2 align-md-items-center  mt-lg-0 d-flex flex-column flex-md-row">
              <div className="col-3 col-md-6">
                <Form.Label className="text-nowrap">
                  Email
                </Form.Label>
                </div>
                <div className="col-md-6 ">
                <Form.Control className="w-100"></Form.Control>
                </div>
              </div>
            </div>
            <div className="row mx-0 mt-3">
              <div className="col-lg-8 col-md-12   mt-2 mt-lg-0 d-flex flex-column align-md-items-center flex-md-row">
                <div className="col-3 col-md-6">
                <Form.Label className="text-nowrap">Lead Source</Form.Label>
                </div>
                <div className="col-md-6 ">
                <Form.Select
                  aria-label="Default select example"
                  className="w-100"
                >
                  <option>Select a campagin...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                </div>
              </div>  
            </div>
            <div className="row mx-0 mt-3">
              <div className="col-lg-8  mt-2 mt-lg-0 d-flex flex-column align-md-items-center flex-md-row">
                <div className="col-3 col-md-6">
                <Form.Label className="text-nowrap">Salesperson</Form.Label>
                </div>
                <div className="col-md-6 ">
                <Form.Select
                  aria-label="Default select example"
                  className="w-100"
                >
                  <option>Select a salesman...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                </div>
              </div>  
            </div>
            <div className="row mx-0 mt-3">
              <div className="col-lg-8  mt-2 mt-lg-0 d-flex flex-column align-md-items-center flex-md-row">
                <div className="col-3 col-md-6">
                <Form.Label className="text-nowrap">Preferred Invoice Method</Form.Label>
                </div>
                <div className="col-md-6">
                <Form.Select
                  aria-label="Default select example"
                  className="w-100"
                >
                  <option>Select a preferred method</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                </div>
              </div>  
            </div>
            <div className="row mx-0 mt-3">
                <div className="col-lg-12 d-flex flex-column flex-md-row">
                    <div className="col-12 col-lg-4 col-md-6">
                        <Form.Label>Options</Form.Label>
                    </div>
                    <div className="col-lg-8 col-12 col-md-6">
                        <div className="d-flex mt-2">
                            <span><Form.Check/></span>
                            <span className="ms-2" >Active</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span><Form.Check/></span>
                            <span className="ms-2 " >Opt Out of Event and Invoice Reminders (overrides contact setting)</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span><Form.Check/></span>
                            <span className="ms-2 " >Opt Out of Estimate Future Reminders</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span><Form.Check/></span>
                            <span className="ms-2" >Do Not Quote</span>
                        </div>
                        <div className="d-flex mt-2">
                            <span><Form.Check/></span>
                            <span className="ms-2" >Pending Credit Approval</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-0 mt-3">
                <div className="d-flex flex-column flex-md-row">
                <div className="col-md-6 col-lg-4">
                    <Form.Label>Locations</Form.Label>
                </div>
                <div className="col-md-6 col-lg-8 col-12 ">
                    <span className="start rounded-4 text-center text-white p-1 ">New York(NY),</span>
                </div>
                </div>
            </div>
            <div className="row mx-0 mt-3">
                <div className="d-flex flex-column flex-md-row">
                <div className="col-md-6 col-lg-4">
                    <Form.Label>Credit Balance</Form.Label>
                </div>
                <div className="col-md-6 col-lg-8 col-12 ">
                    <span className="">Rs. 0.00 - this can be used when applying a payment to an invoice or by clicking here</span>
                </div>
                </div>
            </div>
            <hr className="m-3 "/>
            <div className="d-flex justify-content-end m-3">
                <Button>Save</Button>
                <Button variant="light" className="ms-2">Cancel</Button>
            </div>
            <hr className="m-3 "/>
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
