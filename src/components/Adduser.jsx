import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Userinformation from "./Userinformation";

const Adduser = () => {
  return (
    <div className="col-md-9 col-12 bg-light pt-4">
      <div className="border bg-white p-3">
        <span>Users</span>
        <span className="mx-2">&gt;</span>
        <span>Create User</span>
      </div>
      <div className="bg-white p-3">
        <Tabs>
          <Tab eventKey="userinformation" title="User information">
            <Userinformation/>
          </Tab>
          <Tab eventKey="payroll" title="Payroll (Beta)">
            Tab content for Documents
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Adduser;
