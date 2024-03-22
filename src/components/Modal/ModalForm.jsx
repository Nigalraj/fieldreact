import React from "react";
import Button from "react-bootstrap/Button";
import { Modal, Form } from "react-bootstrap";

function ModalForm({ show, handleClose, modalType }) {
  const renderModalBody = () => {
    switch (modalType) {
      case "summaryNotes":
        return (
          <table className="table table-bordered">
            <tbody>
              <Form.Select>
                <option>f</option>
                <option>f</option>
                <option>f</option>
              </Form.Select>
            </tbody>
          </table>
        );
      case "location":
        return (
          <table className=" table table-bordered">
            <tbody>
              <tr>
                <td>Summary </td>
                <td>
                  <Form.Control
                    as="textarea"
                    name="feedback"
                    placeholder="Summary"
                    rows={8}
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex flex-column">
                    <span>Public Notes:</span>
                    <span className="text-secondary">Appear on work order</span>
                  </div>
                </td>
                <td>
                  <Form.Control
                    as="textarea"
                    name="feedback"
                    placeholder="Summary WO"
                    rows={8}
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "location_1":
        return (
          <table className=" table table-bordered">
            <tbody>
              <tr>
                <td>Summary </td>
                <td>
                  <Form.Control
                    as="textarea"
                    name="feedback"
                    placeholder="Summary"
                    rows={8}
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex flex-column">
                    <span>Public Notes:</span>
                    <span className="text-secondary">Appear on work order</span>
                  </div>
                </td>
                <td>
                  <Form.Control
                    as="textarea"
                    name="feedback"
                    placeholder="Summary WO"
                    rows={8}
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "lock":
        return (
          <table className="table table-bordered">
            <tbody>
              <Form.Select>
                <option>Quote</option>
                <option>f</option>
                <option>f</option>
              </Form.Select>
            </tbody>
          </table>
        );
      case "action":
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
                <td>gvhj</td>
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
      case "retain":
        return (
          <table className=" table table-bordered">
            <tbody>
              <tr>
                <td>Retainage Type</td>
                <td>
                  <Form.Select>
                    <option>Fixed Amount</option>
                    <option>f</option>
                    <option>f</option>
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td>Note</td>
                <td>
                  <Form.Control
                    name="name"
                    placeholder=""
                    aria-label="Feedback"
                    aria-describedby="basic-addon2"
                  />
                </td>
              </tr>
              <tr>
                <td>Additional Option</td>
                <td colSpan={2}>
                  <div className="d-flex">
                    <Form.Check></Form.Check>
                    <span className="ms-2">Owner Insurance Program</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        );
      case "add":
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
            {modalType === "summaryNotes"
              ? "SummaryNotes/Name"
              : modalType === "location" || modalType === "location_1"
              ? "Set Location"
              : modalType === "lock"
              ? "Lock"
              : modalType === "action"
              ? "Assign Action "
              : modalType === "retain"
              ? "Assign Retainage"
              : modalType === "add"
              ? "Add New Task"
              : "Add"}
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
