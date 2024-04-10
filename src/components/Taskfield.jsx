import React, { useState } from 'react';
import { Form, Table } from "react-bootstrap";

const Taskfield = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <Table className="table table-bordered">
        <tbody>
          <tr>
            <td>Task</td>
            <td>
              <Form.Control placeholder="Enter "></Form.Control>
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>
              <Form.Control as="textarea" rows={3} />
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>
              <Form.Select>
                <option>fg</option>
                <option>fg</option>
                <option>fg</option>
              </Form.Select>
            </td>
          </tr>
          <tr>
            <td>Task</td>
            <td>
              <Form.Control />
            </td>
          </tr>
          <tr>
            <td>Remainder</td>
            <td>
              <Form.Group >
                <div className='d-flex'>
                <div>
                <Form.Check 
                 className="me-2"
                 
                 checked={isChecked}
                 onChange={handleCheckboxChange} />
                </div>
                <div>
                <Form.Label>Large file input example</Form.Label>
                </div>
                </div>
                <div>
                {isChecked ?
                <div>
                    <div className='d-flex flex-column'>
                        <div className="d-flex align-item-center">
                        <span>Remind user</span>
                        <select>
                            <option>fv</option>
                        </select>
                        <span>due date and every</span>
                        <select>
                            <option>fv</option>
                        </select>
                        </div>
                        <div>
                            <span>hours after due date</span>
                        </div>
                    </div>
                </div> : null}
                </div>
              </Form.Group>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Taskfield;
