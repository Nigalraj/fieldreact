import React, { useState, useEffect } from "react";
import { Tabs, Tab, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from 'react-router-dom';
import headers from "../utils/data";

function UncontrolledExample() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const [formData, setFormData] = useState({
    CompanyName: "",
    ProjectName: "",
    FirstName: "",
    LastName: "",
    LeadSource: "",
    Location: "",
    Name: "",
    Phone: "",
    Terms: "",
    Email: "",
    Website: "",
    Address1: "",
    Address2: "",
    BillingAddress1: "",
    BillingAddress2: "",
    City: "",
    State: "",
    BidDate: "",
    Zip: "",
  });
  const [billingAdd, setBillingAdd] = useState(false);

  const leadSources = ["One", "Two", "Three"];
  const locations = ["New York(NY)", "Los Angeles(LA)", "Chicago(CH)"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/api/opportunity",
        formData,
        {
          headers: headers
        }
      );
      console.log("Opportunity created:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error creating opportunity:", error);
    }
  };

  const handleaddress = () => {
    setFormData({
      ...formData,
      BillingAddress1: formData.Address1,
      BillingAddress2: formData.Address2,
    });
    setBillingAdd(!billingAdd);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <div className="col-lg-9">
        <div className="my-3 ms-3">
          <h2>Create Lead</h2>
        </div>
        <hr />
        <div className="ms-3">
          <span>Leads &gt; Create Lead</span>
        </div>
        <hr />
        <div className="ms-3 border">
          <Tabs
            defaultActiveKey="lead"
            id="uncontrolled-tab-example"
            className="mb-3 "
          >
            <Tab eventKey="lead" className=" ms-3" title="Lead Information">
              <div className="d-md-flex d-flex flex-column flex-md-row justify-content-between ">
                <div className="d-flex ">
                  <span>Account Type</span>
                  <Form.Check aria-label="option 1" className="ms-5 " />
                  <span className="ms-1">Business Account</span>
                </div>
                <div className="d-flex ">
                  <span> Date Created</span>
                  <span className="ms-5">
                    {currentDateTime.toLocaleDateString()}
                  </span>
                  <span className="me-3 ms-1">
                    {currentDateTime.toLocaleTimeString()}
                  </span>
                </div>
              </div>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex my-3 ">
                  <div className="me-md-5">
                    <span>status</span>
                  </div>
                  <div className="ms-5">
                    <Form.Select aria-label="Default select example">
                      <option>Select a Status</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="d-flex my-3">
                  <div className="me-md-5">
                    <span>Terms</span>
                  </div>
                  <div className="ms-5">
                    <Form.Select
                      aria-label="Default select example"
                      name="Terms"
                      value={formData.Terms}
                      onChange={handleChange}
                    >
                      <option>Select a Terms</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <Form.Label>Project Name</Form.Label>
                  </div>
                  <div className="ms-md-5">
                    <Form.Control
                      type="text"
                      name="ProjectName"
                      value={formData.ProjectName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="d-flex my-3 me-5 me-md-0">
                  <div className="col-2 ">
                    <Form.Label>Contact Information</Form.Label>
                  </div>
                  <div className="col-10 me-2  ms-5 ms-md-0">
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Company Name</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Last Source</th>
                          <th>Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Form.Control
                              type="text"
                              name="CompanyName"
                              value={formData.CompanyName}
                              onChange={handleChange}
                              size={15}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="FirstName"
                              value={formData.FirstName}
                              onChange={handleChange}
                              size={11}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="LastName"
                              value={formData.LastName}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                          <td>
                            <Form.Select
                              name="LeadSource"
                              value={formData.LeadSource}
                              onChange={handleChange}
                              aria-label="Lead Source"
                            >
                              <option>Select a lead source</option>
                              {leadSources?.map((source, index) => (
                                <option key={index} value={index + 1}>
                                  {source}
                                </option>
                              ))}
                            </Form.Select>
                          </td>
                          <td>
                            <Form.Select
                              name="Location"
                              value={formData.Location}
                              onChange={handleChange}
                              aria-label="Location"
                            >
                              <option>Select a location</option>
                              {locations?.map((location, index) => (
                                <option key={index}>{location}</option>
                              ))}
                            </Form.Select>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <div className="d-flex my-3 me-5 me-md-0">
                  <div className="col-2 ">
                    <Form.Label>Contact Details</Form.Label>
                  </div>
                  <div className="col-10 me-2 ms-5 ms-md-0">
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Cell</th>
                          <th>Work</th>
                          <th>Email</th>
                          <th>Website</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Form.Control
                              type="text"
                              name="Name"
                              value={formData.Name}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="number"
                              name="Phone"
                              value={formData.Phone}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="work"
                              value={formData.work}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="Email"
                              value={formData.Email}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="Website"
                              value={formData.Website}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <div className="d-flex my-3 me-5 me-md-0">
                  <div className="col-2 ">
                    <Form.Label>Project Address</Form.Label>
                  </div>
                  <div className="col-10 me-2 ms-5 ms-md-0">
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Address 1</th>
                          <th>Address 2</th>
                          <th>City</th>
                          <th>State</th>
                          <th>Zip</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Form.Control
                              type="text"
                              name="Address1"
                              value={formData.Address1}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="Address2"
                              value={formData.Address2}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="City"
                              value={formData.City}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="State"
                              value={formData.State}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                          <td>
                            <Form.Control
                              type="text"
                              name="Zip"
                              value={formData.Zip}
                              onChange={handleChange}
                              size={10}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <div className="d-flex ">
                  <span>Billing Address</span>
                  <Form.Check
                    aria-label="option 1"
                    className="ps-lg-4  ms-2"
                    onChange={handleaddress}
                  />
                  <span className="ms-2">Same as Project Address</span>
                </div>
                <div className="d-flex my-3">
                  <span className="me-4 pe-1">Bid Date</span>
                  <Form.Control
                    type="date"
                    name="BidDate"
                    className="ms-5 "
                    value={formData.BidDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex my-3">
                  <div>
                    <span>Assigned User</span>
                  </div>
                  <div className="ms-5">
                    <Form.Select aria-label="Default select example">
                      <option>Dropdwon button</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div>
                    <Form.Check aria-label="option 1" className="ms-2 " />
                  </div>
                  <div>
                    <span className="ms-2">Notify via Email</span>
                  </div>
                </div>
                <div className="d-flex my-3">
                  <div>
                    <span>Action Needed</span>
                  </div>
                  <div className="ms-5">
                    <Form.Select aria-label="Default select example">
                      <option>Dropdwon button</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div>
                    <Form.Check aria-label="option 1" className="ms-2 " />
                  </div>
                  <div>
                    <span className="ms-2">
                      Create & Assign Task Form Action
                    </span>
                  </div>
                </div>
                <div>
                  <span>Locations</span>
                  <span className="bg-success ms-2 rounded-4 p-1">
                    NEWYORK(NY)
                  </span>
                </div>
                <hr />
                <div className="d-flex justify-content-end mx-2">
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                  <Button variant="success" type="submit" className="ms-2">
                    Save & Convert to Opportunity
                  </Button>
                  <Link to="/dashboard">
                    <Button variant="light" type="submit" className="ms-2">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </Form>
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
      <div className="col-lg-3"></div>
    </>
  );
}

export default UncontrolledExample;
