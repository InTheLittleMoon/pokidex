import React, { useState } from "react";
import Mark from "./Mark.js";
import "./Modal.css";

export default function Modal({ showModal, setShowModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  if (!showModal) return null;
  const handleOnClick = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
  };
  return (
    <div className="overlay" onClick={(e) => handleOnClick(e)}>
      <div className="modal">
        <div>Username</div>
        <div>
          <input />
          <Mark status={null} />
        </div>
        <div>Password</div>
        <div>
          <input type="password" />
          <Mark status={null} />
        </div>
        <div>Confirm Password</div>
        <div className="input-container">
          <input type="password" />
          <Mark status={null} />
        </div>
        <button className="button">Confirm</button>
      </div>
    </div>
  );
}
