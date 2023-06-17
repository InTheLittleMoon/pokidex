import React, { useState, useEffect } from "react";
import Mark from "./Mark.js";
import "./Modal.css";

export default function Modal({ showModal, setShowModal }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userError, setUserError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmError, setConfirmError] = useState(null);

  useEffect(() => {
    console.log("password", password);
    if (password.length && passwordConfirm.length) {
      if (password !== passwordConfirm) {
        setPasswordError(false);
        setConfirmError(false);
      } else {
        setPasswordError(null);
        setConfirmError(null);
      }
    }
  }, [password, passwordConfirm]);

  useEffect(() => {
    const promise = fetch("http://localhost:8000/checkUsername", {
      method: "POST",
      body: JSON.stringify({
        username,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      return res.json();
    });
    promise.then((res) => {
      if (res) {
        setUserError(false);
      } else {
        setUserError(true);
      }
    });
  }, [username]);

  if (!showModal) return null;
  const handleOnClick = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
  };
  return (
    <div className="overlay" onClick={(e) => handleOnClick(e)}>
      <div className="modal">
        <div>Username</div>
        <div className="input-container">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Mark status={userError} />
        </div>
        <div>Password</div>
        <div className="input-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Mark status={passwordError} />
        </div>
        <div>Confirm Password</div>
        <div className="input-container">
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Mark status={confirmError} />
        </div>
        <button className="button">Confirm</button>
      </div>
    </div>
  );
}
