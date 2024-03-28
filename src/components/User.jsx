import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = () => {
  const dropdata = [
    { name: "All Administrator Users" },
    { name: "All Sales Manager Users" },
    { name: "All Manager Users" },
    { name: "All Sales Users" },
    { name: "All Installer Users" },
    { name: "All Accounting Users" },
    { name: "All Operations Users" },
    { name: "All Inventory Users" },
    { name: "All Limited Sales Users" },
    { name: "All Service Tech Users" },
  ];

  const data = [
    { name: "Raj",location:"Salem",Username:"nigalraj@gmail.com" ,Roles:"Accounting"},
    { name: "Raj",location:"Salem",Username:"nigalraj@gmail.com" ,Roles:"Accounting"},
    { name: "Raj",location:"Salem",Username:"nigalraj@gmail.com" ,Roles:"Accounting"},
  ];

  const header = ["Name","Location","Username","Roles"]

  return (
    <div className="col-md-8 col-12">
    <div className=" p-3 bg-light">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1>Users</h1>
        </div>
        <div className="d-flex">
          <span className="mx-2">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                View
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Inactive Users</Dropdown.Item>
                <hr/>
                {dropdata.map((item, index) => (
                  <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </span>
          <span>
            <Link to="/dashboard/user/createuser">
            <Button variant="success">Add User</Button>
            </Link>
          </span>
        </div>
      </div>
    </div>
    <div className="table-responsive table-bordered p-3">
    <table className="table  ">
        <thead className="table-bordered">
        {header.map((item,index)=>(
            <th key={index}>{item}</th>
        ))}
        </thead>
        <tbody className="">
            {data.map((item,index)=>(
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
  );
};

export default User;
