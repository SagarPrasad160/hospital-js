import { Link, useLocation } from "react-router-dom";

import { AiOutlineAppstore } from "react-icons/ai";
import { BiSolidCalendarEdit } from "react-icons/bi";
import { RiBillLine } from "react-icons/ri";
import { LiaUserInjuredSolid } from "react-icons/lia";

export default function SideBar() {
  const { pathname } = useLocation();
  return (
    <div className="sidenav text-white">
      <h1 className="m-5">LOGO</h1>
      <Link
        to="/"
        className={`navlink
         d-flex align-items-center
         text-decoration-none text-white mw-auto
         w-75 rounded mx-auto mb-4 ${pathname === "/" ? "active" : ""}`}
      >
        <h2>
          <AiOutlineAppstore className="fw-bold fs-5 text-white" />
        </h2>
        Dashboard
      </Link>
      <Link
        to="/patient"
        className={`navlink
         d-flex align-items-center
         text-decoration-none text-white 
         tex-center
         w-75 rounded mx-auto mb-4 ${pathname === "/patient" ? "active" : ""}`}
      >
        <h2>
          <LiaUserInjuredSolid className="fw-bold fs-5 text-white" />
        </h2>
        Patients
      </Link>
      <Link
        to="/appointments"
        className={`navlink
         d-flex align-items-center
         text-decoration-none text-white mw-auto
         w-75 rounded mx-auto mb-4 text-center ${
           pathname === "/appointments" ? "active" : ""
         }`}
      >
        <h2>
          <BiSolidCalendarEdit className="fw-bold fs-5 text-white" />
        </h2>
        Appointments
      </Link>
      <Link
        to="/billing"
        className={`navlink
         d-flex align-items-center
         text-decoration-none text-white 
         w-75 rounded mx-auto mb-4 text-center ${
           pathname === "/billing" ? "active" : ""
         }`}
      >
        <h2>
          <RiBillLine className="fw-bold fs-5 text-white" />
        </h2>
        Billing
      </Link>
    </div>
  );
}
