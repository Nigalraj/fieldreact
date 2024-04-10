import React, { useEffect, useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ApiServices from "../Constants/ApiService";

const User = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const dropdata = [
    { name: "All Administrator Users" },
    { name: "All Sales Manager Users" },
    { name: "All Manager Users" },
    { name: "All Sales Users" },
    { name: "All Installer Users" },
    { name: "All Accounting Users" },
    { name: "All Operations Users" },
    { name: "All Inventory Users" },
    { name: "All Limited Sales Users" },
    { name: "All Service Tech Users" },
  ];

  useEffect(() => {
    ApiServices.getAllUser()
      .then((response) => {
        const data = response.data;
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const header = ["Name", "Location", "Username", "Roles"];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredItems = data.filter(
    (item) =>
      item.Firstname &&
      item.Firstname.toLowerCase().includes(searchQuery.toLowerCase())
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
    <div className="col-md-8 col-12">
      <div className=" p-3 bg-light">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1>Users</h1>
          </div>
          <div className="d-flex">
            <span className="mx-2">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  View
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Inactive Users
                  </Dropdown.Item>
                  <hr />
                  {dropdata.map((item, index) => (
                    <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </span>
            <span>
              <Link to="/dashboard/user/createuser">
                <Button variant="success">Add User</Button>
              </Link>
            </span>
          </div>
        </div>
      </div>
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
      {data.length > 0 ? (
        <div>
          <div className="table-responsive table-bordered p-3">
            <table className="table  ">
              <thead className="table-bordered">
                {header.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </thead>
              <tbody className="">
                {currentItemsOnPage?.map((item, index) => (
                  <tr key={index}>
                    <td className="border">{item.Firstname}</td>
                    <td className="border">{item.location}</td>
                    <td className="border">{item.Username}</td>
                    <td className="border">Accounting</td>
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
              <button className="border-0 bg-white">
                {renderPageNumbers()}
              </button>
              <button
                onClick={nextPage}
                disabled={indexOfLastItem >= data.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="row mx-0 bg-warning">
            <div className="d-flex justify-content-center">
            No content
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
