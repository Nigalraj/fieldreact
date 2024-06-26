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
import  Maps_1  from "./components/Maps";
import User from "./components/User";
import Adduser from "./components/Adduser";
import CustomerManagement from "./components/CustomerManagement";
import Addcustomer from "./components/Addcustomer";
import Task from "./components/Task";

function App() {
  const access = localStorage.getItem("accessToken");

  const [isSignedIn, setIsSignedIn] = useState(access !== null);
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registers />}/>
        <Route path="/dashboard" element={<Layout />}>
          <Route path="/dashboard" element={<PrivateRoute isSignedIn={isSignedIn}><Second /></PrivateRoute>} />
          <Route path="/dashboard/start" element={<PrivateRoute isSignedIn={isSignedIn}><Lead /></PrivateRoute>} />
          <Route path="/dashboard/jobs" element={<PrivateRoute isSignedIn={isSignedIn}><Jobs /></PrivateRoute>} />
          <Route path="/dashboard/calendar" element={<PrivateRoute isSignedIn={isSignedIn}><Calendar/></PrivateRoute>} />
          <Route path="/dashboard/opportunity" element={<PrivateRoute isSignedIn={isSignedIn}><Opportunity/></PrivateRoute>} />
          <Route path="/dashboard/leads" element={<PrivateRoute isSignedIn={isSignedIn}><Leads /></PrivateRoute>} />
          <Route path="/dashboard/projects" element={<PrivateRoute isSignedIn={isSignedIn}><Customer /></PrivateRoute>} />
          <Route path="/dashboard/maps" element={<PrivateRoute isSignedIn={isSignedIn}><Maps_1/></PrivateRoute>} />
          <Route path="/dashboard/user" element={<PrivateRoute isSignedIn={isSignedIn}><User/></PrivateRoute>} />
          <Route path="/dashboard/user/createuser" element={<PrivateRoute isSignedIn={isSignedIn}><Adduser/></PrivateRoute>} />
          <Route path="/dashboard/customermanagement" element={<PrivateRoute isSignedIn={isSignedIn}><CustomerManagement/></PrivateRoute>} />
          <Route path="/dashboard/customermanagement/addcustomer" element={<PrivateRoute isSignedIn={isSignedIn}><Addcustomer/></PrivateRoute>} />
          <Route path="/dashboard/tasks" element={<PrivateRoute isSignedIn={isSignedIn}><Task/></PrivateRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
