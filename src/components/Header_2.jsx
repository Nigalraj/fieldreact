import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Offcanvasop from "./Offcanvas";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ApiServices from "../Constants/ApiService";

function Header_2() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    ApiServices.getAllUser()
      .then((response) => {
        const email = localStorage.getItem("email");
        const usernameFromEmail = email.substring(0, email.indexOf('@'));
        setEmail(usernameFromEmail);
        const filteredUser = response.data.filter(
          (item) => item.email === email
        );
        if (filteredUser) {
          console.log(filteredUser.Firstname);
        } else {
          console.log("User with the specified email not found.");
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  });

  return (
    <div>
      <div className="bg-primary font text-white mt-1 d-none d-lg-block m-0">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link
              to="/dashboard"
              className="px-xl-3 fs-6 py-3 ps-lg-2 ps-xl-3 text-decoration-none text-white"
            >
              FIELD GROOVC
            </Link>
            <Link to="/dashboard/leads" className="text-decoration-none">
              <span className="py-xl-3 fs-6 ps-3 text-white">Leads</span>
            </Link>
            <Link to="/dashboard/opportunity" className="text-decoration-none">
              <span className="px-3 text-white  fs-6 py-3">Opportunities</span>
            </Link>
            <Link to="/dashboard/jobs" className="text-decoration-none">
              <span className="py-3 text-white fs-6">Jobs</span>
            </Link>
            <div class="dropdown">
              <button
                class="btn btn-sky border-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Accounting
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/action">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/another">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/sometimes">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-sky border-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Customers
              </button>
              <ul class="dropdown-menu px-2">
                <li>
                  <Link
                    to="/dashboard/customermanagement"
                    className="text-decoration-none text-dark"
                  >
                    Customer Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/customermanagement"
                    className="text-decoration-none text-dark"
                  >
                    Customer Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/customermanagement"
                    className="text-decoration-none text-dark"
                  >
                    Customer Management
                  </Link>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-sky border-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/action">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/another">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/someting">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-sky border-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dispatcher
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/action">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/another">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/sometimes">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div class="dropdown">
              <button
                class="btn btn-sky border-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ABINGTON
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/action">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/another">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/something">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-2 mx-xl-3">
              <input
                type="text"
                id="input"
                class="form-control rounded-5 custom-size"
                placeholder="Search"
                aria-describedby="passwordHelpInline"
              />
            </div>
            <div className="me-xl-4 me-lg-2">
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <div className="bg-primary d-flex justify-content-between text-white">
          <span className="py-2 ms-3">FieldGroove</span>
          <Button variant="primary" onClick={handleShow} className="me-2">
            <Icon icon="prime:bars" width="30" />
          </Button>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton className="bg-primary text-white">
            <Offcanvas.Title>FieldGroove</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Offcanvasop />
          </Offcanvas.Body>
        </Offcanvas>
        <div className="bg-primary px-3">
          <input
            type="text"
            id="input"
            class="form-control rounded-5 custom-size"
            placeholder="Search"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div class="scrollmenu bg-primary d-flex text-white py-3">
          <div className="mt-2">
            <span className="mx-3">Leads</span>
          </div>
          <div className="mt-2">
            <span>Opportunities</span>
          </div>
          <div className="mt-2">
            <span className="mx-3">Jobs</span>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-sky border-0 dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Accounting
            </button>
            <ul
              class="dropdown-menu "
              style={{
                position: "fixed !important",
                inset: "90px auto auto 90px !important",
              }}
            >
              <li>
                <a class="dropdown-item" href="/action">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/another">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-sky border-0 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Customers
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/action">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/another">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/something">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-sky border-0 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Inventory
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-sky border-0 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Accounting
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-sky border-0 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dispatcher
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_2;
