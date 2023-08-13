import { useState } from "react";

import { AiOutlineAlignCenter } from "react-icons/ai";
import NavModal from "./NavModal";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
  }

  return (
    <nav className="navbar nav">
      <div className="navbar-header d-flex p-2">
        <div className="navbar-brand text-white">Hospital Management</div>
        <button className="btn btn-light show-btn" onClick={handleClick}>
          <AiOutlineAlignCenter />
        </button>
        {showModal && <NavModal setShowModal={setShowModal} />}
      </div>
    </nav>
  );
}
