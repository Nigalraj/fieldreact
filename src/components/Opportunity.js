import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function MyApp() {
  const data = [
    {
      customer: "John",
      wo: 25,
      projectName: "idc",
      siteAddress: "",
      type: "",
      status: "4",
      startDate: "",
      salePerson: "Salesperson1",
      contacts: "",
    },
    {
      customer: "raj",
      wo: 25,
      projectName: "idc",
      siteAddress: "",
      type: "",
      status: "4",
      startDate: "",
      salePerson: "Salesperson1",
      contacts: "",
    },
    {
      customer: "vel",
      wo: 25,
      projectName: "idc",
      siteAddress: "",
      type: "",
      status: "4",
      startDate: "",
      salePerson: "Salesperson1",
      contacts: "",
    },
  ];
  return (
    <>
      <div className="d-flex py-1 justify-content-between align-items-center px-2 bg-light">
        <div>
          <span>Jobs</span>
        </div>
        <div>
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
      <hr className=" my-0" />
      <div>
        <div className="row m-1">
          <div className="col-md-5 rounded-3 bg-light pb-5 px-4">
            <div className="pt-3">
              <select class="form-select " aria-label="Default select example">
                <option selected="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="pt-3">
              <select class="form-select " aria-label="Default select example">
                <option selected="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="pt-3">
              <select class="form-select " aria-label="Default select example">
                <option selected="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="py-3">
              <select class="form-select " aria-label="Default select example">
                <option selected="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="row mx-2 pb-4">
              <div className="col-6 rounded-3 py-2 text-center">Light</div>
              <div className="col-6 rounded-3 py-2 bg-info text-center">
                Info
              </div>
            </div>
          </div>
          <div className="col-md-6 my-4 my-md-0  my-lg-4 ms-md-4 mx-xl-5">
            <div className="">
              <div className="">
                <iframe
                  width="100%"
                  height="300"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps tracker sport</a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-1">
          <div className="col-lg-3 border bg-light col-md-6 p-3 text-center">
            <span className="grey p-2">1</span>
            <span className="ms-2">Customer Approved</span>
          </div>
          <div className="col-lg-3 border bg-light col-md-6 p-3 text-center">
            <span className="grey p-2">2</span>
            <span className="ms-2">Needs Workorder</span>
          </div>
          <div className="col-lg-3 border bg-light col-md-6 p-3 text-center">
            <span className="grey p-2">3</span>
            <span className="ms-2">Schedule WorkOrder</span>
          </div>
          <div className="col-lg-3 border bg-light col-md-6 p-3 text-center">
            <span className="grey p-2">4</span>
            <span className="ms-2">In Progress workorder</span>
          </div>
        </div>
        <div className="d-md-flex mx-2 justify-content-between">
          <div className="d-flex align-items-center my-2">
            <div>
              <span>Show</span>
            </div>
            <div className="ms-2">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="bg-light text-dark border-light"
                >
                  View jobs Needing
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Customer</th>
              <th scope="col">WO</th>
              <th scope="col">ProjectName</th>
              <th scope="col">siteAddress</th>
              <th scope="col">Type</th>
              <th scope="col">status</th>
              <th scope="col">Start Date</th>
              <th scope="col">Sale Person</th>
              <th scope="col">Contacts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/projects`}>{item.projectName}</Link>
                </td>
                <td>{item.wo}</td>
                <td>{item.projectName}</td>
                <td>{item.siteAddress}</td>
                <td>{item.type}</td>
                <td>{item.status}</td>
                <td>{item.startDate}</td>
                <td>{item.salePerson}</td>
                <td>{item.contacts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyApp;
