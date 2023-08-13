/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { AiOutlineAppstore } from "react-icons/ai";
import { BiSolidCalendarEdit } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import { LiaUserInjuredSolid } from "react-icons/lia";
import { FaX } from "react-icons/fa6";

export default function NavModal({ setShowModal }) {
  return (
    <div className="modal-container">
      <button className="btn btn-danger" onClick={() => setShowModal(false)}>
        <FaX />
      </button>
      <ul className="list-group w-50">
        <li className="list-group-item">
          <Link
            className="d-flex text-decoration-none align-items-center"
            to="/"
            onClick={() => setShowModal(false)}
          >
            <AiOutlineAppstore className="fs-5" />
            <p className="my-auto">Dashboard</p>
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="d-flex text-decoration-none align-items-center"
            to="/patient"
            onClick={() => setShowModal(false)}
          >
            <LiaUserInjuredSolid className="fs-5" />
            <p className="my-auto"> Patients</p>
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="d-flex text-decoration-none"
            to="/appointments"
            onClick={() => setShowModal(false)}
          >
            <BiSolidCalendarEdit className="fs-5" />
            <p className="my-auto"> Appointments</p>
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="d-flex text-decoration-none align-items-center"
            to="/billing"
            onClick={() => setShowModal(false)}
          >
            <RiBillLine className="fs-5" />
            <p className="my-auto">Billing</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
