import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Form from "react-bootstrap/Form";

function CreateOpportunity() {
  return (
    <div className="mt-2 ">
      <div className="table-responsive">
        <table className=" table table-bordered">
          <tbody>
            <tr>
              <td>Customer:</td>
              <td>
                <Form.Select aria-label="Default select example">
                  <option>Open this </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center fw-bold">
                New Customer Details
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className="d-flex justify-content-center">
                  <Form.Check></Form.Check>
                  <label className="ms-2">Business Account</label>
                </div>
              </td>
            </tr>
            <tr>
              <td>Comapany Name</td>
              <td>
                <Form.Control
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>First Name</td>
              <td>
                <Form.Control
                  aria-label="First Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>Subdivision</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>Country</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>Salesperson</td>
              <td>
                <Form.Select aria-label="Default select example">
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
                <td>Privates Notes:</td>
                <td>
                  <Form.Control
                    as="textarea" 
                    name="feedback" 
                    rows={3} 
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
              <tr>
              <td>Email</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>Type</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>Source</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>Location</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="fw-bold text-center">Opportunity Information</td>
            </tr>
            <tr>
              <td>Name/Number</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <td>Plan Name</td>
              <td>
                <Form.Control
                  aria-label="Last Name"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CreateOpportunity;
