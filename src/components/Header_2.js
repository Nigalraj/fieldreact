import { Icon } from "@iconify/react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Offcanvasop from "./Offcanvas";
import Content_1 from "./Content_1";
import Content_2 from "./Content_2";

function Header_2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="bg-primary font text-white mt-1 d-none d-lg-block m-0">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <span className="px-xl-3 py-3 ps-lg-2 ps-xl-3">FIELD GROOVC</span>
            <span className="py-xl-3 ps-3">Leads</span>
            <span className="px-3 py-3">Opportunities</span>
            <span className="py-3">Jobs</span>
            <div className="ps-3 py-3">
              <span>
                Accounting <Icon icon="gridicons:dropdown" />
              </span>
            </div>
            <div className="ps-3 py-3">
              <span>
                Coustmers <Icon icon="gridicons:dropdown" />
              </span>
            </div>
            <div className="ps-3 py-3">
              <span>
                Inventory <Icon icon="gridicons:dropdown" />
              </span>
            </div>
            <div className="ps-3 py-3">
              <span>
                Dispatcher <Icon icon="gridicons:dropdown" />
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div>
              <Icon icon="gridicons:dropdown" />
              <span>ABINGTON</span>
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
              <span>Nigal Raj</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none ">
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
            <Offcanvasop/>
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
        <div class="scrollmenu bg-primary text-white py-3">
           <span className="mx-3">Leads</span>
           <span>Opportunities</span>
           <span className="mx-3">Jobs</span>
           <span>Accounting <Icon icon="gridicons:dropdown" /></span>
           <span className="mx-3">Coustmers <Icon icon="gridicons:dropdown" /></span>
           <span>Inventory <Icon icon="gridicons:dropdown" /></span>
           <span className="mx-3">Dispatcher <Icon icon="gridicons:dropdown" /> </span>
        </div>
      </div>
    </div>
  );
}

export default Header_2;