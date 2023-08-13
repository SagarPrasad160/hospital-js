/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// utility
import { removeDuplicateUsers } from "../utils/removeDuplicates";
import { ServicePrices } from "../utils/ServicePrices";

function Billing({ appointments, patients }) {
  // get users from appointments array
  const users = appointments.map((appointment) => appointment.user);

  const fileteredUsers = removeDuplicateUsers(users);

  const [userAppointments, setUserAppointments] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  const params = useParams();
  const id = Object.values(params)[0];

  useEffect(() => {
    // check if there exists an id in the params
    if (id) {
      // find the user with the id

      const patient = patients.find((p) => p.id === id);
      setCurrentUser(patient);
      // find all the appointments of the user with that id

      const allUserAppointments = appointments.filter(({ user }) => {
        return user.id === id;
      });
      setUserAppointments(allUserAppointments);
    }
  }, [id, appointments, patients]);

  const renderedUsers = fileteredUsers.map((patient) => {
    return (
      <li
        className={`list-group-item d-flex flex-wrap w-100 mx-auto mb-1 ${
          patient.id === id ? "bg-info" : ""
        }`}
        key={patient.id}
      >
        <div>
          <img
            className="rounded-circle image-fluid mt-4"
            src={patient.avatar}
            alt="User Image"
          />
        </div>
        <div className="p-4">
          <h5 className="card-title">{patient.name}</h5>
          <p className="card-text">
            <span className="px-2"> {patient.age}</span>
            {patient.sex[0].toUpperCase() + patient.sex.slice(1)}.
          </p>
          <p className="fw-bold">{patient.address}</p>
          <Link to={`/billing/${patient.id}`} className="btn btn-success">
            View Prescription
          </Link>
        </div>
      </li>
    );
  });

  const renderedAppointments = userAppointments.map((usrApt, index) => {
    const servicePrice = ServicePrices[usrApt.service];
    return (
      <tr key={usrApt.service}>
        <th scope="row">{index + 1}</th>
        <td>{usrApt.service}</td>
        <td>{usrApt.quantity}</td>
        <td>{servicePrice}</td>
        <td>{servicePrice * usrApt.quantity}</td>
      </tr>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col">
          <h1>Billing Overview</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <ul className="list-group">
            {renderedUsers.length ? (
              renderedUsers
            ) : (
              <div>Add An Appointment</div>
            )}
          </ul>
        </div>
        <div className="col-md-8">
          <div className="h-auto border p-4 rounded-3 bg-white">
            <div className="table-responsive">
              <div className="fs-5 fw-bold mb-2">Billing Details</div>
              <table className="table table-borderless table-secondary mb-0">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Bill No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{currentUser?.name}</td>
                    <td>{currentUser?.age}</td>
                    <td>{currentUser?.sex}</td>
                    <td>{currentUser?.billNumber}</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Sr.no</th>
                    <th scope="col">Service Type</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>{renderedAppointments}</tbody>
              </table>
            </div>
            <div>
              <table className="table table-borderless table-secondary">
                <thead>
                  <tr>
                    <th scope="col">Tax</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>200</td>
                    <td>50</td>
                    <td>
                      &#8377;
                      {currentUser &&
                        userAppointments.reduce((acc, curr) => {
                          const servicePrice =
                            ServicePrices[curr.service] * curr.quantity;
                          return acc + servicePrice;
                        }, 0) + 150}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
