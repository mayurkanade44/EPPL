import React from "react";

export const Loading = () => {
  return (
    <div className="position-absolute top-50 start-50">
      <div
        className="spinner-border"
        style={{ width: 100, height: 100 }}
        role="status"
      ></div>
    </div>
  );
};
