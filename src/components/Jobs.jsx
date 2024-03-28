import Dropdown from "react-bootstrap/Dropdown";
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import headers from "../utils/data";
import ApiServices from "../Constants/ApiService";

function Jobs() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    ApiServices.getEstimate()
      .then((response) => {
        const form = response.data.map(({ Name }) => ({
          Name: Name,
        }));
        setData(form);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredItems = data.filter(
    (item) =>
      (item.CreatedBy &&
        item.CreatedBy.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.ModifiedBy &&
        item.ModifiedBy.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.Status &&
        item.Status.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.Name &&
        item.Name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.Address1 &&
        item.Address1.toLowerCase().includes(searchQuery.toLowerCase()))
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

  return (
    <>
      <div className="d-flex py-2 flex-column flex-md-row justify-content-between align-md-items-center px-3 bg-light">
        <div className="mt-2">
          <h4>Jobs</h4>
        </div>
        <div className="d-flex my-2 my-md-0">
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
                <option selected="">Select a Status</option>
                <option value="1">Active</option>
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
              <input
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
      <div className="table-responsive mx-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Customer</th>
              <th scope="col">WO</th>
              <th scope="col">Project Name/Number</th>
              <th scope="col">Site Address</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Start Date</th>
              <th scope="col">SalesPerson</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {currentItemsOnPage?.map((item, index) => (
              <tr key={index}>
                <td>
                  <Link to="/dashboard/projects">fgjn</Link>
                </td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Opportunity Name</td>
                <td>{item.Name}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
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

export default Jobs;
