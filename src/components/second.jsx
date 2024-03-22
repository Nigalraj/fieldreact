import React from "react";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import under from '../Asset/under-maintenance-sign-500x500.webp'

function App() {
  
  return (
    <div className="mt-2">
      <div className="d-flex justify-content-between flex-column flex-md-row">
        <div className="mt-2 ms-2 ">
          <span >Dashboard</span>
        </div>
        <div className="mx-3 d-flex flex-column flex-md-row">
            <Link to="/dashboard/start" className="p-2 px-4 my-3 my-md-0 rounded-3 bg-primary text-center text-decoration-none text-white">
            <span >Start New Opportunity</span>
          </Link>
          <Link to="/dashboard/start" className="p-2 px-4 ms-md-2  rounded-3 bg-primary text-decoration-none text-center text-white">
            <span>Add New Lead</span>
          </Link>
        </div>
      </div>
      <div className="ms-5">
      <Image src={under} fluid/>;
      </div>
    </div>
  );
}

export default App;
