import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomerManagement = () => {
  const data = [
    {
      name: "Raj",
      location: "Salem",
      Username: "nigalraj@gmail.com",
      Roles: "Accounting",
    },
    {
      name: "Raj",
      location: "Salem",
      Username: "nigalraj@gmail.com",
      Roles: "Accounting",
    },
    {
      name: "Raj",
      location: "Salem",
      Username: "nigalraj@gmail.com",
      Roles: "Accounting",
    },
  ];

  const header = ["Name", "Location", "Username", "Roles"];
  return (
    <div>
      <div className="fs">
        <div className="row mx-0">
          <div className="col-lg-9 bg-light border">
            <div>
              <div className="row m-2">
                <div className="col-lg-3 col-md-6 border p-2">
                  <Form.Control
                    className="py-0 fw-1"
                    placeholder="Search Customers..."
                  />
                </div>
                <div className="col-lg-3 col-md-6 border p-2">
                  <Form.Select
                    aria-label="Default select example"
                    className="py-0"
                  >
                    <option>Open this </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="col-lg-3 col-md-4 border p-2">
                  <Form.Select
                    aria-label="Default select example"
                    className="py-0"
                  >
                    <option>Open this</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="col-lg-2 border py-2 col-md-4 align-items-center d-flex ">
                  <span>
                    <Form.Check />
                  </span>
                  <span className="ms-2">Include</span>
                </div>
                <div className="col-lg-1 border col-md-4 align-items-center d-flex">
                  <span className="bg-blue text-white px-2 rounded-3 py-1 my-2">
                    Filter
                  </span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="col-lg-9 bg-light d-flex align-items-center px-3 justify-content-between border">
            <div className="my-3">
              <span className="fs-3 ">Customers</span>
            </div>
            <div>
              <Link to="/dashboard/customermanagement/addcustomer">
              <Button variant="success">Add Customer</Button>
              </Link>

              
            </div>
          </div>
          <div className=" col-lg-9 d-md-flex justify-content-between">
            <div className="d-flex align-items-center my-3">
              <div>
                <span>Show</span>
              </div>
              <div className="ms-2">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="bg-light text-dark border-light"
                  >
                    View jobs Needing
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center my-3">
                <span>Search</span>
                <Form.Control
                  className="form-control mx-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  // value={searchQuery}
                  // onChange={handleSearch}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="table-responsive table-bordered p-3">
              <table className="table  ">
                <thead className="table-bordered">
                  {header.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </thead>
                <tbody className="">
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="border">{item.name}</td>
                      <td className="border">{item.location}</td>
                      <td className="border">{item.Username}</td>
                      <td className="border">{item.Roles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerManagement;
