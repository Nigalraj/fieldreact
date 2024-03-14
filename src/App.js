import Header from "./components/Header";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Registers from "./components/Register";
import Login from "./components/Login";
import Second from "./components/second";
import Header_2 from "./components/Header_2";
import Sidebar from "./components/Sidebar";
import { Row, Col } from "react-bootstrap";
import Lead from "./components/Lead";
import Error from "./components/Error";
import Calendar from "./components/Calender";
import Opportunity from "./components/Opportunity";
import Customer from "./components/Customer";

function App() {
  const currentPath = window.location.pathname;
  console.log(currentPath, "path");

  const showContainer = currentPath === "/" || currentPath === "/register";

  return (
    <BrowserRouter>
      {showContainer ? (
        <>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Registers />} />
            </Routes>
          </Container>
          <Footer />
        </>
      ) : (
        <>
          <Header_2 />
          <Row className="mx-0">
            <Col md={1} lg={1} className="d-none bg-light d-md-inline-flex px-0">
              <Sidebar />
            </Col>
            <Col md={11} lg={11} className="px-0">
              <Routes>
                <Route path="/dashboard" element={<Second />} />
                <Route path="/start" element={<Lead />} />
                <Route path="/add" element={<Lead />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/opportunity" element={<Opportunity/>}/>
                <Route path="/projects" element={<Customer/>}/>
              </Routes>
            </Col>
          </Row>
        </>
      )}
     
    </BrowserRouter>
  );
}

export default App;
