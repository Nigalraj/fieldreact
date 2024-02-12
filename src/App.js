import Header from "./components/Header";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Registers from "./components/Register";
import Login from "./components/Login";
import Second from "./components/second";

function App() {
  const currentPath = window.location.pathname;
  console.log(currentPath, "path");

  const showContainer = currentPath === '/' || currentPath === '/register';

  return (
    <BrowserRouter>
      {showContainer ? (
        <>
          <Header  />
          <Container>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Registers />} />
            </Routes>
          </Container>
          <Footer />
        </>
      ) : (
        <Routes>
          
          <Route path="/way" element={<Second />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
