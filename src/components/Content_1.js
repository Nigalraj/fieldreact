import Dropdown from "react-bootstrap/Dropdown";

function Content() {

    const data = [
        {   Customer: "TestCompany", WO: 'Mark', ProjectName: "Otto" , SiteAddress: "Otto",Type: "Otto",Status: "Otto",Start_Date: "Otto", Sale_Person: "Otto",Contact: "Otto" },
      ];

  return (
    <>
      <div className="d-flex justify-content-between mt-2 mx-2 mx-lg-0 align-items-center font">
        <div>
          <span className="fw-semibold">Jobs</span>
        </div>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className="bg-light text-dark border-light"
            >
              View jobs Needing
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <hr className="my-2" />
      <div className="row mx-2 mx-lg-0 font">
        <div className="col-lg-4 bg-light ">
          <div className="p-2">
            <select class="form-select " aria-label="Default select example">
              <option selected="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="p-2">
            <select class="form-select" aria-label="Default select example">
              <option selected="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="p-2">
            <select class="form-select" aria-label="Default select example">
              <option selected="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="p-2">
            <select class="form-select" aria-label="Default select example">
              <option selected="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="p-2 row">
            <div className="col-6 text-center p-4">
              <span className="">Light</span>
            </div>
            <div className="col-6 text-center p-4">
              <span>Light</span>
            </div>
          </div>
        </div>
        <div className="col-lg-8 text-center mt-4">
          <span>
            Google Maps Platform rejected your request. The provided API key is
            expired.
          </span>
        </div>
      </div>
      <div className="row mx-2 mx-lg-0 font">
        <div className="col-lg-3 col-md-6 py-3 d-flex justify-content-center align-items-center mt-2 bg-light">
          <span className="bg-primary px-2 me-2">1</span>
          <span>Customer Approved</span>
        </div>
        <div className="col-lg-3 col-md-6 py-3 d-flex justify-content-center align-items-center mt-2 bg-light">
          <span className="bg-primary px-2 me-2">1</span>
          <span>Needs WorkOrder</span>
        </div>
        <div className="col-lg-3 py-3 col-md-6 d-flex justify-content-center align-items-center mt-2 bg-light">
          <span className="bg-primary  px-2 me-2">1</span>
          <span>Schedule WorkOrder</span>
        </div>
        <div className="col-lg-3 py-3 col-md-6 d-flex justify-content-center align-items-center mt-2 bg-light">
          <span className="bg-primary px-2 me-2">1</span>
          <span>In progress workorder</span>
        </div>
      </div>
      <div className="d-md-flex justify-content-between mt-2 mx-2">
        <div className="d-flex justify-content-center my-3 my-md-0">
        <div>
           <span>Show</span>
        </div>
        <div className="ms-2">
            <select class="form-select py-0 pe-5" aria-label="Default select example">
              <option selected="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>
        </div>
        <div className="d-flex justify-content-center ">
        <div>
           <span>Search</span>
        </div>
        <div className="ms-2">
        <div>
            <input
                type="text"
                id="input"
                class="form-control rounded-5 py-0 custom-size"
                aria-describedby="passwordHelpInline"
            />
        </div>
        </div>
        </div>
      </div>
      <div style={{overflow:'auto'}}>
      <table className="border my-3 mx-2">
        <thead className="border">
          <tr >
            <th className="border text-center px-4">Customer</th>
            <th className="border text-center px-4">WO</th>
            <th className="border text-center px-4">ProjectName</th>
            <th className="border text-center px-4">SiteAddress</th>
            <th className="border text-center px-4">Type</th>
            <th className="border text-center px-4">Status</th>
            <th className="border text-center px-4">Start_Date</th>
            <th className="border text-center px-4">Sale_Person</th>
            <th className="border text-center px-4">Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.WO} >
              <td className="border text-center px-4">{item.Customer}</td>
              <td className="border text-center px-4">{item.WO}</td>
              <td className="border text-center px-4">{item.ProjectName}</td>
              <td className="border text-center px-4">{item.SiteAddress}</td>
              <td className="border text-center px-4">{item.Type}</td>
              <td className="border text-center px-4">{item.Status}</td>
              <td className="border text-center px-4">{item.Sale_Person}</td>
              <td className="border text-center px-4">{item.Contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Content;