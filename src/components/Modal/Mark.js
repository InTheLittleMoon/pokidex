import React from "react";

export default function Mark({ status }) {
  console.log("status", status);
  if (status === false) {
    return <div className="mark" />;
  } else if (status === true) {
    return <div className="mark-green" />;
  }
}
