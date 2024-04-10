import Dropdown from "react-bootstrap/Dropdown";
import { Icon } from "@iconify/react";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import headers from "../utils/data";
import { Form } from "react-bootstrap";
import ApiServices from "../Constants/ApiService";

function Leads() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [buttontext,setBottonText]=useState(true);

  const handleShowdata=()=>{
    if(buttontext){
      setBottonText(false)
      opportunity();
    }
    else{
      setBottonText(true)
      opportunit_y();
    }
  }

    const opportunit_y =()=>{
      ApiServices.getOpportunity()
      .then((response) => {
        const form = response.data.map(
          ({ Name, ProjectName, Status, Phone, Action, BidDate }) => ({
            Name: Name,
            ProjectName: ProjectName,
            Status: Status,
            Phone: Phone,
            Action: Action,
            BidDate: BidDate,
          })
        );
        setData(form);
      })
      .catch((error) => console.error("Error fetching data:", error));
    }
 
  const opportunity=()=>{
    ApiServices.getOpportunity()
      .then((response) => {
        const form = response.data.filter(({ IsCustomer }) => IsCustomer === true) 
        .map(({ Name, ProjectName, Status, Phone, Action, BidDate, IsCustomer }) => ({
          Name: Name,
          ProjectName: ProjectName,
          Status: Status,
          Phone: Phone,
          Action: Action,
          BidDate: BidDate,
          isCustomer: IsCustomer,
        }));
        setData(form);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
useEffect(()=>{
  opportunit_y();
},[])
  const navigate = useNavigate();

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredItems = data.filter(
    (item) =>
      (item.projectName &&
        item.projectName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.Name &&
        item.Name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.ProjectName &&
        item.ProjectName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.Status &&
        item.Status.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.Phone &&
        item.Phone.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.BidDate &&
        item.BidDate.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const currentItemsOnPage = filteredItems.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const nextPage = () => {
    if (indexOfLastItem < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = currentPage > 3 ? currentPage - 2 : 1;
    let endPage = startPage + 3 >= pageCount ? pageCount : startPage + 3;

    if (endPage - startPage < 3) {
      startPage = endPage - 3 >= 1 ? endPage - 3 : 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => setPage(i)}
          className={i === currentPage ? "active1" : "inactive"}
        >
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  const Addleads = () => {
    navigate("/dashboard/start");
  };

  return (
    <>
      <div className="d-flex py-1 py-md-3 flex-column flex-md-row justify-content-between align-items-md-center px-2 bg-light">
        <div className="mt-2 ">
          <h4>Leads</h4>
        </div>
        <div className="my-3 my-md-0 d-flex flex-column flex-md-row">
          <Button variant="warning p-2 px-3 rounded-4" onClick={handleShowdata}>{buttontext ? "view converted" :"view UnConverted"}</Button>
          <Button
            variant="warning p-2 px-3 rounded-4"
            className="my-2 mx-md-2  my-md-0"
          >
            view Archieved
          </Button>

          <Button variant="success p-2 px-3 rounded-4" onClick={Addleads}>
            Add Lead
          </Button>
        </div>
      </div>
      <hr className="my-0" />
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
                <option selected="">Select a status</option>
                <option value="1">contacted</option>
                <option value="2">Estimate Request</option>
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
              <div className="col-6  text-center">
                <div className="bg-grey py-2 rounded-3 ">
                  <Icon
                    icon="lets-icons:export-fill"
                    width="1.2rem"
                    height="1.2rem"
                    style={{ color: "black" }}
                  />
                  Export
                </div>
              </div>
              <div className="col-6 text-center">
                <div className="rounded-3 py-2 bg-info">Info</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-4 my-md-0  my-lg-4 ms-md-4 mx-xl-5">
            <div className="">
              <div className="">
                <iframe
                  title="maps"
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
              <Form.Control
                className="form-control mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive mx-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Project Name</th>
              <th scope="col">Status</th>
              <th scope="col">Date Created</th>
              <th scope="col">Contact</th>
              <th scope="col">Action</th>
              <th scope="col">Assign</th>
              <th scope="col">Bid Date</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>
            {currentItemsOnPage?.map((item, index) => (
              <tr key={index}>
                <td>james</td>
                <td>{item.ProjectName}</td>
                <td>{item.Status}</td>
                <td>12-04-2023</td>
                <td>{item.Phone}</td>
                <td>In progress</td>
                <td>rtg</td>
                <td>{item.BidDate}</td>
                <td>j</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end ">
        <div>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button className="border-0 bg-white">{renderPageNumbers()}</button>
          <button onClick={nextPage} disabled={indexOfLastItem >= data.length}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Leads;
