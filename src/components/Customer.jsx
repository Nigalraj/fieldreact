import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Customer() {
  const rowData = [
    { label: "Name", value: "John", icon: "bx:edit" },
    { label: "Type", value: "", icon: "bx:edit" },
    { label: "Sales Person", value: "Salesperson1", icon: "bx:edit" },
    { label: "Estimate", value: "", icon: "uiw:setting" },
    { label: "Project Manager", value: "Test company", icon: "bx:edit" },
    { label: "Contact", value: "", icon: "uiw:setting" },
    { label: "Sape division", value: "", icon: "uiw:setting" },
    { label: "Plan", value: "", icon: "uiw:setting" },
    { label: "Address", value: "", icon: "bx:edit" },
    { label: "Work Orders", value: "None yet", icon: "bx:edit" },
  ];

  const buttons = [
  { text: 'Close', color: 'primary' },
  { text: 'Duplicate', color: 'success' },
  { text: 'Archive', color: 'danger' }
];

  return (
    <div className="font">
      <div className="d-flex justify-content-between my-3 mx-3">
  <div>
    <span className="fs-5">Test</span>
  </div>
  <div className="text-white">
    {buttons.map((button, index) => (
      <span key={index} className={`bg-${button.color} rounded-2 p-2 ${index !== 0 ? 'ms-1' : ''}`}>
        {button.text}
      </span>
    ))}
  </div>
</div>
      <hr className="my-0"></hr>
      <div className="m-2">
        <span>Opportunity </span>
        <span className="mx-2">&gt;</span>
        <span>Jobs </span>
        <span className="mx-2">&gt;</span>
        <span>Test</span>
      </div>
      <hr className="my-0"></hr>
      <div>
        <div className="row m-2">
          <div className="col-md-3  px-0">
            <div className="d-flex bg-estimate ps-3 flex-column">
              <span>Estimate Approved</span>
              <span>₹0.00</span>
            </div>
          </div>
          <div className="col-md-3 mt-2 mt-md-0 px-0 ps-md-1">
            <div className="d-flex  bg-approved ps-3 flex-column">
              <span>Approved</span>
              <span>₹0.00</span>
            </div>
          </div>
          <div className="col-md-3 mt-2 mt-md-0 px-0 ps-md-1">
            <div className="d-flex bg-approved ps-3 flex-column">
              <span>Approved Left</span>
              <span>₹0.00</span>
            </div>
          </div>
          <div className="col-md-3 mt-2 mt-md-0 px-0 ps-md-1">
            <div className="d-flex bg-approved ps-3 flex-column">
              <span>Invoice</span>
              <span>0 Open Invoice</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border mx-3">
        <Tabs
          defaultActiveKey="lead"
          id="uncontrolled-tab-example"
          className="mb-3 "
        >
          <Tab eventKey="lead" className="" title="Overview">
            <div className="row mx-0">
              <div className="col-lg-4 col-md-6 d-flex justify-content-start">
                <table className="table table-bordered">
                  <tbody>
                    {rowData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.label}</td>
                        <td>
                          <div className="d-flex justify-content-between">
                            <span>{row.value}</span>
                            <span>
                              <Icon
                                icon={row.icon}
                                width="1.2rem"
                                height="1rem"
                                style={{
                                  color: row.value ? "#006eff" : "#000000",
                                }}
                              />
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-md-6 col-lg-4 bg-light">
                <div style={{ width: "100%" }}>
                  <iframe
                    title="Maps"
                    width="100%"
                    height="400"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.gps.ie/">gps tracker sport</a>
                  </iframe>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="d-flex my-2 justify-content-between mx-2">
                  <span>Assigned office location</span>
                  <span>
                    <Icon
                      icon="bx:edit"
                      width="1.2rem"
                      height="1rem"
                      style={{ color: "#006eff" }}
                    />
                  </span>
                </div>
                <hr className="my-0" />
                <div className="d-flex my-2 flow-row justify-content-between mx-2">
                  <div className="d-flex flex-column justify-content-between">
                    <span>Summary Private Note</span>
                    <span>NewYork</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="bx:edit"
                        width="1.2rem"
                        height="1rem"
                        style={{ color: "#006eff" }}
                      />
                    </span>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="d-flex my-2 flow-row justify-content-between mx-2">
                  <div className="d-flex flex-column justify-content-between">
                    <span>Work OrderNote</span>
                    <span>NewYork</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="bx:edit"
                        width="1.2rem"
                        height="1rem"
                        style={{ color: "#006eff" }}
                      />
                    </span>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="d-flex my-2 justify-content-between mx-2">
                  <span>Confidence Level</span>
                  <span>
                    <Icon
                      icon="bx:edit"
                      width="1.2rem"
                      height="1rem"
                      style={{ color: "#006eff" }}
                    />
                  </span>
                </div>
                <hr className="my-0" />
                <div className="d-flex my-2 justify-content-between mx-2">
                  <span>Action Needed</span>
                  <span>
                    <Icon
                      icon="bx:edit"
                      width="1.2rem"
                      height="1rem"
                      style={{ color: "#006eff" }}
                    />
                  </span>
                </div>
                <hr className="my-0" />
                <div className="d-flex my-2 justify-content-between mx-2">
                  <span>Open Task</span>
                  <span>
                    <Icon
                      icon="bx:edit"
                      width="1.2rem"
                      height="1rem"
                      style={{ color: "#006eff" }}
                    />
                  </span>
                </div>
                <hr className="my-0" />
                <div className="d-flex my-2 flow-row justify-content-between mx-2">
                  <div className="d-flex flex-column justify-content-between">
                    <span>Assigned office Location</span>
                    <span>NewYork</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="bx:edit"
                        width="1.2rem"
                        height="1rem"
                        style={{ color: "#006eff" }}
                      />
                    </span>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="d-flex my-2 flow-row justify-content-between mx-2">
                  <div className="d-flex flex-column justify-content-between">
                    <span>Assigned office location</span>
                    <span>NewYork</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="bx:edit"
                        width="1.2rem"
                        height="1rem"
                        style={{ color: "#006eff" }}
                      />
                    </span>
                  </div>
                </div>
                <hr className="my-0" />
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Document">
            Tab content for Contacts
          </Tab>
          <Tab eventKey="contact" title="Photos">
            Tab content for Documents
          </Tab>
          <Tab eventKey="time log" title="Time log">
            Tab content for Photos
          </Tab>
          <Tab eventKey="downloads" title="Downloads">
            Tab content for Photos
          </Tab>
          <Tab eventKey="photos" title="Photos">
            Tab content for Photos
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Customer;
