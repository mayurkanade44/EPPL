import React from "react";

export const Loading = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div
          className="spinner-border"
          style={{ width: 100, height: 100 }}
          role="status"
        ></div>
      </div>
    </div>
  );
};
