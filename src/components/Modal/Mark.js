import React from "react";

export default function Mark({ status }) {
  if (status === false) {
    return <div className="mark" />;
  }
}
