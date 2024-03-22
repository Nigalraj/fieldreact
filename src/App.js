import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Registers from "./components/Register";
import Login from "./components/Login";
import Second from "./components/second";
import Lead from "./components/Lead";
import Calendar from "./components/Calender";
import Opportunity from "./components/Opportunity";
import Customer from "./components/Customer";
import Leads from "./components/Leads";
import Jobs from "./components/Jobs";
import React, { useState } from "react";
import PrivateRoute from "./Router/PrivateRoute";
import Layout from "./Layout";

function App() {
  const access = localStorage.getItem("accessToken");

  const [isSignedIn, setIsSignedIn] = useState(access !== null);
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setIsSignedIn={setIsSignedIn} />} />
        <Route path="/register" element={<Registers />} />
        <Route path="/register" element={<Registers />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="/dashboard" element={<PrivateRoute isSignedIn={isSignedIn}><Second /></PrivateRoute>} />
          <Route path="/dashboard/start" element={<PrivateRoute isSignedIn={isSignedIn}><Lead /></PrivateRoute>} />
          <Route path="/dashboard/jobs" element={<PrivateRoute isSignedIn={isSignedIn}><Jobs /></PrivateRoute>} />
          <Route path="/dashboard/calendar" element={<PrivateRoute isSignedIn={isSignedIn}><Calendar/></PrivateRoute>} />
          <Route path="/dashboard/opportunity" element={<PrivateRoute isSignedIn={isSignedIn}><Opportunity/></PrivateRoute>} />
          <Route path="/dashboard/leads" element={<PrivateRoute isSignedIn={isSignedIn}><Leads /></PrivateRoute>} />
          <Route path="/dashboard/projects" element={<PrivateRoute isSignedIn={isSignedIn}><Customer /></PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
