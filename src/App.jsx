import { useState } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// components
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";

// utility
import { faker } from "@faker-js/faker";
import { createRandomUser } from "./utils/createRandomUser";

// pages
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";

function getUsers() {
  // fetch users from local Storage
  const usersJSON = localStorage.getItem("users");
  // create a new set of users if usersJSON is undefined
  if (!usersJSON) {
    // create 10 random users
    const USERS = faker.helpers.multiple(createRandomUser, {
      count: 10,
    });
    localStorage.setItem("users", JSON.stringify(USERS));
    return USERS;
  }
  // return the USERS
  return JSON.parse(usersJSON);
}

function getAppointments() {
  const appointmentsJSON = localStorage.getItem("appointments");
  if (!appointmentsJSON) return [];
  return JSON.parse(appointmentsJSON);
}

function App() {
  const [records, setRecords] = useState(getUsers());
  const [appointments, setAppointments] = useState(getAppointments());

  const addRecord = () => {
    const newRecord = createRandomUser();
    setRecords([...records, newRecord]);
    // Add to Local Storage
    const users = getUsers();
    users.push(newRecord);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const removeRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
    // Remove from localStorage
    let users = getUsers();
    users = users.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(users));
  };

  const addAppointment = (newAppointment) => {
    // get the user who's appointment is getting booked
    const { user, service } = newAppointment;

    // check in appointments if the user had previously booked an appointment
    // the service
    const appointment = appointments.find(
      (a) => a.user.id === user.id && a.service === service
    );

    if (appointment) {
      // if an appointment exists
      //  increase the quantity of appointment and update appointments
      const updatedAppointments = appointments.map((a) => {
        if (a.user.id === user.id && a.service === service) {
          return {
            ...appointment,
            quantity: a.quantity + 1,
          };
        }
        return a;
      });
      setAppointments(updatedAppointments);
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    } else {
      setAppointments([...appointments, newAppointment]);
      const currentAppointments = getAppointments();
      currentAppointments.push(newAppointment);
      localStorage.setItem("appointments", JSON.stringify(currentAppointments));
    }
  };

  return (
    <div className="wrapper">
      <Router>
        <NavBar />
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/patient"
              element={
                <Patients
                  patients={records}
                  removePatient={removeRecord}
                  addPatient={addRecord}
                />
              }
            />
            <Route
              path="/appointments/*"
              element={
                <Appointments
                  patients={records}
                  addAppointments={addAppointment}
                />
              }
            />
            <Route
              path="/billing/*"
              element={
                <Billing patients={records} appointments={appointments} />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
