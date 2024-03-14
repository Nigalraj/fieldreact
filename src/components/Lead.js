import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import GoogleReactMap from "google-map-react"

function UncontrolledExample() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update currentDateTime every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const columnData = [
    { id: 1, title: "Column 1", content: "Lorem ipsum 1" },
    { id: 2, title: "Column 2", content: "Lorem ipsum 2" },
    { id: 3, title: "Column 3", content: "Lorem ipsum 3" },
  ];
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
 
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
              <div className="d-flex my-3">
                <div>
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
                <div>
                  <span>Terms</span>
                </div>
                <div className="ms-5">
                  <Form.Select aria-label="Default select example">
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
                <div className="ms-5">
                  <Form.Control type="text" />
                </div>
              </div>
              <div className="d-flex my-3">
                <div className="col-2 ">
                  <Form.Label>Contact Information</Form.Label>
                </div>
                <div className="col-10 me-2">
                  <Table striped bordered hover>
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
                          <input type="text" size={15} />
                        </td>
                        <td>
                          <input type="text" size={11} />
                        </td>
                        <td>
                          <input type="text" size={10} />
                        </td>
                        <td>
                          <Form.Select aria-label="Default select example">
                            <option>Select a lead source</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </td>
                        <td>
                          {" "}
                          <Form.Select aria-label="Default select example">
                            <option>New York(NY)</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="d-flex my-3">
                <div className="col-2 ">
                  <Form.Label>Contact Details</Form.Label>
                </div>
                <div className="col-10 me-2">
                  <Table striped bordered hover>
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
                          <input type="text" size={10} />
                        </td>
                        <td>
                          <input type="text" size={10} />
                        </td>
                        <td>
                          <input type="text" size={10} />
                        </td>
                        <td>
                          <input type="text" size={10} />
                        </td>
                        <td>
                          <input type="text" size={10} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="d-flex my-3">
                <div className="col-2 ">
                  <Form.Label>Project Address</Form.Label>
                </div>
                <div className="col-10 me-2">
                  <Table striped bordered hover>
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
                          <input type="text" size={10} />
                        </td>
                        <td>
                          <input type="text" size={10} />
                        </td>
                        <td>
                          <input type="text" size={10} />
                        </td>
                        <td>
                          <input type="text" size={10} />
                        </td>
                        <td>
                          <input type="text" size={10} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="d-flex ">
                  <span>Billing Address</span>
                  <Form.Check aria-label="option 1" className="ms-2 " />
                  <span className="ms-2">Same as Project Address</span>
              </div>
              <div className="d-flex my-3">
                  <span className="me-2">Bid Date</span>
                  <input type="date" name="date" className="ms-5"/>
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
                  <span className="ms-2">Create & Assign Task Form Action</span>
                </div>
              </div>
              <div>
                <span>Locations</span>
                <span className="bg-success ms-2 rounded-4">NEWYORK(NY)</span>
              </div>
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
        {/* <div style={{width: "100%"}}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div> */}
        <GoogleReactMap 
        //bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}> 
        <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      />
      </GoogleReactMap>
      </div>
      <div className="col-lg-3"></div>
    </>
  );
}

export default UncontrolledExample;
