import React from "react";
import Button from "react-bootstrap/Button";
import { Modal, Form } from "react-bootstrap";

function ModalForm({ show, handleClose, modalType }) {
  
  const renderModalBody = () => {
    switch (modalType.label) {
      case "Name":
        return (
          <table className="table table-bordered">
            <tbody>
            <td>
                  <Form.Control
                    name="feedback"
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
            </tbody>
          </table>
        );
      case "Type":
        return (
          <table className=" table table-bordered">
            <tbody>
              <tr>
              <Form.Select>
                <option>Select a type..</option>
                <option>f</option>
                <option>f</option>
              </Form.Select>
              </tr>
            </tbody>
          </table>
        );
      case "Sales Person":
        return (
          <table className=" table table-bordered">
            <tbody>
              <tr>
                <td>Salesperson</td>
                <td>
                <Form.Select>
                <option>Deepiga Madan</option>
                <option>f</option>
                <option>f</option>
              </Form.Select>
                </td>
              </tr>
              <tr>
                <td>
                  Commission
                </td>
                <td>
                  <Form.Control
                    name="feedback"
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "Estimate":
        return (
          <table className="table table-bordered">
            <tbody>
            <tr>
                <td>Salesperson</td>
                <td>
                <Form.Select>
                <option>Deepiga Madan</option>
                <option>f</option>
                <option>f</option>
              </Form.Select>
                </td>
              </tr>
              <tr>
                <td>
                  Commission
                </td>
                <td>
                  <Form.Control
                    name="feedback"
                    placeholder="12.00"
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "Project Manager":
        return (
          <table className=" table table-bordered">
            <tbody>
              <tr>
                <td>
                  <Form.Select>
                    <option>Test Company</option>
                    <option>f</option>
                    <option>f</option>
                  </Form.Select>
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "Customer":
        return (
          <table className=" table table-bordered">
            <tbody>
            <tr>
                <td>Primary</td>
                <td>
                <Form.Select>
                <option>Select a primary contact</option>
                <option>f</option>
                <option>f</option>
              </Form.Select>
                </td>
              </tr>
              <tr>
                <td>
                  Alternate
                </td>
                <td>
                <Form.Select>
                <option>Select a alternate contact</option>
                <option>f</option>
                <option>f</option>
              </Form.Select>
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "Contact":
        return (
          <table className=" table table-bordered">
            <tbody>
              <tr>
                <td>Task</td>
                <td>
                  <Form.Control
                    name="name"
                    placeholder="Enter your task here.."
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>
                  <Form.Control
                    as="textarea"
                    name="name"
                    rows={3}
                    placeholder="Add more details about the task here"
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
              <tr>
                <td>Assignee</td>
                <td>
                  <Form.Select>
                    <option>Deepiga Madan</option>
                    <option>f</option>
                    <option>f</option>
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td>Due Date</td>
                <td>
                  <Form.Control
                    name="name"
                    placeholder="Due Date"
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
              <tr>
                <td>Remainder</td>
                <td>
                  <div className="d-flex">
                    <Form.Check></Form.Check>
                    <span className="ms-2">Notify via Email</span>
                  </div>
                  <div>
                    <span className="my-1">Remaind user</span>
                    <Form.Select className="my-1">
                      <option>Day Of</option>
                      <option>f</option>
                      <option>f</option>
                    </Form.Select>
                  </div>
                  <div>
                    <span className="my-1">due date and every</span>
                    <Form.Select className="my-1">
                      <option>24</option>
                      <option>f</option>
                      <option>f</option>
                    </Form.Select>
                    <span>hours after due date</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return (
          <table className=" table table-bordered">
            <tbody>
              <tr>
                <td>Summary </td>
                <td>
                  <Form.Select>
                    <option>Quote</option>
                    <option>f</option>
                    <option>f</option>
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td>Note</td>
                <td colSpan={2}>
                  <Form.Control
                    as="textarea"
                    name="feedback"
                    placeholder="Add more details about the tash here"
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
              <tr>
                <td>Assignee</td>
                <td colSpan={2}>
                  <Form.Select>
                    <option>Deepiga Madan</option>
                    <option>f</option>
                    <option>f</option>
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td colspan={3}>
                  <div className="d-flex">
                    <Form.Check></Form.Check>
                    <span className="ms-2">Notify via Email</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        );
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType.label}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderModalBody()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;
