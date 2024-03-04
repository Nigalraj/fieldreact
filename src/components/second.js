import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="col-md-9 mt-2">
      <div className="d-flex justify-content-between flex-column flex-md-row">
        <div className="mt-2 ms-2 ">
          <span className="">Dashboard</span>
        </div>
        <div className="mx-3">
          <Link to="/start">
            <Button className="ms-2 mt-3 mt-md-0">Start New Opportunity</Button>
          </Link>
          <Link to="/add">
            <Button className="ms-2 mt-3 mt-md-0">Add New Lead</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
