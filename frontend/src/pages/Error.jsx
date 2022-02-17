import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <section className="position-absolute top-50 start-50 translate-middle">
        <h1 className="text-center">404</h1>
        <h3>
          Sorry, page you are trying cannot be found{" "}
          <Link to="/" className="btn btn-dark">
            Back Home
          </Link>
        </h3>
      </section>
    </div>
  );
};

export default Error;
