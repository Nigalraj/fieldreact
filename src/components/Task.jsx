import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Taskfield from "./Taskfield";


const Task = () => {
  const header = ["Name", "Location", "Username", "Roles"];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="col-8">
      <div className="bg-light">
        <div className="">
          <div className="row mx-0 p-2">
            <div className="col-5 p-2 border">
              <Form.Control
                type="text"
                name="search"
                placeholder="Search Tasks..."
              ></Form.Control>
            </div>
            <div className="col-5 p-2 border">
              <Form.Select aria-label="Default select example">
                <option>Select a User..</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="col-2 p-2 border text-center">
              <Button variant="primary">Filter</Button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between m-3">
          <div>
            <span className="fs-2">Tasks</span>
          </div>
          <div>
            <Button variant="primary" onClick={handleShow}>
              Add Task
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Task</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Taskfield/>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="d-md-flex mx-2 justify-content-between">
          <div className="d-flex align-items-center my-2">
            <div>
              <span>Show</span>
            </div>
            <div className="ms-2">
              <Form.Select aria-label="Default select example">
                <option>Select a User..</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="ms-2">
              <span>entities</span>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center my-2">
              <span>Search</span>
              <input
                className="form-control mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
        <table className="table  mx-2">
          <thead className="table-bordered">
            {header.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </thead>
          <tbody className="">
            <tr>
              <td className="border">hbf</td>
              <td className="border">bdh</td>
              <td className="border">bv</td>
              <td className="border">Accounting</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Task;
